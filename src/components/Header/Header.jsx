import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoVideoSrc from '../../assets-new/logo-animation.mov';
import logoReverseVideoSrc from '../../assets-new/logo-animation-reverse.mov';

const Header = ({ projectTitle }) => {
  const forwardRef = useRef(null);
  const reverseRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState('forward');
  const activeVideoRef = useRef('forward');

  const handleLogoMouseEnter = () => {
    if (activeVideoRef.current === 'forward') {
      const video = forwardRef.current;
      if (video) video.play();
    }
  };

  const handleLogoMouseLeave = () => {
    if (activeVideoRef.current === 'forward') {
      const video = forwardRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      return;
    }
    if (activeVideoRef.current === 'reverse') {
      const video = reverseRef.current;
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }
  };

  const handleForwardEnded = () => {
    activeVideoRef.current = 'reverse';
    const reverse = reverseRef.current;
    if (reverse) reverse.currentTime = 0;
    setActiveVideo('reverse');
  };

  const handleReverseEnded = () => {
    const forward = forwardRef.current;
    if (forward) {
      forward.currentTime = 0;
      forward.pause();
    }
    activeVideoRef.current = 'forward';
    setActiveVideo('forward');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link
          to="/"
          className={styles.logoLink}
          aria-label="Fabrice Rio home"
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
          onFocus={handleLogoMouseEnter}
          onBlur={handleLogoMouseLeave}
        >
          <video
            ref={forwardRef}
            src={logoVideoSrc}
            className={activeVideo === 'forward' ? styles.logo : `${styles.logo} ${styles.logoHidden}`}
            width={24}
            height={24}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onEnded={handleForwardEnded}
          />
          <video
            ref={reverseRef}
            src={logoReverseVideoSrc}
            className={activeVideo === 'reverse' ? styles.logo : `${styles.logo} ${styles.logoHidden}`}
            width={24}
            height={24}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onEnded={handleReverseEnded}
          />
        </Link>
        <Link to="/about" className={styles.infoLink}>
          About
        </Link>
        <Link to="/contact" className={styles.contactLink}>
          Contact
        </Link>
        {projectTitle && (
          <span className={styles.projectTitle}>{projectTitle}</span>
        )}
      </nav>
    </header>
  );
};

export default Header;
