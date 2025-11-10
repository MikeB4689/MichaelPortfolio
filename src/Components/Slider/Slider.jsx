import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";

import tech from "../../Assets/Videos/close-up-man-writing-code-laptop.jpg";
import friendly from "../../Assets/Videos/cheerful-two-young-african-men-friends-pointing.jpg";
import coding from "../../Assets/Videos/medium-shot-man-wearing-vr-glasses.jpg";
import art from "../../Assets/Videos/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop.jpg";

const Slider = () => {
  const videos = [tech, friendly, coding, art];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <div className="modern-slider-container">
      <div className="slider-arrow left" onClick={handlePrev}>
        &#10094;
      </div>
      <div className="slider-content">
        <AnimatePresence initial={false}>
          <motion.img
            key={videos[activeIndex]}
            src={videos[activeIndex]}
            alt={`Slide ${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
      <div className="slider-arrow right" onClick={handleNext}>
        &#10095;
      </div>
    </div>
  );
};

export default Slider;
