import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Slider from '../Slider';
import styles from './Hero.module.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.5,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1,
      },
    },
  };

  return (
    <section className={styles.hero} id="home">
      {/* Architectural Blueprint Grid */}
      <div className={styles.blueprintGrid}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className={styles.gridLineVertical}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className={styles.gridLineHorizontal}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </div>

      {/* Construction Animated Elements */}
      <div className={styles.constructionElements}>
        {/* Crane Animation */}
        <motion.div 
          className={styles.crane}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className={styles.craneTower} />
          <motion.div 
            className={styles.craneArm}
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className={styles.craneHook}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Building Under Construction */}
        <motion.div 
          className={styles.buildingConstruction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className={styles.buildingFloor}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.div 
            className={styles.buildingFloor}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.div 
            className={styles.buildingFloor}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
          <motion.div 
            className={styles.scaffolding}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          />
        </motion.div>

        {/* Moving Truck */}
        <motion.div 
          className={styles.truck}
          initial={{ x: '100vw' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 3 }}
        >
          <div className={styles.truckCab} />
          <div className={styles.truckBed} />
          <div className={styles.truckWheel} />
          <div className={styles.truckWheel} style={{ left: '60px' }} />
        </motion.div>

        {/* Second Building Silhouette */}
        <motion.div 
          className={styles.buildingSilhouette}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
        />

        {/* Construction Beam */}
        <motion.div 
          className={styles.constructionBeam}
          animate={{ 
            rotate: [0, 1, -1, 0],
            y: [0, -3, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ropeway / Cable Car */}
        <div className={styles.heroRopeway}>
          <div className={styles.heroRopeLine} />
          <motion.div 
            className={styles.heroGondola}
            animate={{ x: ['0%', '100%', '0%'] }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Dump Truck Emptying */}
        <motion.div 
          className={styles.heroDumpTruck}
          initial={{ x: '-100%' }}
          animate={{ x: '120vw' }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 8 }}
        >
          <div className={styles.heroDumpCab} />
          <motion.div 
            className={styles.heroDumpBed}
            animate={{ rotate: [0, 0, -30, -30, 0, 0] }}
            transition={{ duration: 35, repeat: Infinity, times: [0, 0.35, 0.4, 0.5, 0.55, 1] }}
          />
        </motion.div>

        {/* Concrete Mixer */}
        <motion.div 
          className={styles.heroMixer}
          initial={{ x: '100vw' }}
          animate={{ x: '-150%' }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear", delay: 15 }}
        >
          <div className={styles.heroMixerCab} />
          <motion.div 
            className={styles.heroMixerDrum}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Floating Architectural Elements */}
      <motion.div 
        className={styles.floatingElements}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        <motion.div
          className={styles.archCircle}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className={styles.archSquare}
          initial={{ scale: 0, rotate: 45, opacity: 0 }}
          animate={{ scale: 1, rotate: 45, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className={styles.archTriangle}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </motion.div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Section Marker */}
        <motion.div 
          className={styles.sectionMarker}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className={styles.markerNumber}>01</span>
          <span className={styles.markerLine} />
          <span className={styles.markerText}>INTRODUCTION</span>
        </motion.div>

        {/* Name Container - Simple Static Name */}
        <div className={styles.nameContainer}>
          <motion.h1 
            className={styles.nameTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            YUVV KAKDE
          </motion.h1>

          {/* Animated Underline */}
          <motion.div 
            className={styles.nameUnderline}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </div>

        {/* Subtitle */}
        <motion.div 
          className={styles.subtitle}
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          <span className={styles.subtitleLine} />
          <h2>ARCHITECTURAL VISIONARY</h2>
          <span className={styles.subtitleLine} />
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Crafting spaces that inspire. Building dreams into reality.
        </motion.p>

        {/* Stats/Quick Info */}
        <motion.div 
          className={styles.quickInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>STUDENT AT</span>
            <span className={styles.infoValue}>Amity University Mumbai</span>
          </div>
          <div className={styles.infoDivider} />
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>DISCIPLINE</span>
            <span className={styles.infoValue}>Architecture</span>
          </div>
          <div className={styles.infoDivider} />
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>FOCUS</span>
            <span className={styles.infoValue}>Design & Construction</span>
          </div>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Slider />
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />
    </section>
  );
};

export default Hero;
