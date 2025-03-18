import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utills/Motionn";
import { styles } from "../styles/styles";
import Secwrapper from "../components/hoc/SecWrapper";
import { Tilt } from "react-tilt";
import {services} from "../constants/index"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px]  w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 40 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

function About() {
  return (
    <>
      {" "}
      <motion.div variants={textVariant(0.5)} initial="hidden" animate="show">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("left", "tween", 0.1, 1)}
        initial="hidden"
        animate="show"
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default Secwrapper(About, "about");
