import React from 'react';
import { motion } from 'framer-motion';
import styles from '../assets/styles/ConnectIntro.module.css';

const ConnectIntro = () => {
  return (
    <motion.div
      className={styles.connectSection}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className={styles.text}>
        Plug In to the Network. <span>Let’s Create Something Bold.</span>
      </h2>
    </motion.div>
  );
};

export default ConnectIntro;
