import React, { useState, useEffect, useRef } from "react";
import styles from "../assets/styles/AllProjects.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Modal from "../components/ProjectModal";

// 🖼 UI images
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
const allProjects = [
  { id: 1, title: "React Project 1", category: "React", image: ui1, description: "React project description", review: "⭐⭐⭐⭐⭐" },
  { id: 2, title: "React Project 2", category: "React", image: ui2, description: "Another React masterpiece", review: "⭐⭐⭐⭐" },
  { id: 3, title: "Vue Project 1", category: "Vue", image: ui3, description: "Vue project sample", review: "⭐⭐⭐⭐⭐" },
  { id: 4, title: "Vue Project 2", category: "Vue", image: ui4, description: "Another Vue work", review: "⭐⭐⭐" },
  { id: 5, title: "Angular Project 1", category: "Angular", image: ui5, description: "Angular basics", review: "⭐⭐⭐⭐" },
  { id: 6, title: "Angular Project 2", category: "Angular", image: ui6, description: "Advanced Angular", review: "⭐⭐⭐⭐⭐" },
  { id: 7, title: "Three.js Project 1", category: "Three.js", image: ui7, description: "3D visualization", review: "⭐⭐⭐" },
  { id: 8, title: "Three.js Project 2", category: "Three.js", image: ui8, description: "3D motion art", review: "⭐⭐⭐⭐" },
  { id: 9, title: "Next Project 1", category: "Next", image: ui9, description: "Next.js setup", review: "⭐⭐⭐⭐⭐" },
  { id: 10, title: "Next Project 2", category: "Next", image: ui10, description: "SSR with Next.js", review: "⭐⭐⭐⭐⭐" },
];

const AllProjects = () => {
  const [selected, setSelected] = useState("All");
  const [filtered, setFiltered] = useState(allProjects);
  const [modalProject, setModalProject] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const animation = useAnimation();

  useEffect(() => {
    if (selected === "All") {
      setFiltered(allProjects);
    } else {
      setFiltered(allProjects.filter((p) => p.category === selected));
    }
    gsap.fromTo(".filterList", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 });
  }, [selected]);

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    }
  }, [inView]);

  return (
    <section className={styles.allProjects}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={animation}
        className={styles.title}
        ref={ref}
      >
        Explore All Projects
      </motion.h1>

      <div className={`${styles.filters} filterList`}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${selected === cat ? styles.active : ""}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((project) => (
          <motion.div
            key={project.id}
            className={styles.card}
            onClick={() => setModalProject(project)}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={project.image} alt={project.title} />
            <div className={styles.info}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.review}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {modalProject && (
        <Modal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
};

export default AllProjects;
