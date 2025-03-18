import React from "react";
import { styles } from "../styles/styles";
import TestCanvas2 from "./canvas/TestCanvas2"
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={` absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white-100 " />
          <div className="w-1 sm:h-80 h-40  bg-gradient-to-b from-[#ffffef] to-[#f5a623]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#00FFFF]">Prageeth</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I devolop 3D visuals,user
            <br className="sm:block hidden" /> interfaces and web applications
          </p>
        </div>
      </div>
      <TestCanvas2 />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
               className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
