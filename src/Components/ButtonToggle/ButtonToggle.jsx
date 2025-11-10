import { useState } from "react";
import "./ButtonToggle.css";
import { MdDarkMode } from "react-icons/md";
import { CiBrightnessUp } from "react-icons/ci";

const ButtonToggle = ({ setActiv }) => {
  const [toggleBtn, isON] = useState(false);

  const handleToggle = () => {
    isON((pre) => !pre);
    setActiv(toggleBtn);
  };

  return (
    <div className="toggleContainer">
      <div
        className="buttonToggle"
        style={
          toggleBtn
            ? {
                flexDirection: `row`,
                transition: `0.5s ease-in-out`,
              }
            : { flexDirection: `row-reverse`, transition: `0.5s ease-in-out` }
        }
      >
        <div
          className="circleToggle"
          onClick={handleToggle}
          style={{ background: toggleBtn ? "green" : " " }}
        ></div>
        <span
          style={{
            background: toggleBtn ? "green" : "dimgrey",
            borderTopRightRadius: toggleBtn ? "10px" : "",
            borderBottomRightRadius: toggleBtn ? "10px" : "",
            borderTopLeftRadius: toggleBtn ? "" : "10px",
            borderBottomLeftRadius: toggleBtn ? "" : "10px",
          }}
        >
          {toggleBtn ? "On" : "Off"}
        </span>
      </div>
      <div className="mobileContainerToggle">
        <button
          onClick={handleToggle}
          style={{
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          {toggleBtn ? <CiBrightnessUp /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default ButtonToggle;
