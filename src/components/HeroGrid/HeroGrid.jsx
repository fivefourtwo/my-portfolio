import styles from './HeroGrid.module.css'

const HeroGrid = () => (
  <div className={styles.root} aria-hidden="true">
    <div className={styles.horizontal} />
    <div className={styles.vertical} />
  </div>
)

export default HeroGrid
