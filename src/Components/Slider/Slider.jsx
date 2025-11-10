import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";

import tech from "../../Assets/Videos/close-up-man-writing-code-laptop.jpg";
import friendly from "../../Assets/Videos/cheerful-two-young-african-men-friends-pointing.jpg";
import coding from "../../Assets/Videos/medium-shot-man-wearing-vr-glasses.jpg";
import art from "../../Assets/Videos/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop.jpg";

const slides = [
  {
    img: tech,
    title: "Full-Stack Developer",
    description:
      "I'm a full-stack developer building modern, responsive web apps with React, Next.js, and Tailwind.",
  },
  {
    img: friendly,
    title: "UI/UX Designer",
    description:
      "Designing human-centered interfaces that are clean, intuitive, and visually engaging.",
  },
  {
    img: coding,
    title: "Code Architect",
    description:
      "Building scalable, maintainable systems with clean and performant code.",
  },
  {
    img: art,
    title: "Creative Technologist",
    description:
      "Exploring digital art, storytelling, and interactive experiences that combine design and tech.",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  return (
    <div className="modern-slider-container">
      {/* Arrows outside AnimatePresence */}
      <div className="nav-arrow left-arrow" onClick={handlePrev}>
        &#10094;
      </div>
      <div className="nav-arrow right-arrow" onClick={handleNext}>
        &#10095;
      </div>

      {/* Slides */}
      <div className="slider-viewport">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            className="slide-inner"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={slides[activeIndex].img}
              alt={slides[activeIndex].title}
              className="slide-inner-img"
            />
            <div className="slide-description-wrapper">
              <h3 className="slide-title">{slides[activeIndex].title}</h3>
              <p className="slide-description">
                {slides[activeIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
