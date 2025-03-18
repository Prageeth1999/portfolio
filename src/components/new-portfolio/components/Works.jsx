import React from 'react'
import { SecWrapper } from './hoc/index'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant ,fadeIn} from "../utills/Motionn";
import { styles } from "../styles/styles";
import { projects} from '../constants/index'
import { github } from "../assets";


//template_xbf1ygc
//service_019pkrl
//YY9vQ44pWcBh48JGp
const ProjectCard =(props)=>{ const index = props.index;
    const image = props.image;
    const name = props.name;
    const source_code_link = props.source_code_link;
    const description = props.description;
    const tags = props.tags

return(<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
       <Tilt
        options={{ max: 45, scale: 1, speed: 45 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2" />
            </div>
          </div>
          </div>
          <div className="mt-5 ">
          <h3 className="text-white text-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
</motion.div>)

}

function Works() {
  return (<>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} mt-10`} >My work</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
  </motion.div>
  <div>
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
  >
    Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.
  </motion.p>
</div>
<div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project${index}`} index={index} {...project} />
        ))}
      </div>
</>
  
  )
}

export default SecWrapper(Works,"")