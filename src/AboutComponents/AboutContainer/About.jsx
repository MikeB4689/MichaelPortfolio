import AboutTab from "../AboutTabs/AboutTab";
import User from "../User/User";
import "./About.css";

const About = ({ dark, active }) => {
  return (
    <div className="AboutContainer" style={active ? dark.bgdark : dark.bglight}>
      <div className="sectionRight">
        <User dark={dark} active={active} />
      </div>
      <div className="sectionLeft">
        <AboutTab dark={dark} active={active} />
      </div>
    </div>
  );
};

export default About;
