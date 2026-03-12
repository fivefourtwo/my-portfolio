import { Link } from 'react-router-dom';
import styles from './NextProject.module.css';

const NextProject = ({ title, href }) => {
  return (
    <section className={styles.section} aria-label="Next project">
      <div className={styles.container}>
        <Link to={href} className={styles.block}>
          <span className={styles.navLabel}>Next Project</span>
          <div className={styles.navTitleWrapper}>
            <h3 className={styles.navTitle}>{title}</h3>
            <div className={styles.navIcon} aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NextProject;
