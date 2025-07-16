import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/ProjectSection.module.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const categories = ['All', 'React', 'Vue', 'Angular', 'Three.js', 'TypeScript', 'Next'];

const images = {
  React: [...Array(5)].map((_, i) => `https://via.placeholder.com/400x400.png?text=React+${i + 1}`),
  Vue: [...Array(5)].map((_, i) => `https://via.placeholder.com/400x400.png?text=Vue+${i + 1}`),
  Angular: [...Array(5)].map((_, i) => `https://via.placeholder.com/400x400.png?text=Angular+${i + 1}`),
  'Three.js': [...Array(5)].map((_, i) => `https://via.placeholder.com/400x400.png?text=Three.js+${i + 1}`),
  TypeScript: [...Array(5)].map((_, i) => `https://via.placeholder.com/400x400.png?text=TS+${i + 1}`),
  Next: [...Array(5)].map((_, i) => `https://via.placeholder.com/400x400.png?text=Next+${i + 1}`),
};

const allProjects = Object.entries(images).flatMap(([cat, imgs]) =>
  imgs.map((url, idx) => ({ title: `${cat} Project ${idx + 1}`, category: cat, img: url }))
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <img src={project.img} alt={project.title} />
        <h2>{project.title}</h2>
        <p>This is a sample project description. Replace this with real content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeProjects, setActiveProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const filtered = selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(p => p.category === selectedCategory);

    gsap.fromTo(
      `.${styles.projectCard}`,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
    setActiveProjects(filtered.slice(0, visibleCount));
  }, [selectedCategory, visibleCount]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setVisibleCount(prev => prev + 3);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.projectsSection} id="projects">
      <h2>My Projects</h2>
      <div className={styles.filterButtons}>
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === selectedCategory ? styles.active : ''}
            onClick={() => {
              setVisibleCount(6);
              setSelectedCategory(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {activeProjects.map((proj, i) => (
          <motion.div
            key={i}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => setSelectedProject(proj)}
          >
            <img src={proj.img} alt={proj.title} />
            <div className={styles.overlay}>
              <span>👁 View</span>
            </div>
            <h4>{proj.title}</h4>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
