import React, { useState } from 'react';
import styles from '../assets/styles/Footer.module.css';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${email}!`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/Richmano-NASY-CV.pdf" download>Download CV</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Connect</h3>
          <div className={styles.socials}>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:yourmail@example.com"><FaEnvelope /></a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Newsletter</h3>
          <form onSubmit={handleNewsletter} className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.glowLine}></div>
        <p>© {new Date().getFullYear()} Richmano NASY. All rights reserved.</p>
      </div>

      <button className={styles.scrollTop} onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
