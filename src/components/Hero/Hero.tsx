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

        {/* Flying Plane */}
        <motion.div 
          className={styles.plane}
          initial={{ x: '-10%', y: '0%' }}
          animate={{ x: '110%', y: '-5%' }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        >
          <div className={styles.planeBody} />
          <div className={styles.planeWing} />
          <div className={styles.planeTail} />
        </motion.div>

        {/* Second Plane (smaller, different path) */}
        <motion.div 
          className={styles.planeSmall}
          initial={{ x: '110%', y: '0%' }}
          animate={{ x: '-10%', y: '8%' }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 10 }}
        />

        {/* Famous Building - Empire State Style */}
        <motion.div 
          className={styles.famousBuilding}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Famous Building - Burj Khalifa Style */}
        <motion.div 
          className={styles.burjKhalifa}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.12, scaleY: 1 }}
          transition={{ duration: 2.5, delay: 1.5 }}
        />

        {/* Unfinished Building with exposed structure */}
        <motion.div 
          className={styles.unfinishedBuilding}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <div className={styles.exposedBeams} />
          <div className={styles.exposedFloors} />
        </motion.div>

        {/* City Substation */}
        <motion.div 
          className={styles.substation}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className={styles.substationBox} />
          <div className={styles.powerLines}>
            <motion.div 
              className={styles.electricSpark}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </div>
        </motion.div>

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

        {/* Mobile Construction Animation */}
        <div className={styles.mobileGraphic}>
          <svg viewBox="0 0 320 100" className={styles.sceneGraphic}>
            {/* Ground line */}
            <motion.line 
              x1="0" y1="85" x2="320" y2="85" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            />
            
            {/* Light Pole 1 */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              {/* Pole */}
              <rect x="18" y="55" width="2" height="30" fill="rgba(255,255,255,0.2)"/>
              {/* Lamp arm */}
              <rect x="18" y="55" width="8" height="1.5" fill="rgba(255,255,255,0.2)"/>
              {/* Light bulb */}
              <ellipse cx="25" cy="58" rx="3" ry="2" fill="rgba(255,255,255,0.15)"/>
              {/* Light glow */}
              <motion.ellipse 
                cx="25" cy="58" rx="6" ry="4" 
                fill="rgba(255,220,150,0.08)"
                animate={{ opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Light beam */}
              <motion.polygon 
                points="22,60 28,60 35,85 15,85" 
                fill="rgba(255,220,150,0.03)"
                animate={{ opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>

            {/* Light Pole 2 */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <rect x="118" y="55" width="2" height="30" fill="rgba(255,255,255,0.2)"/>
              <rect x="112" y="55" width="8" height="1.5" fill="rgba(255,255,255,0.2)"/>
              <ellipse cx="113" cy="58" rx="3" ry="2" fill="rgba(255,255,255,0.15)"/>
              <motion.ellipse 
                cx="113" cy="58" rx="6" ry="4" 
                fill="rgba(255,220,150,0.08)"
                animate={{ opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.polygon 
                points="110,60 116,60 123,85 103,85" 
                fill="rgba(255,220,150,0.03)"
                animate={{ opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.g>

            {/* Light Pole 3 */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              <rect x="218" y="55" width="2" height="30" fill="rgba(255,255,255,0.2)"/>
              <rect x="218" y="55" width="8" height="1.5" fill="rgba(255,255,255,0.2)"/>
              <ellipse cx="225" cy="58" rx="3" ry="2" fill="rgba(255,255,255,0.15)"/>
              <motion.ellipse 
                cx="225" cy="58" rx="6" ry="4" 
                fill="rgba(255,220,150,0.08)"
                animate={{ opacity: [0.08, 0.15, 0.08] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.polygon 
                points="222,60 228,60 235,85 215,85" 
                fill="rgba(255,220,150,0.03)"
                animate={{ opacity: [0.03, 0.06, 0.03] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.g>

            {/* Factory Building */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              {/* Main structure */}
              <rect x="40" y="50" width="50" height="35" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
              {/* Chimney 1 */}
              <rect x="50" y="35" width="6" height="18" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              {/* Chimney 2 */}
              <rect x="62" y="38" width="5" height="15" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              {/* Chimney 3 */}
              <rect x="73" y="32" width="7" height="21" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              {/* Windows */}
              <rect x="45" y="58" width="6" height="8" fill="rgba(255,255,255,0.15)"/>
              <rect x="55" y="58" width="6" height="8" fill="rgba(255,255,255,0.12)"/>
              <rect x="65" y="58" width="6" height="8" fill="rgba(255,255,255,0.15)"/>
              <rect x="75" y="58" width="6" height="8" fill="rgba(255,255,255,0.12)"/>
              {/* Door */}
              <rect x="58" y="72" width="12" height="13" fill="rgba(255,255,255,0.1)"/>
            </motion.g>

            {/* Factory Smoke - Multiple chimneys */}
            {/* Smoke from chimney 1 */}
            <motion.circle cx="53" cy="30" r="3"
              fill="rgba(255,255,255,0.06)"
              animate={{ y: [0, -12, -18], opacity: [0.08, 0.12, 0], scale: [0.6, 1.2, 1.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle cx="53" cy="30" r="2.5"
              fill="rgba(255,255,255,0.05)"
              animate={{ y: [0, -10, -16], opacity: [0.06, 0.1, 0], scale: [0.5, 1, 1.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
            />
            {/* Smoke from chimney 2 */}
            <motion.circle cx="64.5" cy="33" r="2.5"
              fill="rgba(255,255,255,0.05)"
              animate={{ y: [0, -10, -15], opacity: [0.06, 0.1, 0], scale: [0.5, 1.1, 1.5] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
            {/* Smoke from chimney 3 - main chimney, more smoke */}
            <motion.circle cx="76.5" cy="27" r="4"
              fill="rgba(255,255,255,0.07)"
              animate={{ y: [0, -14, -22], opacity: [0.1, 0.14, 0], scale: [0.7, 1.3, 1.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.circle cx="76.5" cy="27" r="3"
              fill="rgba(255,255,255,0.05)"
              animate={{ y: [0, -12, -18], opacity: [0.08, 0.12, 0], scale: [0.6, 1.2, 1.6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
            />
            <motion.circle cx="76.5" cy="27" r="2.5"
              fill="rgba(255,255,255,0.04)"
              animate={{ y: [0, -10, -15], opacity: [0.06, 0.1, 0], scale: [0.5, 1, 1.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 2 }}
            />

            {/* Warehouse */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              {/* Main structure */}
              <polygon points="150,45 190,45 195,55 145,55" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              <rect x="145" y="55" width="50" height="30" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
              {/* Doors */}
              <rect x="155" y="65" width="12" height="20" fill="rgba(255,255,255,0.12)"/>
              <rect x="173" y="65" width="12" height="20" fill="rgba(255,255,255,0.12)"/>
            </motion.g>

            {/* Modern Building */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <rect x="260" y="35" width="35" height="50" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
              {/* Windows grid */}
              {[0, 1, 2, 3].map((row) => (
                <g key={row}>
                  <rect x="266" y={42 + row * 11} width="6" height="6" fill="rgba(255,255,255,0.15)"/>
                  <rect x="276" y={42 + row * 11} width="6" height="6" fill="rgba(255,255,255,0.12)"/>
                  <rect x="286" y={42 + row * 11} width="6" height="6" fill="rgba(255,255,255,0.15)"/>
                </g>
              ))}
            </motion.g>

            {/* Animated Airplane */}
            <motion.g
              initial={{ x: -50 }}
              animate={{ x: 380 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
            >
              {/* Body */}
              <ellipse cx="0" cy="12" rx="16" ry="3.5" fill="rgba(255,255,255,0.25)"/>
              {/* Wings */}
              <polygon points="-4,12 4,12 7,18 -7,18" fill="rgba(255,255,255,0.2)"/>
              {/* Tail */}
              <polygon points="-14,10 -16,5 -10,10" fill="rgba(255,255,255,0.2)"/>
              {/* Cockpit */}
              <ellipse cx="10" cy="11" rx="4" ry="2" fill="rgba(255,255,255,0.15)"/>
            </motion.g>

            {/* Walking Person 1 - going right */}
            <motion.g
              initial={{ x: -20 }}
              animate={{ x: 340 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2.5 }}
            >
              {/* Head */}
              <circle cx="0" cy="72" r="2.5" fill="rgba(255,255,255,0.25)"/>
              {/* Body */}
              <line x1="0" y1="74.5" x2="0" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
              {/* Legs - animated walking */}
              <motion.line x1="0" y1="80" x2="-2" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                animate={{ x2: [-2, 2, -2] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.line x1="0" y1="80" x2="2" y2="85" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                animate={{ x2: [2, -2, 2] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Arms */}
              <motion.line x1="0" y1="76" x2="-2" y2="79" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
                animate={{ x2: [-2, 1, -2] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>

            {/* Walking Person 2 - going left */}
            <motion.g
              initial={{ x: 340 }}
              animate={{ x: -20 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 5 }}
            >
              {/* Head */}
              <circle cx="0" cy="72" r="2" fill="rgba(255,255,255,0.2)"/>
              {/* Body */}
              <line x1="0" y1="74" x2="0" y2="79" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2"/>
              {/* Legs */}
              <motion.line x1="0" y1="79" x2="-1.5" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1"
                animate={{ x2: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.line x1="0" y1="79" x2="1.5" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1"
                animate={{ x2: [1.5, -1.5, 1.5] }}
                transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>

            {/* Walking Person 3 - going right, different pace */}
            <motion.g
              initial={{ x: -30 }}
              animate={{ x: 350 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 8 }}
            >
              {/* Head */}
              <circle cx="0" cy="73" r="2" fill="rgba(255,255,255,0.18)"/>
              {/* Body */}
              <line x1="0" y1="75" x2="0" y2="80" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2"/>
              {/* Legs */}
              <motion.line x1="0" y1="80" x2="-1.5" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"
                animate={{ x2: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.line x1="0" y1="80" x2="1.5" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8"
                animate={{ x2: [1.5, -1.5, 1.5] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>

            {/* Animated Truck */}
            <motion.g
              initial={{ x: 350 }}
              animate={{ x: -80 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1.5 }}
            >
              {/* Cab */}
              <rect x="0" y="70" width="16" height="13" rx="1" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5"/>
              {/* Windshield */}
              <rect x="2" y="72" width="7" height="5" fill="rgba(255,255,255,0.1)"/>
              {/* Mixer drum */}
              <ellipse cx="35" cy="74" rx="16" ry="9" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
              {/* Drum stripes */}
              <motion.g
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '35px 74px' }}
              >
                <line x1="26" y1="70" x2="30" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="35" y1="67" x2="35" y2="81" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <line x1="44" y1="70" x2="40" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </motion.g>
              {/* Wheels */}
              <circle cx="7" cy="83" r="3.5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              <circle cx="28" cy="83" r="3.5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              <circle cx="42" cy="83" r="3.5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
            </motion.g>
          </svg>
        </div>

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

      {/* Desktop Mouse Scroll Indicator - Right side */}
      <motion.div 
        className={styles.desktopScrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="38" viewBox="0 0 24 38" fill="none">
            <rect x="1" y="1" width="22" height="36" rx="11" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
            <motion.circle 
              cx="12" cy="10" r="2.5" 
              fill="rgba(255,255,255,0.5)"
              animate={{ cy: [10, 18, 10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile Scroll Text - Right bottom */}
      <motion.div 
        className={styles.mobileScrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.span
          className={styles.mobileScrollText}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll down
        </motion.span>
      </motion.div>

      {/* Corner Decorations */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />
    </section>
  );
};

export default Hero;
