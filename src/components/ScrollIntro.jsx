import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../assets/styles/ScrollIntro.module.css";

const ScrollIntro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className={styles.scrollIntro}
    >
      <p>
        <span>Let’s turn your ideas into something</span>
        <br />
        <span>awesome! Creativity and tech working</span>
        <br />
        <span>together to make your vision real.</span>
      </p>
    </motion.div>
  );
};

export default ScrollIntro;
