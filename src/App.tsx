import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import './App.css';

function App() {
  // Disable right-click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      
      // Create custom tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'right-click-tooltip';
      tooltip.innerHTML = 'Blueprints are confidential 🚫📐';
      tooltip.style.left = `${e.clientX}px`;
      tooltip.style.top = `${e.clientY}px`;
      document.body.appendChild(tooltip);
      
      // Remove tooltip after animation
      setTimeout(() => {
        tooltip.classList.add('fade-out');
        setTimeout(() => {
          document.body.removeChild(tooltip);
        }, 300);
      }, 2000);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div className="app">
      {/* Grid Background */}
      <div className="grid-background" />
      
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Hobbies />
        <Contact />
      </motion.main>

      {/* Custom Cursor (optional enhancement) */}
      <div className="cursor-follower" />
    </div>
  );
}

export default App;
