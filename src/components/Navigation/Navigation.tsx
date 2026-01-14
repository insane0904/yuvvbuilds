import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'skills', label: 'Skills', number: '03' },
    { id: 'hobbies', label: 'Hobbies', number: '04' },
    { id: 'contact', label: 'Contact', number: '05' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav 
        className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.container}>
          {/* Logo */}
          <motion.a 
            href="#home" 
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.logoIcon}>YK</span>
            <span className={styles.logoDivider} />
            <span className={styles.logoText}>PORTFOLIO</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                whileHover={{ y: -2 }}
              >
                <span className={styles.linkNumber}>{link.number}</span>
                <span className={styles.linkLabel}>{link.label}</span>
                {activeSection === link.id && (
                  <motion.span 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a 
            href="mailto:arch.yuvvkakde@gmail.com"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>CONTACT</span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileNavLinks}>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.active : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className={styles.mobileLinkNumber}>{link.number}</span>
                    <span className={styles.mobileLinkLabel}>{link.label}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className={styles.mobileMenuFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <a href="mailto:arch.yuvvkakde@gmail.com">arch.yuvvkakde@gmail.com</a>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/insane_0904/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Blueprint Pattern */}
            <div className={styles.mobileMenuPattern}>
              {[...Array(5)].map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {navLinks.map((link, index) => (
          <motion.button
            key={link.id}
            className={`${styles.progressDot} ${activeSection === link.id ? styles.activeDot : ''}`}
            onClick={() => scrollToSection(link.id)}
            whileHover={{ scale: 1.5 }}
            aria-label={`Go to ${link.label}`}
          >
            <span className={styles.progressTooltip}>{link.label}</span>
          </motion.button>
        ))}
      </div>
    </>
  );
};

export default Navigation;
