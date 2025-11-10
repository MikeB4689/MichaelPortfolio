import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Rates.css";

const Rates = ({ dark, active, widthSize }) => {
  const rateOptions = [
    {
      title: "Part-Time Frontend",
      price: "$300 / project",
      detail:
        "Perfect for landing pages or small React/Next.js projects. Focused on speed, polish, and performance.",
    },
    {
      title: "Full-Time Backend",
      price: "$600 / month",
      detail:
        "For startups or small businesses needing continuous backend support — Node.js, FastAPI, or Firebase.",
    },
    {
      title: "Fullstack Developer",
      price: "$1200",
      detail:
        "End-to-end web app development — frontend, backend, and deployment. Negotiable based on scope.",
    },
    {
      title: "React Native Developer",
      price: "$900 / project",
      detail:
        "Mobile app development with React Native and Expo — sleek and high-performance cross-platform apps.",
    },
    {
      title: "UI/UX Designer",
      price: "$500 / project",
      detail:
        "Modern UI/UX design with Figma and Tailwind for intuitive user experiences and visual harmony.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % rateOptions.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + rateOptions.length) % rateOptions.length);

  const getCard = (offset) => {
    const newIndex = (index + offset + rateOptions.length) % rateOptions.length;
    return rateOptions[newIndex];
  };

  return (
    <>
      {/* DESKTOP VIEW */}
      <section
        className="ratesContainer"
        id="rates"
        style={{
          background: active ? "" : "white",
          display: widthSize < 900 ? "none" : "block",
        }}
      >
        <div className="leftArrow" onClick={prevSlide}>
          <FaArrowAltCircleLeft size={50} color={active ? "white" : "black"} />
        </div>

        <div className="cardsContainerWrapper">
          <div className="cardsContainer">
            <AnimatePresence initial={false}>
              {[getCard(-1), getCard(0), getCard(1)].map((card, i) => {
                const position = i - 1; // -1 (left), 0 (center), 1 (right)
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: position * 300, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      x: position * 280,
                      scale: position === 0 ? 1.1 : 0.85,
                      zIndex: position === 0 ? 10 : 5,
                      rotateY: position * 12,
                      filter:
                        position === 0
                          ? "brightness(1)"
                          : "brightness(0.6) blur(0.5px)",
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="rateCard">
                      <h3>{card.title}</h3>
                      <p className="ratePrice">{card.price}</p>
                      <p className="rateDetail">{card.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="rightArrow" onClick={nextSlide}>
          <FaArrowAltCircleRight size={50} color={active ? "white" : "black"} />
        </div>
      </section>

      {/* MOBILE VIEW */}
      <motion.div
        className="mobileRateContainer"
        style={{ display: widthSize < 900 ? "flex" : "none" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mobileRateWrapper">
          {rateOptions.map((rates, index) => (
            <motion.div
              key={rates.title}
              className="mobileRateCard"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mobileRateLeft">
                <h2>{rates.title}</h2>
                <p>{rates.detail}</p>
              </div>
              <div className="mobileRateRight">
                <span className="mobilePrice">{rates.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Rates;
