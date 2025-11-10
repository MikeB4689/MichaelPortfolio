import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/HomePage/Home";
import About from "./AboutComponents/AboutContainer/About";
import Projects from "./Projects/Projects";

const App = () => {
  const [active, setActive] = useState(false); // false = light mode
  const [widthSize, setWidthsize] = useState(window.innerWidth);

  // Theme colors
  const [dark] = useState({
    bgdark: {
      background: "radial-gradient(circle at top left, #030324ff, #020617)",
      color: "#f1f5f9",
    },
    bglight: {
      background: "#f8fafc",
      color: "#0f172a",
    },
  });

  useEffect(() => {
    const handleResize = () => setWidthsize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="AppContainer"
      style={{
        ...(!active ? dark.bglight : dark.bgdark),
        transition: "all 0.4s ease-in-out",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Navigation setActive={setActive} active={active} />
        <Routes>
          <Route
            path="/"
            element={<Home dark={dark} active={active} widthSize={widthSize} />}
          />
          <Route
            path="/about"
            element={
              <About dark={dark} active={active} widthSize={widthSize} />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects dark={dark} active={active} widthSize={widthSize} />
            }
          />
        </Routes>
        <Footer dark={dark} active={active} />
      </Router>
    </div>
  );
};

export default App;
