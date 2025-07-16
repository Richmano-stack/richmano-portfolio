import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './assets/styles/global.css';
import Footer from "./components/Footer";
import MouseFollower from './components/MouseFollower';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
