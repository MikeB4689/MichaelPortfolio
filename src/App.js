import About from "./AboutComponents/AboutContainer/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/HomePage/Home";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Projects/Projects";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [active, setActive] = useState(false);
  const [dark] = useState({
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
      console.log("Width updated to:", width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [active, dark.bgdark, dark.bglight]); // ✅ added missing dependencies

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
