import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      bgColor: "",
      icon: images.html,
    },
    {
      name: "CSS3",
      bgColor: "",
      icon: images.css,
    },
    {
      name: "Bootstrap",
      bgColor: "",
      icon: images.bootstrap5,
    },
    {
      name: "Saas",
      bgColor: "",
      icon: images.sass,
    },
    {
      name: "Tailwind",
      bgColor: "",
      icon: images.tailwind,
    },
    {
      name: "Javascript",
      bgColor: "",
      icon: images.javascript,
    },
    {
      name: "ReactJS",
      bgColor: "",
      icon: images.reactjs,
    },
    {
      name: "AngularJS",
      bgColor: "",
      icon: images.angular,
    },
    {
      name: "Typescript",
      bgColor: "",
      icon: images.typescript,
    },
    {
      name: "Git",
      bgColor: "",
      icon: images.git,
    },
    {
      name: "Java",
      bgColor: "",
      icon: images.java,
    },
    {
      name: "SpringBoot",
      bgColor: "",
      icon: images.springboot,
    },
    {
      name: "MySQL",
      bgColor: "",
      icon: images.mysql,
    },
    {
      name: "MongoDB",
      bgColor: "",
      icon: images.mongodb,
    },
  ];

  const experiences = [
    {
      year: "May, 2024 - Sep, 2024",
      works: [
        {
          name: "Software Developer",
          company: "Appilary Technologies",
          desc: "Explore our user-friendly dashboard, designed with simple HTML, CSS, and JavaScript for a smooth interface, and backed by Node.js, Express.js, and MongoDB for powerful functionality. Located in Greater Noida, I coordinated tasks among different teams, making sure everyone worked together smoothly. Working closely with developers, I helped find and fix any issues in the software, making the dashboard reliable and bug-free. Our dashboard is easy to use, making it simple for anyone to visualize and manage data effectively.",
        },
      ],
    },
  ];

  return (
    <>
      <h2>Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <motion.div
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "skills"), "skills", "app__whitebg");
