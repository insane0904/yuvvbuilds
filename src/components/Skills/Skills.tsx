import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  HiOutlineAcademicCap, 
  HiOutlineCode, 
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineOfficeBuilding,
  HiOutlineColorSwatch,
  HiOutlineCube,
  HiOutlineTemplate,
  HiOutlinePencilAlt,
  HiOutlineDocumentReport
} from 'react-icons/hi';
import styles from './Skills.module.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const architectureSkills = [
    { name: "Spatial Design", level: 85 },
    { name: "Construction Planning", level: 80 },
    { name: "Project Management", level: 75 },
    { name: "Building Analysis", level: 78 },
    { name: "3D Visualization", level: 82 },
    { name: "Sustainable Design", level: 70 },
  ];

  const constructionSkills = [
    { icon: HiOutlineOfficeBuilding, name: "Building Design" },
    { icon: HiOutlineCube, name: "3D Modeling" },
    { icon: HiOutlineTemplate, name: "Floor Planning" },
    { icon: HiOutlineColorSwatch, name: "Material Selection" },
    { icon: HiOutlinePencilAlt, name: "Technical Drawing" },
    { icon: HiOutlineDocumentReport, name: "Site Analysis" },
  ];

  const qualifications = [
    {
      icon: HiOutlineAcademicCap,
      title: "Architecture Student",
      subtitle: "Amity University Mumbai",
      description: "Pursuing comprehensive education in architectural design, construction technology, and urban planning.",
      year: "2025 - Present"
    },
    {
      icon: HiOutlineCode,
      title: "Self-Taught Developer",
      subtitle: "Full-Stack Development",
      description: "Built multiple Discord bots, games, and applications through self-directed learning and practice.",
      year: "2020 - Present"
    },
    {
      icon: HiOutlineServer,
      title: "Cybersecurity Enthusiast",
      subtitle: "Penetration Testing & Security",
      description: "Hands-on experience with ethical hacking, penetration testing, and security analysis.",
      year: "2021 - Present"
    }
  ];

  const techCategories = [
    { icon: HiOutlineDesktopComputer, title: "Applications", desc: "Desktop & Web Apps" },
    { icon: HiOutlineCog, title: "Discord Bots", desc: "Custom Automation" },
    { icon: HiOutlineLightningBolt, title: "Games", desc: "Interactive Experiences" },
  ];

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      {/* Construction Animations */}
      <div className={styles.constructionScene}>
        {/* Dump Truck Animation - Moving right to left */}
        <motion.div 
          className={styles.dumpTruck}
          initial={{ x: '120vw' }}
          animate={{ x: '-100%' }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className={styles.truckBody} />
          <motion.div 
            className={styles.truckBed}
            animate={{ rotate: [0, 0, -35, -35, 0, 0] }}
            transition={{ duration: 25, repeat: Infinity, times: [0, 0.4, 0.45, 0.55, 0.6, 1] }}
          />
          <div className={styles.truckWheels}>
            <motion.div 
              className={styles.wheel}
              animate={{ rotate: -360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className={styles.wheel}
              animate={{ rotate: -360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Dirt Pile */}
        <motion.div 
          className={styles.dirtPile}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Tower Crane */}
        <motion.div 
          className={styles.towerCrane}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
        >
          <div className={styles.craneBase} />
          <div className={styles.craneMast} />
          <motion.div 
            className={styles.craneJib}
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className={styles.craneTrolley}
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className={styles.craneCounterweight} />
          </motion.div>
        </motion.div>

        {/* Scaffolding Structure */}
        <div className={styles.scaffolding}>
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i}
              className={styles.scaffoldLevel}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.3 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            />
          ))}
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
            <span className={styles.markerNumber}>03</span>
            <span className={styles.markerLine} />
            <span className={styles.markerText}>EXPERTISE</span>
          </div>
          <h2 className={styles.title}>
            SKILLS & <span className={styles.titleOutline}>QUALIFICATIONS</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* Architecture Skills */}
          <motion.div 
            className={styles.architectureSection}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.sectionTitle}>
              <h3>ARCHITECTURAL SKILLS</h3>
              <div className={styles.sectionLine} />
            </div>

            <div className={styles.skillBars}>
              {architectureSkills.map((skill, index) => (
                <div key={index} className={styles.skillBar}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <motion.div 
                      className={styles.skillProgress}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Skills */}
          <motion.div 
            className={styles.techSection}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.sectionTitle}>
              <h3>CONSTRUCTION & ARCHITECTURE</h3>
              <div className={styles.sectionLine} />
            </div>

            <div className={styles.techGrid}>
              {constructionSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className={styles.techCard}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <skill.icon 
                    size={32} 
                    className={styles.techIcon}
                  />
                  <span className={styles.techName}>{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Categories */}
            <div className={styles.techCategories}>
              {techCategories.map((cat, index) => (
                <motion.div 
                  key={index}
                  className={styles.categoryCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <cat.icon size={24} />
                  <div>
                    <h4>{cat.title}</h4>
                    <p>{cat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Qualifications Timeline */}
        <motion.div 
          className={styles.qualificationsSection}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.sectionTitle}>
            <h3>QUALIFICATIONS & EXPERIENCE</h3>
            <div className={styles.sectionLine} />
          </div>

          <div className={styles.timeline}>
            {qualifications.map((qual, index) => (
              <motion.div 
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <div className={styles.timelineMarker}>
                  <qual.icon size={24} />
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{qual.year}</span>
                  <h4>{qual.title}</h4>
                  <p className={styles.timelineSubtitle}>{qual.subtitle}</p>
                  <p className={styles.timelineDesc}>{qual.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorCircle} />
      <div className={styles.decorLines}>
        <span /><span /><span /><span />
      </div>
    </section>
  );
};

export default Skills;
