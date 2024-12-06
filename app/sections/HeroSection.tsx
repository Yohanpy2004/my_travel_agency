"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/HeroSection.module.css";

const slides = [
  { type: "image", src: "5.jpg", alt: "Beautiful landscape" },
  { type: "image", src: "3.jpg", alt: "Another landscape" },
  { type: "image", src: "4.jpg", alt: "Another landscape" },
  { type: "image", src: "5.jpg", alt: "Another landscape" },
 
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Changer de slide toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
          >
            {slide.type === "image" ? (
              <img src={slide.src} alt={slide.alt} className={styles.slideMedia} />
            ) : (
              <video autoPlay loop muted className={styles.slideMedia}>
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
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
