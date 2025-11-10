import About from "./AboutComponents/AboutContainer/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/HomePage/Home";

import Navigation from "./Components/Navigation/Navigation";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects/Projects";
import { useEffect, useState } from "react";
const App = () => {
  const [active, setActive] = useState(false);
  const [dark, setDark] = useState({
    bgdark: {
      background: "radial-gradient(circle at top left, #030324ff, #020617)",
    },
    bglight: {
      background: "white",
    },
  });

  const [widthSize, setWidthsize] = useState();

  useEffect(() => {
    active ? console.log(dark.bgdark) : console.log(dark.bglight);

    const updateWidth = () => {
      const width = document.documentElement.clientWidth;
      setWidthsize(width);
      console.log("Width updated to:", widthSize);
    };

    updateWidth(); // run once on mount
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [active]);

  return (
    <div className="AppContainer">
      <Router>
        <Navigation setActive={setActive} />

        <Routes>
          <Route
            path="/"
            element={<Home dark={dark} active={active} widthSize={widthSize} />}
          />
          <Route path="/About" element={<About />} />
          <Route
            path="/Projects"
            element={<Projects widthSize={widthSize} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
