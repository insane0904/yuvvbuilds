import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineArrowRight } from 'react-icons/hi';
import { FaInstagram, FaReddit, FaGithub, FaDiscord } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: HiOutlineMail,
      label: "EMAIL",
      value: "arch.yuvvkakde@gmail.com",
      link: "mailto:arch.yuvvkakde@gmail.com",
      cta: "Send Message"
    },
    {
      icon: FaInstagram,
      label: "INSTAGRAM",
      value: "@insane_0904",
      link: "https://www.instagram.com/insane_0904/",
      cta: "Follow Me"
    },
    {
      icon: FaReddit,
      label: "REDDIT",
      value: "u/Glittering_Strain874",
      link: "https://www.reddit.com/user/Glittering_Strain874/",
      cta: "View Profile"
    },
    {
      icon: FaGithub,
      label: "GITHUB",
      value: "insane0904",
      link: "https://github.com/insane0904",
      cta: "View Code"
    },
    {
      icon: FaDiscord,
      label: "DISCORD",
      value: "insane_0904",
      link: "https://discord.com/users/insane_0904",
      cta: "Add Me"
    }
  ];

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      {/* Animated Blueprint Lines */}
      <div className={styles.blueprintLines}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.line}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </div>

      {/* Construction Animations */}
      <div className={styles.constructionScene}>
        {/* City Skyline */}
        <div className={styles.citySkyline}>
          <motion.div 
            className={styles.cityBuilding}
            style={{ height: '120px', width: '35px' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div 
            className={styles.cityBuilding}
            style={{ height: '180px', width: '45px' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.div 
            className={styles.cityBuilding}
            style={{ height: '150px', width: '30px' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.div 
            className={styles.cityBuilding}
            style={{ height: '200px', width: '50px' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.div 
            className={styles.cityBuilding}
            style={{ height: '130px', width: '40px' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>

        {/* Construction Crane */}
        <motion.div 
          className={styles.finalCrane}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
        >
          <div className={styles.finalCraneTower} />
          <motion.div 
            className={styles.finalCraneArm}
            animate={{ rotate: [-8, 8, -8] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className={styles.finalCraneLoad}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Moving Truck with Materials */}
        <motion.div 
          className={styles.materialTruck}
          initial={{ x: '-100%' }}
          animate={{ x: '120vw' }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 2 }}
        >
          <div className={styles.materialTruckCab} />
          <div className={styles.materialTruckBed}>
            <div className={styles.materials} />
          </div>
          <div className={styles.materialTruckWheels}>
            <motion.div 
              className={styles.materialWheel}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className={styles.materialWheel}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Ropeway System */}
        <div className={styles.contactRopeway}>
          <div className={styles.contactRopeLine} />
          <motion.div 
            className={styles.contactRopeCabin}
            animate={{ x: ['0%', '100%', '0%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
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
            <span className={styles.markerNumber}>05</span>
            <span className={styles.markerLine} />
            <span className={styles.markerText}>CONNECT</span>
          </div>
          <h2 className={styles.title}>
            LET'S <span className={styles.titleOutline}>BUILD</span> TOGETHER
          </h2>
          <p className={styles.subtitle}>
            Ready to collaborate on architectural visions or tech projects? Let's connect.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className={styles.contactGrid}>
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.contactCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <method.icon size={32} />
                </div>
                <span className={styles.cardLabel}>{method.label}</span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardValue}>{method.value}</h3>
              </div>

              <div className={styles.cardCta}>
                <span>{method.cta}</span>
                <HiOutlineArrowRight size={18} />
              </div>

              {/* Decorative Corner */}
              <div className={styles.cardCorner} />
            </motion.a>
          ))}
        </div>

        {/* Location Info */}
        <motion.div 
          className={styles.locationInfo}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <HiOutlineLocationMarker size={20} />
          <span>Based in Mumbai, India</span>
          <div className={styles.locationLine} />
          <span>Student • Open to internships & learning opportunities</span>
        </motion.div>

        {/* Large CTA Section */}
        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className={styles.ctaContent}>
            <h3>Have a project in mind?</h3>
            <p>
              Whether it's an architectural concept, a tech collaboration, 
              or just a conversation about design and innovation - I'm always 
              open to internship opportunities and learning experiences.
            </p>
            <motion.a 
              href="mailto:arch.yuvvkakde@gmail.com"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>GET IN TOUCH</span>
              <div className={styles.ctaArrow}>
                <HiOutlineArrowRight size={20} />
              </div>
            </motion.a>
          </div>

          {/* Blueprint Pattern */}
          <div className={styles.ctaPattern}>
            <span /><span /><span /><span />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logoText}>YK</span>
            <span className={styles.logoDivider} />
            <span className={styles.logoTagline}>ARCHITECTURAL PORTFOLIO</span>
          </div>

          <div className={styles.footerNav}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#hobbies">Hobbies</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={styles.footerCopyright}>
            <p>© 2026 Yuvv Kakde. Crafted with precision and passion.</p>
            <p className={styles.footerMeta}>Architecture Student • Tech Enthusiast • Creative Mind</p>
          </div>
        </div>

        {/* Footer Blueprint Lines */}
        <div className={styles.footerLines}>
          <span /><span /><span />
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
