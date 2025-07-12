import React from 'react';
import { motion } from 'framer-motion';
import styles from '../assets/styles/Hero.module.css';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span className={styles.name}>Richmano NASY</span></h1>
        <AnimatedText text="Front-End Developer | UI Enthusiast | React Addict" />
      </motion.div>
    </section>
  );
};

export default Hero;
