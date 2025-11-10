import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerBrand">
          <h3>Michael Dean Belen</h3>
          <p>Fullstack Developer | Designer | Creator</p>
        </div>

        <div className="footerSocials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footerBottom">
        <p>
          © {new Date().getFullYear()} Michael Dean Belen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
