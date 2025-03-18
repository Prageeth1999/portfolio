import React from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "../../utills/Motionn";
import { styles } from "../../styles/styles";

const SecWrapper = (Componet, idName) => {
  return function HOC(){return <motion.section
  variants={staggerContainer()}
  initial="hidden"
  whileInView='show'
  className={`${styles.padding} maxw-7xl mx-auto relative z-0`}
  ><span className="hash-span"  id={idName}>&nbsp;</span>
    <Componet/>
  </motion.section>};
};

export default SecWrapper;