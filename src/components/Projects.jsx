import React, { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/ProjectSection.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Modal from "./ProjectModal";

// 🖼 Import images
import ui1 from "../assets/images/ui (1).jpg";
import ui2 from "../assets/images/ui (2).jpg";
import ui3 from "../assets/images/ui (3).jpg";
import ui4 from "../assets/images/ui (4).jpg";
import ui5 from "../assets/images/ui (5).jpg";
import ui6 from "../assets/images/ui (6).jpg";
import ui7 from "../assets/images/ui (7).jpg";
import ui8 from "../assets/images/ui (8).jpg";
import ui9 from "../assets/images/ui (9).jpg";
import ui10 from "../assets/images/ui (10).jpg";

const categories = ["All", "React", "Vue", "Angular", "Three.js", "Next"];
const projects = [
  { id: 1, title: "React Project 1", category: "React", image: ui1, description: "React project description" },
  { id: 2, title: "React Project 2", category: "React", image: ui2, description: "Another React masterpiece" },
  { id: 3, title: "Vue Project 1", category: "Vue", image: ui3, description: "Vue project sample" },
  { id: 4, title: "Vue Project 2", category: "Vue", image: ui4, description: "Another Vue work" },
  { id: 5, title: "Angular Project 1", category: "Angular", image: ui5, description: "Angular basics" },
  { id: 6, title: "Angular Project 2", category: "Angular", image: ui6, description: "Advanced Angular" },
  { id: 7, title: "Three.js Project 1", category: "Three.js", image: ui7, description: "3D visualization" },
  { id: 8, title: "Three.js Project 2", category: "Three.js", image: ui8, description: "3D motion art" },
  { id: 9, title: "Next Project 1", category: "Next", image: ui9, description: "Next.js setup" },
  { id: 10, title: "Next Project 2", category: "Next", image: ui10, description: "SSR with Next.js" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [modalProject, setModalProject] = useState(null);
  const filterRef = useRef(null);

  const [titleRef, inViewTitle] = useInView({ triggerOnce: true, threshold: 0.2 });
  const titleAnimation = useAnimation();

  useEffect(() => {
    if (selectedCategory === "All") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter((p) => p.category === selectedCategory));
    }

    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current,
        { x: -10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (inViewTitle) {
      titleAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [inViewTitle]);

  return (
    <section className={styles.projects}>
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={titleAnimation}
        className={styles.title}
      >
        My Featured Projects
      </motion.h2>

      <div className={styles.filters}>
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <motion.div className={styles.underline} layoutId="underline" />
      </div>

      <div ref={filterRef} className={styles.projectGrid}>
        {visibleProjects.map((project, i) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
          const animation = useAnimation();

          useEffect(() => {
            if (inView) {
              animation.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: i * 0.1 },
              });
            }
          }, [inView]);

          return (
            <motion.div
              ref={ref}
              key={project.id}
              className={styles.projectCard}
              onClick={() => setModalProject(project)}
              initial={{ opacity: 0, y: 30 }}
              animate={animation}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.cardContent}>
                <h4>{project.title}</h4>
                <p>{project.category}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className={styles.viewAllWrapper}>
        <motion.button
          className={styles.viewAllBtn}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #0fffc1" }}
          onClick={() => (window.location.href = "/projects")}
        >
          View All Projects
        </motion.button>
      </div>

      {modalProject && (
        <Modal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
};

export default Projects;
