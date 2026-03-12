import { Fragment } from 'react';
import styles from './SectionHero.module.css';

import keyVisualCatalogic from '../../assets-new/catalogic-assets/key-visual.jpg?w=800;1200;1600&format=webp&as=img';
import keyVisualTeachSmartSteps from '../../assets-new/teachsmartsteps-assets/key-visual.jpg?w=800;1200;1600&format=webp&as=img';
import keyVisualAccessAbility from '../../assets-new/accessability-assets/key-visual.jpg?w=800;1200;1600&format=webp&as=img';

const PROJECTS = {
  Catalogic: {
    context:
      'AI-powered tool for cataloging and managing music libraries for DJs',
    team: 'Jannik Aßfalg, Fabrice Rio',
    projectContext: 'Bachelor thesis',
    myRole: 'Research, Concept, Visual Design, Prototyping, Testing',
    duration: '20 Weeks',
    year: '2025',
    keyVisual: keyVisualCatalogic,
    keyVisualAlt: 'Catalogic project key visual',
  },
  TeachSmartSteps: {
    context:
      'A flexible task-generation tool that helps primary school teachers integrate media literacy into everyday teaching.',
    team: 'Lea Hafebier, Nina Hielscher, Fabrice Rio',
    projectContext: '6th semester project, Lean Design',
    myRole: 'Ideation, Research, Concept, Prototyping',
    duration: '8 Weeks',
    year: '2024/25',
    keyVisual: keyVisualTeachSmartSteps,
    keyVisualAlt: 'TeachSmartSteps project key visual',
  },
  AccessAbility: {
    context:
      'A concept for a modular controller for electric wheelchairs that adapts to individual motor skills.',
    team: 'Jun Wang, Anton Stallbörger, Fabrice Rio',
    projectContext: '4th semester project, Interface',
    myRole: 'Rendering, Prototyping, Testing, Documentation',
    duration: '4 Weeks',
    year: '2024/25',
    keyVisual: keyVisualAccessAbility,
    keyVisualAlt: 'AccessAbility project key visual',
  },
};

const INFO_ROWS = [
  { key: 'team', label: 'Team' },
  { key: 'projectContext', label: 'Context' },
  { key: 'myRole', label: 'My Role' },
  { key: 'duration', label: 'Duration' },
  { key: 'year', label: 'Year' },
];

const INFO_LEFT_KEYS = ['team', 'projectContext', 'myRole'];
const INFO_RIGHT_KEYS = ['duration', 'year'];

const SectionHero = ({ project }) => {
  const data = PROJECTS[project];

  if (!data) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="project-context">
      <img
        src={data.keyVisual.src}
        srcSet={data.keyVisual.srcset}
        sizes="(max-width: 480px) 100vw, (max-width: 992px) 100vw, 75vw"
        width={data.keyVisual.w}
        height={data.keyVisual.h}
        alt={data.keyVisualAlt}
        className={styles.keyVisual}
      />
      <p id="project-context" className={styles.context}>
        {data.context}
      </p>
      <div className={styles.infoBlock}>
        <div className={styles.infoBlockLeft}>
          <hr className={styles.divider} aria-hidden="true" />
          {INFO_LEFT_KEYS.map((key, index) => {
            const { label } = INFO_ROWS.find((r) => r.key === key);
            const isLastLeft = index === INFO_LEFT_KEYS.length - 1;
            return (
              <Fragment key={key}>
                <div className={styles.infoRow}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.value}>{data[key]}</span>
                </div>
                {!isLastLeft && <hr className={styles.divider} aria-hidden="true" />}
              </Fragment>
            );
          })}
        </div>
        <div className={styles.infoBlockRight}>
          <hr className={styles.divider} aria-hidden="true" />
          {INFO_RIGHT_KEYS.map((key) => {
            const { label } = INFO_ROWS.find((r) => r.key === key);
            return (
              <Fragment key={key}>
                <div className={styles.infoRow}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.value}>{data[key]}</span>
                </div>
                <hr className={styles.divider} aria-hidden="true" />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
