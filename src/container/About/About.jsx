import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";
// import { urlFor, client } from "../../client";

const abouts = [
  {
    title: "HTML5",
    description:
      "With a solid foundation in HTML5, I have built several web pages from scratch. My understanding of semantic HTML has allowed me to create well-structured and accessible websites..",
    imgUrl: images.html,
  },
  {
    title: "CSS3",
    description:
      "I have a strong grasp of CSS3, which has enabled me to design visually appealing websites. I have experience with responsive design and have used CSS3 to create animations and effects.",
    imgUrl: images.css,
  },
  {
    title: "Bootstrap",
    description:
      "I have utilized Bootstrap prebuilt classes and components to quickly and efficiently design responsive websites. My projects have benefited from the speed that Bootstrap provides..",
    imgUrl: images.bootstrap5,
  },
  {
    title: "Sass",
    description:
      "I have used Sass in my projects to write more efficient and maintainable CSS. My experience includes using variables, nesting, mixins, and other Sass features..",
    imgUrl: images.sass,
  },
  {
    title: "Tailwind CSS",
    description:
      "I have experience using Tailwind CSS, a utility-first CSS framework for rapidly building custom user interfaces and creating efficient and scalable styles..",
    imgUrl: images.tailwind,
  },
  {
    title: "JavaScript",
    description:
      "I have used JavaScript to add interactivity to my websites. My projects have included form validation, interactive galleries, and custom interactive features.",
    imgUrl: images.javascript,
  },
  {
    title: "ReactJS",
    description:
      "I have developed several projects using ReactJS. My experience includes creating reusable components, managing state, and using React hooks.",
    imgUrl: images.reactjs,
  },
  {
    title: "AngularJS",
    description:
      "I have worked on several projects using AngularJS, a powerful JavaScript framework for building dynamic web applications. ",
    imgUrl: images.angular,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Unlocking Creativity, <span>Elevating Experience:</span> <br />
        Where <span>Innovation Meets Impact</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
