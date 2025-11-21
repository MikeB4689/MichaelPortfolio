import { motion } from "motion/react";
import image1 from "../Assets/webpages/dragandDrop.png";
import image2 from "../Assets/webpages/losA.png";
import image3 from "../Assets/webpages/grizzley.png";
import image4 from "../Assets/webpages/fbpage.png";

export const WebPages = ({ dark, active }) => {
  const images = [
    {
      title: "Drag and Drop",
      desc: "A modern drag-and-drop interface with smooth animations and user-friendly interactions.",
      image: image1,
      link: "https://mikeb4689.github.io/list_sort_update/",
    },
    {
      title: "Parallax Website",
      desc: "A clean, scrolling parallax design built for immersive storytelling and visual depth.",
      image: image2,
      link: "https://mikeb4689.github.io/sampleWebsiteTest/",
    },
    {
      title: "Promotions Landing Page",
      desc: "A high-conversion promotional website with strong visuals and optimized layout.",
      image: image3,
      link: "https://mikeb4689.github.io/grizzlyWebsite_SampleProject/",
    },
    {
      title: "Facebook Page UI",
      desc: "A Facebook-style page layout created to demonstrate feed structure and component styling.",
      image: image4,
      link: "https://mikeb4689.github.io/Fb-sample-page/",
    },
  ];

  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        Web Projects Showcase
      </motion.h1>

      <div
        className="gridWrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
        }}
      >
        {images.map((list, id) => (
          <motion.div
            key={id}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
            style={{
              padding: "20px",
              background: active
                ? dark.bgdark.background
                : dark.bglight.background,
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",

              color: active ? dark.bgdark.color : dark.bglight.color,
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>{list.title}</h2>
            <p style={{ marginBottom: "20px", opacity: 0.8 }}>{list.desc}</p>

            {/* 🔗 Added clickable link */}
            <a
              href={list.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block" }}
            >
              <motion.div
                className="imgContainer"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <motion.img
                  src={list.image}
                  alt={`${list.title}_${id}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
