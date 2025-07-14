import React from 'react';
import styles from '../assets/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.brand}>Richmano NASY</span>
      </div>
      <nav className={styles.navLinks}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
