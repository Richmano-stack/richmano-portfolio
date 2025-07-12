import React from 'react';
import styles from '../assets/styles/DevSkills.module.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Framer Motion',
  'Three.js',
  'GSAP',
];

const DevSkills = () => {
  return (
    <section className={styles.skills}>
      <h2>🛠️ Developer Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DevSkills;
