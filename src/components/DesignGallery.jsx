import React from 'react';
import styles from '../assets/styles/DesignGallery.module.css';

// Import images directly
import ui1Image from '../assets/images/ui1.png';
import ui2Image from '../assets/images/ui2.png';
import ui3WebP from '../assets/images/ui3.WEBP'; // Use a descriptive name

const projects = [
  { id: 1, image: ui1Image, title: 'UI Mockup 1' },
  { id: 2, image: ui2Image, title: 'UI Mockup 2' },
  { id: 3, image: ui3WebP, title: 'UI Mockup 3' }, // Use the imported variable
];

const DesignGallery = () => {
  return (
    <section className={styles.gallery}>
      {projects.map((project) => (
        <div key={project.id} className={styles.card}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default DesignGallery;