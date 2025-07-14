import React from "react";
import styles from "../assets/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3>Let’s connect</h3>
          <p>Email: richmano@example.com</p>
          <p>Based in Planet Earth 🌍</p>
        </div>

        <div className={styles.right}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Richmano NASY — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
