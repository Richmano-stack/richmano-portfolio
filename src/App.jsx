import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import DevSkills from './components/DevSkills';
import ProjectGallery from './components/ProjectGallery';
import ContactForm from './components/ContactForm';
import './assets/styles/global.css';
import Footer from "./components/Footer";
import MouseFollower from './components/MouseFollower';

function App() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <Hero />
      <DevSkills />
      <ProjectGallery />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
