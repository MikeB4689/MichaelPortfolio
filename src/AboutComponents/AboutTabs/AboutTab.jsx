import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeadset, FaLaptopCode, FaSearch } from "react-icons/fa";
import "./AboutTab.css";

const AboutTab = () => {
  const experiences = [
    {
      icon: <FaHeadset />,
      title: "Customer Service Representative – SITEL",
      year: "2015 - 2019",
      duties: [
        "Handled customer inquiries via phone, chat, and email.",
        "Provided technical support for ISP-related concerns.",
        "Delivered excellent customer service and troubleshooting assistance.",
      ],
    },
    {
      icon: <FaSearch />,
      title: "Amazon Product Researcher (Homebased)",
      year: "2020 - 2023",
      duties: [
        "Performed in-depth product and market research for eCommerce listings.",
        "Analyzed sales trends and managed product catalogs.",
        "Helped optimize listings for better visibility and performance.",
      ],
    },
    {
      icon: <FaLaptopCode />,
      title: "Junior Web Developer (Homebased)",
      year: "2023 - 2024",
      duties: [
        "Developed responsive web pages using React and HTML/CSS.",
        "Implemented frontend features and assisted in backend integration.",
        "Handled basic coding tasks, data entry, and site updates.",
      ],
    },
  ];

  const [activeButton, setButton] = useState("Bio");

  useEffect(() => {
    console.log(activeButton);
  }, [activeButton]);

  return (
    <div className="AboutTabContainer">
      {/* 🔘 Tabs */}
      <div className="buttonTabs">
        {["Bio", "Experience", "Skills"].map((tab) => (
          <motion.button
            key={tab}
            className={activeButton === tab ? "active" : ""}
            onClick={() => setButton(tab)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            {tab === "Experience" ? "Work Experience" : tab}
          </motion.button>
        ))}
      </div>

      {/* 📑 Content Section */}
      <div className="tableWrapper">
        <AnimatePresence mode="wait">
          {activeButton === "Bio" && (
            <motion.div
              key="Bio"
              className="tabContent bioContent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1>About Me</h1>
              <p>
                Hi, I’m <strong>Michael Dean Belen</strong>, a web developer
                based in the Philippines with a background in customer service,
                technical support, and eCommerce operations. I started my career
                helping customers as a technical support representative for an
                internet service provider, where I learned how to troubleshoot
                efficiently and communicate clearly under pressure. Later, I
                worked in email support for a Shopify store and as an Amazon
                product researcher, gaining valuable experience in online
                business operations and customer satisfaction.
              </p>
              <p>
                My curiosity for how websites work led me into frontend
                development, where I began crafting responsive layouts and
                intuitive interfaces. Today, I build and maintain modern
                websites using React, JavaScript, and modern CSS frameworks. I
                enjoy creating digital experiences that are clean, fast, and
                user-friendly.
              </p>
            </motion.div>
          )}

          {activeButton === "Experience" && (
            <motion.div
              key="Experience"
              className="tabContent experienceContent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="sectionTitle">Work Experience</h2>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timelineItem"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="timelineIcon">{exp.icon}</div>
                    <div className="timelineContent">
                      <h3>{exp.title}</h3>
                      <span className="year">{exp.year}</span>
                      <ul>
                        {exp.duties.map((duty, i) => (
                          <li key={i}>{duty}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeButton === "Skills" && (
            <motion.div
              key="Skills"
              className="tabContent skillsContent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="sectionTitle">My Skills</h2>
              <div className="skillsList">
                {[
                  { name: "Data Entry", level: 95 },
                  { name: "Product Research", level: 90 },
                  { name: "Customer Service", level: 92 },
                  { name: "Frontend Development", level: 75 },
                  { name: "React.js", level: 70 },
                  { name: "Amazon SEO", level: 85 },
                  { name: "HTML", level: 90 },
                  { name: "CSS", level: 85 },
                  { name: "JavaScript", level: 75 },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skillItem"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="skillHeader">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progressBar">
                      <motion.div
                        className="progressFill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutTab;
