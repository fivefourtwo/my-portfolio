import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Chat, Close, Send } from '@carbon/icons-react';
import styles from './CaseStudyChat.module.css';

const SUGGESTED_QUESTIONS = {
  catalogic: [
    'What problem does Catalogic solve?',
    'Which design methods were used?',
    'How does the AI analysis work?',
  ],
  teachsmartsteps: [
    'What is Teach Smart Steps about?',
    'How was the LLM integrated?',
    'What research methods were used?',
  ],
  accessability: [
    'What is the AccessAbility project?',
    'How was user research conducted?',
    'What is the modular control concept?',
  ],
};

const PROJECT_NAMES = {
  catalogic: 'Catalogic',
  teachsmartsteps: 'Teach Smart Steps',
  accessability: 'AccessAbility',
};

export default function CaseStudyChat({ caseStudy }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const assistantMessage = { role: 'assistant', content: '' };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          caseStudy,
        }),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                accumulated += parsed.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: 'assistant',
                    content: accumulated,
                  };
                  return updated;
                });
              }
            } catch {
              // skip unparseable chunks
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content:
            'Sorry, something went wrong. Please try again later.',
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const panelVariants = prefersReducedMotion
    ? {}
    : {
        hidden: { opacity: 0, y: 16, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
          opacity: 0,
          y: 16,
          scale: 0.95,
          transition: { duration: 0.15 },
        },
      };

  const projectName = PROJECT_NAMES[caseStudy] || caseStudy;
  const suggestions = SUGGESTED_QUESTIONS[caseStudy] || [];

  return (
    <div className={styles.chatWrapper}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatPanel}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-label={`Chat about ${projectName}`}
          >
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderInfo}>
                <span className={styles.chatHeaderTitle}>
                  Ask about {projectName}
                </span>
                <span className={styles.chatHeaderSubtitle}>
                  AI-powered project assistant
                </span>
              </div>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <Close size={20} />
              </button>
            </div>

            <div className={styles.chatMessages}>
              {messages.length === 0 && (
                <div className={styles.welcomeArea}>
                  <p className={styles.welcomeText}>
                    Hi! Ask me anything about the {projectName} project
                    &mdash; process, methods, decisions, or outcomes.
                  </p>
                  <div className={styles.suggestions}>
                    {suggestions.map((q) => (
                      <button
                        key={q}
                        className={styles.suggestionChip}
                        onClick={() => sendMessage(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${styles.message} ${
                    msg.role === 'user'
                      ? styles.messageUser
                      : styles.messageAssistant
                  }`}
                >
                  <div className={styles.messageBubble}>
                    {msg.content || (
                      <span className={styles.typingIndicator}>
                        <span />
                        <span />
                        <span />
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form className={styles.chatInputArea} onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                className={styles.chatInput}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                disabled={isLoading}
                aria-label="Type your question"
              />
              <button
                type="submit"
                className={styles.sendButton}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.chatBubble}
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        whileHover={prefersReducedMotion ? {} : { scale: 1.08 }}
        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      >
        {isOpen ? <Close size={24} /> : <Chat size={24} />}
      </motion.button>
    </div>
  );
}
