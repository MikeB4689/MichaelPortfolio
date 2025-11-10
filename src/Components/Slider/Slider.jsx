import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";

// Import your videos
import tech from "../../Assets/Videos/close-up-man-writing-code-laptop.jpg";
import friendly from "../../Assets/Videos/cheerful-two-young-african-men-friends-pointing.jpg";
import coding from "../../Assets/Videos/medium-shot-man-wearing-vr-glasses.jpg";
import art from "../../Assets/Videos/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop.jpg";

const Slider = () => {
  const descriptions = [
    "I'm a full-stack developer specializing in building modern, responsive web applications. On the frontend, I focus on crafting clean, interactive UIs using React, Next.js, and Tailwind CSS, ensuring a smooth and engaging user experience across devices.",
    "I love designing human-centered interfaces that blend creativity and technology. Every product I build focuses on simplicity, emotion, and intuitive interaction.",
    "I bring ideas to life with clean, maintainable code. Whether it's a startup prototype or a full-scale system, I design with purpose and performance in mind.",
    "When I'm not coding, I explore digital art and storytelling. Creativity fuels my problem-solving approach — design and logic are two sides of the same coin.",
  ];

  const videos = [tech, friendly, coding, art];

  const videoData = [
    { icon: "💻", title: "Full-Stack Developer" },
    { icon: "🎨", title: "UI/UX Designer" },
    { icon: "⚡", title: "Code Architect" },
    { icon: "🎭", title: "Creative Technologist" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? 25 : -25,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      rotateY: direction < 0 ? 25 : -25,
    }),
  };

  return (
    <div className="modern-slider-container">
      {/* Animated Background Glow */}
      <motion.div
        className="slider-bg-glow"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.15), transparent 60%)",
            "radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.15), transparent 60%)",
            "radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.15), transparent 60%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-particle"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: "50%",
          }}
        />
      ))}

      {/* Main Container */}
      <div
        className="slider-main-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Video Slider */}
        <div className="slider-viewport">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 25 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
                rotateY: { duration: 0.7 },
              }}
              className="slide-wrapper"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="slide-inner">
                {/* Video Card */}
                <motion.div
                  className="video-card"
                  initial={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 25px 50px -12px rgba(99, 102, 241, 0.4)",
                      "0 25px 50px -12px rgba(139, 92, 246, 0.4)",
                      "0 25px 50px -12px rgba(99, 102, 241, 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Video */}
                  <video
                    src={videos[activeIndex]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-element"
                  />

                  {/* Gradient Overlay */}
                  <div className="video-overlay" />

                  {/* Glass Border */}
                  <div className="glass-border" />

                  {/* Text Content */}
                  <motion.div
                    className="slide-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {/* Title Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="title-badge"
                    >
                      <span>
                        {videoData[activeIndex].icon}{" "}
                        {videoData[activeIndex].title}
                      </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="slide-description"
                    >
                      {descriptions[activeIndex]}
                    </motion.p>

                    {/* Progress Dots */}
                    <div className="progress-dots">
                      {videos.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`progress-dot ${
                            index === activeIndex ? "active" : ""
                          }`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="shimmer-effect"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.15, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="nav-arrow left-arrow"
        >
          <motion.span initial={{ x: 0 }} whileHover={{ x: -2 }}>
            ❮
          </motion.span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="nav-arrow right-arrow"
        >
          <motion.span initial={{ x: 0 }} whileHover={{ x: 2 }}>
            ❯
          </motion.span>
        </motion.button>

        {/* Bottom Navigation Dots */}
        <div className="bottom-dots">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
                setIsPaused(true);
              }}
              className="dot-button"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`dot ${index === activeIndex ? "active" : ""}`} />
              {index === activeIndex && (
                <motion.div
                  className="dot-pulse"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play Progress Bar */}
        {!isPaused && (
          <div className="progress-bar-container">
            <motion.div
              className="progress-bar"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 10, ease: "linear" }}
              key={activeIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
