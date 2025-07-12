import React, { useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import styles from '../assets/styles/MouseFollower.module.css';

const MouseFollower = () => {
  const { x, y } = useMousePosition();

  useEffect(() => {
    const follower = document.querySelector(`.${styles.follower}`);
    if (follower) {
      follower.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [x, y]);

  return <div className={styles.follower}></div>;
};

export default MouseFollower;
