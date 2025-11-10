import { motion, useInView } from "framer-motion";
import image1 from "../Assets/Virings/welcomepage.png";
import image2 from "../Assets/Virings/productpage.png";
import image3 from "../Assets/Virings/modalAddtocart.png";
import image4 from "../Assets/Virings/checkoutpage.png";
import image5 from "../Assets/Virings/checkoutEdit.png";
import image6 from "../Assets/Virings/checkoutDeliveryEdit.png";
import Video from "../Assets/Videos/ApongViring.webm";

import "./Project.css";
import { useRef, useState } from "react";

const Projects = ({ widthSize }) => {
  const [images] = useState([
    {
      image: image1,
      description: `Welcome to our app! The Welcome Page gives users a warm introduction with a modern and friendly design. It highlights the app's purpose, key features, and provides easy navigation to sign up or log in.`,
    },
    {
      image: image2,
      description: `Our product page displays all available items with clean visuals and easy browsing. It's designed for quick navigation, product discovery, and seamless cart additions.`,
    },
    {
      image: image3,
      description: `The Add to Cart modal lets users quickly select quantities and review details before confirming — a smooth and efficient shopping flow.`,
    },
    {
      image: image4,
      description: `The checkout page provides a clear order summary and payment options. Users can confirm details confidently before finalizing their purchase.`,
    },
    {
      image: image5,
      description: `Easily edit your checkout details — from quantity adjustments to delivery notes — ensuring flexibility before completing your order.`,
    },
    {
      image: image6,
      description: `The delivery edit screen allows users to modify shipping details in real-time, offering convenience and control over their orders.`,
    },
  ]);

  return (
    <div className="projectContainer">
      {images.map((content, index) => (
        <ProjectContainer key={index} content={content} widthSize={widthSize} />
      ))}

      {/* 🎬 Video Section */}
      <div className="videoContainer">
        <motion.div
          className="videoText"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>Apong Viring Store App Demo</h2>
          <p>
            Experience a quick walkthrough of the Apong Viring Store app system
            — from browsing products and adding to cart to checking out and
            editing orders. This demo highlights the app's smooth user flow,
            modern UI, and responsive interactions.
          </p>
        </motion.div>

        <motion.div
          className="mediaContainer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <video
            src={Video}
            autoPlay
            loop
            muted
            playsInline
            className="projectVideo"
          />
        </motion.div>

        {/* 📦 Download APK Section */}
        <motion.div
          className="downloadContainer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3>Try the App Yourself</h3>
          <p>
            Download the sample APK below and experience the Apong Viring Store
            app directly on your Android device.
          </p>
          <a
            href="https://drive.google.com/drive/my-drive"
            download
            className="downloadButton"
          >
            ⬇️ Download APK
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectContainer = ({ content, widthSize }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      className="projContainer"
      // ✅ Removed inline styles - let CSS handle responsiveness
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="rightContainer">
        <motion.section
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <motion.img
            src={content.image}
            alt="Project preview"
            initial={{ objectPosition: "top center" }}
            animate={{
              objectPosition: ["top center", "bottom center", "top center"],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.section>
      </div>

      <motion.div
        className="leftContainer"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p>{content.description}</p>
      </motion.div>
    </motion.div>
  );
};
