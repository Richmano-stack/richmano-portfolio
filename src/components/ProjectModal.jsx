import React from "react";
import styles from "../assets/styles/ProjectSection.module.css";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h3>{project.title}</h3>
        <video controls src={`/assets/videos/video (${project.id}).mp4`} />
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectModal;
