import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import styles from './Slider.module.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Design",
    subtitle: "Creating spaces that inspire",
    icon: "📐",
  },
  {
    id: 2,
    title: "Build",
    subtitle: "Bringing visions to reality",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "Innovate",
    subtitle: "Pushing boundaries in architecture",
    icon: "💡",
  },
  {
    id: 4,
    title: "Sustain",
    subtitle: "Building for the future",
    icon: "🌱",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div 
      className={styles.slider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Pattern */}
      <div className={styles.sliderPattern}>
        <div className={styles.patternLine} />
        <div className={styles.patternLine} />
        <div className={styles.patternLine} />
      </div>

      {/* Main Slide Content */}
      <div className={styles.slideContainer}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className={styles.slide}
          >
            <span className={styles.slideIcon}>{slides[currentIndex].icon}</span>
            <h3 className={styles.slideTitle}>{slides[currentIndex].title}</h3>
            <p className={styles.slideSubtitle}>{slides[currentIndex].subtitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <HiChevronLeft />
      </button>
      <button 
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={handleNext}
        aria-label="Next slide"
      >
        <HiChevronRight />
      </button>

      {/* Dot Indicators */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <motion.div
          className={styles.progressBar}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentIndex}
        />
      </div>
    </div>
  );
};

export default Slider;
