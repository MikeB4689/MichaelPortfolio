import { useState } from "react";
import "./ButtonToggle.css";
import { MdDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";

const ButtonToggle = ({ setActiv }) => {
  const [toggleBtn, isON] = useState(false);

  const handleToggle = () => {
    isON((prev) => {
      const newValue = !prev;
      setActiv(newValue); // instantly pass to App
      return newValue;
    });
  };

  return (
    <div className="toggleContainer">
      <div
        className="buttonToggle"
        style={{
          flexDirection: toggleBtn ? "row" : "row-reverse",
          transition: "0.4s ease",
        }}
      >
        <div
          className="circleToggle"
          onClick={handleToggle}
          style={{
            background: toggleBtn ? "#22c55e" : "#475569",
          }}
        ></div>
        <span
          style={{
            background: toggleBtn ? "#22c55e" : "#475569",
            color: "white",
            padding: "4px 10px",
            borderRadius: "10px",
            userSelect: "none",
            fontSize: "10px",
          }}
        >
          {toggleBtn ? "Dark" : "Light"}
        </span>
      </div>

      {/* 🔹 Mobile Circle Button */}
      <div className="mobileContainerToggle">
        <button
          onClick={handleToggle}
          style={{
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            background: "transparent",
            border: "1px solid #94a3b8",
            color: toggleBtn ? "#22c55e" : "#475569",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
        >
          {toggleBtn ? <CiBrightnessUp size={20} /> : <MdDarkMode size={20} />}
        </button>
      </div>
    </div>
  );
};

export default ButtonToggle;
