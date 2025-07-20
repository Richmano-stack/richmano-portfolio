import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import styles from '../assets/styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.left}
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className={styles.bigText}>
          Hey, I'm <span className={styles.name}>Richmano NASY</span>
        </h1>

        <h2 className={styles.subText}>
          Web Developer • Designer • Innovator • Creator
        </h2>

        <div className={styles.typing}>
          <Typewriter
            text="I  build fast, accessible, and animated web experiences using cutting-edge JavaScript tools. Passionate about React, motion design, creative coding, and crafting immersive user interfaces that feel alive."
            speed={25}
          />
        </div>

        <a href="#projects" className={styles.cta}>
          Explore My Work ↓
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
