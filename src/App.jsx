import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import DevSkills from './components/DevSkills';
import DesignGallery from './components/DesignGallery';
import ContactForm from './components/ContactForm';
import './assets/styles/global.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DevSkills />
      <DesignGallery />
      <ContactForm />
    </div>
  );
};

export default App;
