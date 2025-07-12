import React from 'react';
import styles from '../assets/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Richmano NASY</h1>
      <ul className={styles.menu}>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
