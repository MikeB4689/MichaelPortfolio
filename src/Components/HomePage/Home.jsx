import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaFacebookSquare,
  FaYoutube,
  FaGithub,
  FaReact,
  FaPhp,
  FaCss3,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import { AiFillTikTok, AiOutlineConsoleSql } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";

import "./Home.css";
import Slider from "../Slider/Slider";
import Rates from "../Cards/Rates";
import ContactForm from "../Contact/ContactForm "; // ❌ fixed extra space
import Calendar from "../Calendar/Calendar";

const Home = ({ dark, active, widthSize }) => {
  const [socialIcons] = useState([
    { icons: <FaFacebookSquare />, name: "Facebook" },
    { icons: <FaYoutube />, name: "Youtube" },
    { icons: <AiFillTikTok />, name: "Tiktok" },
  ]);

  const icons = [
    <FaGithub />,
    <FaReact />,
    <FaPhp />,
    <AiOutlineConsoleSql />,
    <FaCss3 />,
    <FaHtml5 />,
    <SiTypescript />,
    <FaBootstrap />,
  ];

  // 🌌 Parallax effect for hero
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <div className="HomeContainer">
      {/* 🦸 HERO SECTION */}
      <SectionHome id="Hero" dark={dark} active={active}>
        <motion.div
          className="heroContainer"
          style={{ y: yParallax, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="heroContent"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              style={active ? { color: "white" } : { color: "black" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I'm Michael 👋
            </motion.h1>

            <motion.h4
              style={active ? { color: "white" } : { color: "black" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              A React Developer crafting modern web experiences
            </motion.h4>

            <motion.p
              style={active ? { color: "white" } : { color: "black" }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            >
              I’m a full-stack developer with hands-on experience in building
              responsive, high-performance web and mobile applications. On the
              frontend, I specialize in React and modern UI frameworks to craft
              seamless user experiences. On the backend, I work with Node.js,
              Express, and Firebase to design secure and efficient APIs that
              bring projects to life from end to end.
            </motion.p>
          </motion.div>

          <motion.div
            className="heroSocials"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {socialIcons.map((item, index) => (
              <motion.div
                className="iconsContainer"
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <p style={active ? { color: "white" } : { color: "black" }}>
                  {item.icons}
                </p>
                <p style={active ? { color: "white" } : { color: "black" }}>
                  {item.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(56,189,248,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Download my Resume
          </motion.button>
        </motion.div>
      </SectionHome>

      {/* ⚙️ Technologies */}
      <SectionHome id="Technologies" dark={dark} active={active}>
        <div className="conTechnologies">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, ease: "easeOut" },
              },
            }}
          >
            {icons.map((icon, index) => {
              const iconColors = {
                dark: [
                  "#38bdf8", // Github
                  "#61dafb", // React
                  "#8993be", // PHP
                  "#3b82f6", // SQL
                  "#0ea5e9", // CSS
                  "#f97316", // HTML
                  "#3178c6", // TypeScript
                  "#a855f7", // Bootstrap
                ],
                light: [
                  "#1e293b", // Github
                  "#2563eb", // React
                  "#334155", // PHP
                  "#1e40af", // SQL
                  "#0284c7", // CSS
                  "#ea580c", // HTML
                  "#2563eb", // TypeScript
                  "#6b21a8", // Bootstrap
                ],
              };

              const color = active
                ? iconColors.dark[index] || "#38bdf8"
                : iconColors.light[index] || "#1e293b";

              return (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 200 },
                  }}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.p
                    style={{
                      color,
                      fontSize: "5rem",
                      filter: active
                        ? "drop-shadow(0 0 15px rgba(59,130,246,0.5))"
                        : "drop-shadow(0 0 5px rgba(0,0,0,0.1))",
                      transition: "all 0.4s ease",
                    }}
                    whileHover={{
                      color: "#facc15",
                      filter: "drop-shadow(0 0 20px rgba(250,204,21,0.8))",
                      scale: 1.1,
                    }}
                  >
                    {icon}
                  </motion.p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </SectionHome>

      {/* 🧾 Description */}
      <SectionHome id="Description" dark={dark} active={active}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Slider Effect React + CSS only
        </motion.h1>
        <Slider />
        <motion.section
          id="descritptions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Full-Stack Developer</h2>
          <p>
            I build modern, responsive web and mobile applications with a focus
            on clean design and high performance. On the frontend, I work with
            React, Next.js, and Tailwind CSS to craft intuitive interfaces. On
            the backend, I use Node.js and FastAPI to create scalable, secure,
            and efficient APIs.
          </p>
          <p>
            My passion lies in connecting elegant UI design with powerful
            backend logic — transforming ideas into smooth, real-world digital
            experiences.
          </p>
        </motion.section>
      </SectionHome>

      {/* 💸 Rates */}
      <SectionHome id="Rate" dark={dark} active={active}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Rates dark={dark} active={active} widthSize={widthSize} />
        </motion.div>
      </SectionHome>

      {/* 📞 Contact */}
      <SectionHome id="Contact" dark={dark} active={active}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={active ? { color: "white" } : { color: "black" }}
        >
          Have a project idea or need a developer to bring your vision to life?
          I’m always open to new opportunities, collaborations, and exciting
          tech challenges.
          <br /> Let’s connect and build something awesome together!
        </motion.h1>
        <motion.div
          className="calendarContainer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContactForm dark={dark} active={active} />
          <Calendar />
        </motion.div>
      </SectionHome>
    </div>
  );
};

const SectionHome = ({ children, id, dark, active }) => {
  const secref = useRef(null);
  return (
    <motion.div
      className="sectionHomeContainer"
      id={id}
      ref={secref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      style={active ? dark.bgdark : dark.bglight}
    >
      {children}
    </motion.div>
  );
};

export default Home;
