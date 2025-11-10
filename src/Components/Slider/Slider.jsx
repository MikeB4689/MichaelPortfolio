import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Slider.css";

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

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <div className="modern-slider-container">
      {/* Slider content remains unchanged */}
    </div>
  );
};

export default Slider;
