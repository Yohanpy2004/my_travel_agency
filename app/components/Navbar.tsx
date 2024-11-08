// app/components/Navbar.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import SignupModal from './SignupModal';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Travelo</Link>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#about">About</Link>
          <Link href="/auth/signin" className={styles.signinButton}>Log in</Link>
          <button onClick={() => setShowModal(true)} className={styles.signupButton}>
            Sign Up
          </button>
        </div>
      </nav>
      {showModal && <SignupModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
