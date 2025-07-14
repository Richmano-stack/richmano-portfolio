import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import styles from '../assets/styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.left}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className={styles.subtleName}>Hi, I’m <span>Richmano NASY</span></p>

        <AnimatedText
          text="Front‑End Developer • React • GSAP • Three.js • Framer Motion"
        />

        <p className={styles.description}>
          I build fast, accessible, and animated web experiences using cutting-edge JavaScript tools. Passionate about React, motion design, creative coding, and crafting immersive user interfaces that feel alive.
        </p>

        <a href="#projects" className={styles.cta}>
          View My Work ↓
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
