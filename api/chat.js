import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const CASE_STUDIES = {
  catalogic: 'catalogic.md',
  teachsmartsteps: 'teachsmartsteps.md',
  accessability: 'accessability.md',
};

function loadDoc(caseStudy) {
  const filename = CASE_STUDIES[caseStudy];
  if (!filename) return null;
  return readFileSync(join(__dirname, 'data', filename), 'utf-8');
}

function buildSystemPrompt(doc, caseStudy) {
  return `You are a helpful assistant embedded in a design portfolio website. You answer questions about the following case study project based ONLY on the provided documentation.

## Rules
- Answer questions accurately based on the documentation below.
- Respond in the same language the user writes in (auto-detect).
- Be concise but thorough — recruiters want clear, structured answers.
- If asked something not covered in the documentation, say so honestly.
- Do NOT make up information that is not in the documentation.
- You may structure answers with bullet points or short paragraphs.
- Keep a professional, friendly tone.

## Case Study Documentation: ${caseStudy}

${doc}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, caseStudy } = req.body;

  if (!messages || !Array.isArray(messages) || !caseStudy) {
    return res.status(400).json({ error: 'Missing messages or caseStudy' });
  }

  const doc = loadDoc(caseStudy);
  if (!doc) {
    return res.status(400).json({ error: 'Unknown case study' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const client = new Anthropic({ apiKey });

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    const stream = await client.messages.stream({
      model: 'claude-haiku-4-5-20241022',
      max_tokens: 1024,
      system: buildSystemPrompt(doc, caseStudy),
      messages: messages.map(({ role, content }) => ({ role, content })),
    });

    for await (const event of stream) {
      if (
        event.type === 'content_block_delta' &&
        event.delta.type === 'text_delta'
      ) {
        res.write(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('Chat API error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to generate response' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Stream error' })}\n\n`);
      res.end();
    }
  }
}
