import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [easterEggActive, setEasterEggActive] = useState(false);

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
          if (document.body.contains(tooltip)) {
            document.body.removeChild(tooltip);
          }
        }, 300);
      }, 2000);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setEasterEggActive(true);
          konamiIndex = 0;
          
          // Show celebration
          const celebration = document.createElement('div');
          celebration.className = 'konami-celebration';
          celebration.innerHTML = '🎉 You found the secret! Welcome, architect! 🏗️';
          document.body.appendChild(celebration);
          
          setTimeout(() => {
            celebration.classList.add('fade-out');
            setTimeout(() => {
              if (document.body.contains(celebration)) {
                document.body.removeChild(celebration);
              }
              setEasterEggActive(false);
            }, 500);
          }, 3000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`app ${easterEggActive ? 'rainbow-mode' : ''}`}>
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
