import { useEffect, useState } from "react";
import ButtonToggle from "../ButtonToggle/ButtonToggle";
import "./Navigation.css";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { TfiAlignCenter } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Navigation = ({ setActive }) => {
  const [pageValue, setValue] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setValue(latest));

  const date = new Date();
  const dateToday = date.getDate();
  const monthToday = date.toLocaleString("default", { month: "long" });
  const yearToday = date.getFullYear();

  const navigationContent = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <motion.div
      className="navigationContainer"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: pageValue >= 100 ? "fixed" : "relative",
        width: "100%",
        background: pageValue >= 100 ? "#1e293b" : "#334155",
        transition: "background 0.3s ease",
        zIndex: "10",
      }}
    >
      <div className="dateContainer">
        <ButtonToggle setActiv={setActive} />
        <h4>{`${monthToday} ${dateToday}, ${yearToday}`}</h4>
      </div>

      <div className="titleNavcontainer">
        <motion.div className="title" whileHover={{ scale: 1.05 }}>
          <h2>Portfolio</h2>
        </motion.div>

        <motion.div
          className="mobileIcon"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <TfiAlignCenter size="30px" color="white" />
        </motion.div>

        {/* 📱 Mobile Menu */}
        <motion.div
          className="mobileContainer"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: menuOpen ? "200px" : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        >
          <ul>
            {navigationContent.map((content, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }}>
                <NavLink
                  to={content.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "activeNavLink" : ""
                  }
                >
                  {content.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 💻 Desktop Nav */}
        <motion.div className="navigationContent">
          <ul>
            {navigationContent.map((content, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1 }}>
                <NavLink
                  to={content.path}
                  className={({ isActive }) =>
                    isActive ? "activeNavLink" : ""
                  }
                >
                  {content.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navigation;
