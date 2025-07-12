import React from 'react';
import styles from '../assets/styles/DesignGallery.module.css';

const projects = [
  { id: 1, image: '/assets/images/ui1.jpg', title: 'UI Mockup 1' },
  { id: 2, image: '/assets/images/ui2.jpg', title: 'UI Mockup 2' },
  { id: 3, image: '/assets/images/ui3.jpg', title: 'UI Mockup 3' },
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
