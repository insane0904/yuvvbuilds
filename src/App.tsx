import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import './App.css';

function App() {
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
