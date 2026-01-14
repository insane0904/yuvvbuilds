import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineCube, HiOutlinePencil, HiOutlineCollection, HiOutlineChartBar } from 'react-icons/hi';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    { icon: HiOutlineCube, title: "Construction", desc: "Building structures that stand the test of time" },
    { icon: HiOutlinePencil, title: "Space Design", desc: "Crafting environments that inspire and function" },
    { icon: HiOutlineCollection, title: "Workflows", desc: "Optimizing processes for maximum efficiency" },
    { icon: HiOutlineChartBar, title: "Project Management", desc: "Leading construction projects to success" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className={styles.about} id="about" ref={ref}>
      {/* Section Background Pattern */}
      <div className={styles.patternLeft} />
      <div className={styles.patternRight} />

      {/* Construction Animations */}
      <div className={styles.constructionScene}>
        {/* Ropeway Animation */}
        <div className={styles.ropeway}>
          <div className={styles.ropewayLine} />
          <motion.div 
            className={styles.ropewayCabin}
            animate={{ x: ['0%', '100%', '0%'] }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          />
          <div className={styles.ropewayTower} style={{ left: '10%' }} />
          <div className={styles.ropewayTower} style={{ left: '90%' }} />
        </div>

        {/* City Plan / Blueprint */}
        <motion.div 
          className={styles.cityPlan}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className={styles.planGrid} />
          <div className={styles.planBlocks} />
        </motion.div>

        {/* Concrete Blocks */}
        <motion.div 
          className={styles.concreteBlocks}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 0.4, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.concreteBlock} />
          <div className={styles.concreteBlock} />
          <div className={styles.concreteBlock} />
        </motion.div>

        {/* Flying Plane */}
        <motion.div 
          className={styles.aboutPlane}
          animate={{ x: ['-10%', '110%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Building Being Constructed */}
        <motion.div 
          className={styles.constructingBuilding}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className={styles.buildingFrame}
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <div className={styles.buildingWindows}>
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i}
                className={styles.window}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Warehouse */}
        <motion.div 
          className={styles.aboutWarehouse}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.25 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Small Crane */}
        <motion.div 
          className={styles.miniCrane}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.miniCraneTower} />
          <motion.div 
            className={styles.miniCraneArm}
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionMarker}>
            <span className={styles.markerNumber}>02</span>
            <span className={styles.markerLine} />
            <span className={styles.markerText}>ABOUT</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>BUILDING</span>
            <span className={styles.titleLine}>TOMORROW'S</span>
            <span className={styles.titleAccent}>SPACES</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Bio Section */}
          <motion.div 
            className={styles.bioSection}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.bioCard}>
              <div className={styles.bioHeader}>
                <div className={styles.bioAvatar}>
                  <span>YK</span>
                </div>
                <div className={styles.bioInfo}>
                  <h3>Yuvv Kakde</h3>
                  <p>Architecture Student • 18 Years</p>
                </div>
              </div>
              
              <div className={styles.bioContent}>
                <p>
                  I'm a passionate architecture student at <strong>Amity University Mumbai</strong>, 
                  driven by the art of transforming abstract ideas into tangible structures. 
                  My journey in architecture is fueled by a deep fascination with how spaces 
                  can influence human experience and behavior.
                </p>
                <p>
                  Beyond the drafting table, I bring a unique perspective shaped by my 
                  background in technology. I believe in the convergence of traditional 
                  architectural principles with modern digital innovation, creating spaces 
                  that are not just beautiful, but intelligently designed for the future.
                </p>
              </div>

              <div className={styles.bioStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>18</span>
                  <span className={styles.statLabel}>Years Old</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>∞</span>
                  <span className={styles.statLabel}>Curiosity</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>1</span>
                  <span className={styles.statLabel}>Vision</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div 
            className={styles.interestsSection}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className={styles.interestsHeader}>
              <h3>AREAS OF INTEREST</h3>
              <div className={styles.interestsLine} />
            </div>
            
            <div className={styles.interestsGrid}>
              {interests.map((interest, index) => (
                <motion.div 
                  key={index}
                  className={styles.interestCard}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={styles.interestIcon}>
                    <interest.icon size={28} />
                  </div>
                  <h4>{interest.title}</h4>
                  <p>{interest.desc}</p>
                  <div className={styles.interestNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div 
          className={styles.quoteSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className={styles.quoteMarks}>"</div>
          <blockquote>
            Architecture is not just about creating buildings; it's about shaping 
            experiences, defining moments, and building the framework of human life.
          </blockquote>
          <div className={styles.quoteAuthor}>— My Philosophy</div>
        </motion.div>
      </div>

      {/* Blueprint Decorations */}
      <motion.div 
        className={styles.blueprintCorner}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default About;
