import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaDiscord,
  FaSkype,
  FaUserTie,
  FaGlobe,
} from "react-icons/fa";
import profilepicture from "../../Assets/pixt/profile.jpg";
import "./User.css";

const User = ({ dark, active }) => {
  // Variants for staggered animations
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="userContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: active ? dark.bglight.background : dark.bgdark.background,
      }}
    >
      {/* 🧍‍♂️ Profile Picture */}
      <motion.div
        className="userRight"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src={profilepicture}
          alt="Profile"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* 📋 Info Section */}
      <motion.div
        className="userLeft"
        variants={containerVariant}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={itemVariant}
          className="motionTitle"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            color: active ? dark.bglight.color : dark.bgdark.color,
          }}
        >
          <FaUserTie
            className="iconTitle"
            style={{
              color: active ? dark.bglight.color : dark.bgdark.color,
            }}
          />{" "}
          Michael Dean Belen
        </motion.h1>

        {/* 📞 Contact Details */}
        <motion.ul className="userDetails" variants={containerVariant}>
          {[
            {
              icon: <FaEnvelope className="icon" />,
              label: "Email:",
              value: "michaeldean.belen@gmail.com",
            },
            {
              icon: <FaPhoneAlt className="icon" />,
              label: "Contact #:",
              value: "09468246860 | 099512717575",
            },
            {
              icon: <FaWhatsapp className="icon" />,
              label: "WhatsApp:",
              value: "09468246860",
            },
            {
              icon: <FaDiscord className="icon" />,
              label: "Discord:",
              value: "mike_4689",
            },
            {
              icon: <FaSkype className="icon" />,
              label: "Skype:",
              value: "live:a7b64ddfdcaa8e41",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariant}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {item.icon}
              <p
                style={{
                  color: active ? dark.bglight.color : dark.bgdark.color,
                }}
              >
                {item.label}
              </p>
              <span
                style={{
                  color: active ? dark.bglight.color : dark.bgdark.color,
                }}
              >
                {item.value}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* 🌍 Freelance Links */}
        <motion.ul className="freelance" variants={containerVariant}>
          {[
            {
              label: "OnlineJobs.ph:",
              href: "https://www.onlinejobs.ph/jobseekers/info/726857",
            },
            {
              label: "Upwork:",
              href: "https://www.upwork.com/freelancers/~01db20cfe853db7210",
            },
          ].map((link, index) => (
            <motion.li
              key={index}
              variants={itemVariant}
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <FaGlobe className="icon" />
              <p
                style={{
                  color: active ? dark.bglight.color : dark.bgdark.color,
                }}
              >
                {link.label}
              </p>
              <motion.a
                style={{
                  color: active ? dark.bglight.color : dark.bgdark.color,
                }}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  color: "#7dd3fc",
                  textShadow: "0 0 8px #38bdf8",
                }}
              >
                View Profile
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default User;
