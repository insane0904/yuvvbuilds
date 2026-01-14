import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  HiOutlineMusicNote, 
  HiOutlineChip,
  HiOutlineTerminal,
  HiOutlineShieldCheck,
  HiOutlinePuzzle,
  HiOutlineGlobe
} from 'react-icons/hi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { BsDiscord } from 'react-icons/bs';
import styles from './Hobbies.module.css';

const Hobbies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeHobby, setActiveHobby] = useState(0);

  const hobbies = [
    {
      icon: HiOutlineMusicNote,
      title: "Musical Instruments",
      description: "Music is my creative outlet beyond architecture. Playing instruments helps me understand rhythm, harmony, and composition - concepts that translate beautifully into spatial design.",
      details: ["Tabla", "Electric Guitar", "Dholki", "Flute", "Tambora", "Keyboard"],
      color: "#ffffff"
    },
    {
      icon: HiOutlineChip,
      title: "Tech Enthusiast",
      description: "A self-proclaimed tech nerd with hands-on experience in various programming domains. I believe technology and architecture will shape the future of human spaces.",
      details: ["Hardware Tinkering", "IoT Projects", "System Building", "AI Exploration"],
      color: "#ffffff"
    },
    {
      icon: HiOutlineTerminal,
      title: "Software Development",
      description: "Built numerous applications, from Discord bots to games. Coding has taught me logical thinking and problem-solving - skills I apply to architectural challenges.",
      details: ["Discord Bots", "Web Apps", "Games", "Automation"],
      color: "#ffffff"
    },
    {
      icon: HiOutlineShieldCheck,
      title: "Cybersecurity",
      description: "Exploring the digital frontier through ethical hacking and security research. Understanding vulnerabilities helps me think about security in physical spaces too.",
      details: ["Penetration Testing", "Security Analysis", "CTF Challenges", "Network Security"],
      color: "#ffffff"
    }
  ];

  const techProjects = [
    { icon: BsDiscord, name: "Discord Bots", count: "10+" },
    { icon: IoGameControllerOutline, name: "Games Built", count: "2+" },
    { icon: HiOutlineGlobe, name: "Web Apps", count: "8+" },
    { icon: HiOutlinePuzzle, name: "Scripts", count: "20+" },
  ];

  return (
    <section className={styles.hobbies} id="hobbies" ref={ref}>
      {/* Animated Background Lines */}
      <div className={styles.backgroundLines}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.bgLine}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </div>

      {/* Construction Animations */}
      <div className={styles.constructionScene}>
        {/* Building Skyline */}
        <div className={styles.skyline}>
          <motion.div 
            className={styles.building1}
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.div 
            className={styles.building2}
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
          <motion.div 
            className={styles.building3}
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
        </div>

        {/* Concrete Mixer Truck */}
        <motion.div 
          className={styles.mixerTruck}
          initial={{ x: '100vw' }}
          animate={{ x: '-150%' }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 3 }}
        >
          <div className={styles.mixerCab} />
          <motion.div 
            className={styles.mixerDrum}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <div className={styles.mixerWheels}>
            <div className={styles.mixerWheel} />
            <div className={styles.mixerWheel} />
            <div className={styles.mixerWheel} />
          </div>
        </motion.div>

        {/* Excavator */}
        <motion.div 
          className={styles.excavator}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1 }}
        >
          <div className={styles.excavatorBody} />
          <div className={styles.excavatorCab} />
          <motion.div 
            className={styles.excavatorArm}
            animate={{ rotate: [-10, 15, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className={styles.excavatorBucket}
              animate={{ rotate: [0, 30, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className={styles.excavatorTracks} />
        </motion.div>

        {/* Cable Car / Gondola */}
        <div className={styles.cableCar}>
          <div className={styles.cableLine} />
          <motion.div 
            className={styles.gondola}
            animate={{ x: ['0%', '100%', '0%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className={styles.gondola2}
            animate={{ x: ['100%', '0%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
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
            <span className={styles.markerNumber}>04</span>
            <span className={styles.markerLine} />
            <span className={styles.markerText}>BEYOND ARCHITECTURE</span>
          </div>
          <h2 className={styles.title}>
            PASSIONS & <span className={styles.titleOutline}>HOBBIES</span>
          </h2>
          <p className={styles.subtitle}>
            The interests that shape my creative perspective
          </p>
        </motion.div>

        {/* Interactive Hobbies Section */}
        <div className={styles.hobbiesGrid}>
          {/* Left - Tabs */}
          <motion.div 
            className={styles.hobbyTabs}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                className={`${styles.hobbyTab} ${activeHobby === index ? styles.activeTab : ''}`}
                onClick={() => setActiveHobby(index)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.tabIcon}>
                  <hobby.icon size={24} />
                </div>
                <div className={styles.tabContent}>
                  <h4>{hobby.title}</h4>
                  <div className={styles.tabLine} />
                </div>
                <span className={styles.tabNumber}>{String(index + 1).padStart(2, '0')}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Detail Panel */}
          <motion.div 
            className={styles.hobbyDetail}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              key={activeHobby}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.detailContent}
            >
              <div className={styles.detailHeader}>
                <div className={styles.detailIcon}>
                  {(() => {
                    const IconComponent = hobbies[activeHobby].icon;
                    return <IconComponent size={40} />;
                  })()}
                </div>
                <h3>{hobbies[activeHobby].title}</h3>
              </div>

              <p className={styles.detailDescription}>
                {hobbies[activeHobby].description}
              </p>

              <div className={styles.detailTags}>
                {hobbies[activeHobby].details.map((detail, index) => (
                  <motion.span
                    key={index}
                    className={styles.tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {detail}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Projects Counter */}
        <motion.div 
          className={styles.projectsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.projectsHeader}>
            <h3>TECH CREATIONS</h3>
            <div className={styles.projectsLine} />
          </div>

          <div className={styles.projectsGrid}>
            {techProjects.map((project, index) => (
              <motion.div
                key={index}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <project.icon size={32} className={styles.projectIcon} />
                <span className={styles.projectCount}>{project.count}</span>
                <span className={styles.projectName}>{project.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div 
          className={styles.funFact}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className={styles.factBadge}>FUN FACT</div>
          <p>
            I once built a Discord bot that managed over <strong>1000 users</strong> and 
            automated community tasks. The same systematic thinking now helps me 
            design efficient building workflows.
          </p>
        </motion.div>
      </div>

      {/* Decorative Corner */}
      <div className={styles.cornerDecor}>
        <span /><span /><span />
      </div>
    </section>
  );
};

export default Hobbies;
