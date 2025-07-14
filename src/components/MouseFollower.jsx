import { useEffect } from 'react';
import '../assets/styles/MouseFollower.css';

const MouseFollower = () => {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    const delay = 8; // lower = faster trailing

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    });

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) / delay;
      outlineY += (mouseY - outlineY) / delay;

      if (outline) {
        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;
      }

      requestAnimationFrame(animateOutline);
    };

    animateOutline();
  }, []);

  return (
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-outline"></div>
    </>
  );
};

export default MouseFollower;
