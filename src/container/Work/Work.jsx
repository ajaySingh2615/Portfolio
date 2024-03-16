import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const filterWork = [
    {
      title: "Indian Dry-Cleaner Website",
      description:
        "Immerse yourself in the seamless experience of our Indian Dry Cleaner website, meticulously crafted with HTML, CSS, and JavaScript. Our stringent adherence to strict CSS principles ensures unparalleled responsiveness across all devices, employing innovative grid and flex layouts. Whether booking appointments or seeking further details, our user-centric design guarantees optimal engagement. Experience convenience redefined as you engage with us for all your dry-cleaning needs.",
      projectLink: "https://cadt-indian-dry-cleaner.netlify.app",
      codeLink: "fjlkjfdsjf",
      imgUrl: images.washing,
      tags: "Web App",
    },
    {
      title: "Wanderlust website",
      description:
        "Embark on a journey through cutting-edge Full Stack Development with our meticulously crafted web application. We've seamlessly integrated HTML, CSS, JavaScript, and Bootstrap for a captivating frontend, while Node.js, Express.js, and EJS power our dynamic backend. Our focus on Database Management is unparalleled, leveraging MongoDB and Mongoose for efficient data handling and retrieval. With robust User Authentication and Authorization features, your security is our priority",
      projectLink: "https://node-project-rrgl.onrender.com",
      codeLink: "https://github.com/ajaySingh2615/Full_Stack_Project",
      imgUrl: images.house,
      tags: "Web App",
    },
    {
      title: "Forkify-My App",
      description:
        "Welcome to Forkify, your go-to destination for dynamic recipe management, where users effortlessly add, organize, and explore their favorite culinary creations. Crafted with precision using HTML, CSS, Bootstrap, and pure JavaScript, this website offers a seamless blend of functionality and aesthetics. Dive into a world of culinary delights, where every dish is just a click away, thanks to our intuitive search and organization features. Whether you're a novice chef.",
      projectLink: "https://forkify-cadt.netlify.app",
      codeLink: "https://github.com/ajaySingh2615/Full_Stack_Project",
      imgUrl: images.restaurant,
      tags: "Web App",
    },
  ];

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
