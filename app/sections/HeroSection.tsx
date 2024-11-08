// app/components/HeroSection.tsx
import Link from 'next/link';
import styles from '../../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Welcome to Travelo</h1>
        <p className={styles.subtitle}>
          Find the best travel agencies and book your next adventure.
        </p>
        <Link href="/search" className={styles.getStartedButton}>
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
