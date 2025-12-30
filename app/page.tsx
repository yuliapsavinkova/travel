import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.heroWrapper}>
      <Image
        src="/hero.avif"
        alt="Hero"
        fill
        className={styles.heroImage}
      />
      <div className={styles.heroOverlay}>
        <h1>Welcome to MyApp</h1>
        <p>We make things simple</p>
      </div>
    </div>
  )
}
