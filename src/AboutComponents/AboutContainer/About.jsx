import AboutTab from "../AboutTabs/AboutTab";
import User from "../User/User";
import "./About.css";

const About = () => {
  return (
    <div className="AboutContainer">
      <div className="sectionRight">
        <User />
      </div>
      <div className="sectionLeft">
        <AboutTab />
      </div>
    </div>
  );
};

export default About;
