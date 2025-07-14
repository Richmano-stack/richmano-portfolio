import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/ProjectGallery.css';

const projects = [
  {
    id: 1,
    title: 'Landing Page Redesign',
    description: 'Built responsive React SPA with GSAP scroll animations and AOS.',
    img: '/assets/images/project1.png',
    url: '#'
  },
  {
    id: 2,
    title: '3D Product Showcase',
    description: 'Interactive product viewer using Three.js integrated with React.',
    img: '/assets/images/project2.png',
    url: '#'
  },
  {
    id: 3,
    title: 'Motion Portfolio',
    description: 'Portfolio site using Framer Motion, smooth scroll, micro-interactions.',
    img: '/assets/images/project3.png',
    url: '#'
  }
];

const ProjectGallery = () => (
  <section id="projects" className="project-gallery">
    <h2>📁 Featured Projects</h2>
    <motion.div className="grid">
      {projects.map((p, i) => (
        <motion.a
          key={p.id}
          href={p.url}
          className="card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <img src={p.img} alt={p.title} />
          <div className="info">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        </motion.a>
      ))}
    </motion.div>
  </section>
);

export default ProjectGallery;
