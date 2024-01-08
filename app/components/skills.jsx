'use client'
import { useEffect, useState } from 'react'; 
import { motion, useAnimation } from "framer-motion";
import Skill from './skill';
import { useInView } from "react-intersection-observer";
import { skills } from '../skills';
import Technologies from './technologies';
import { technologies } from '../techno';
export default function Page({ updatepost,primaryColor }) {
  const [ref, inView] = useInView();
  const controls = useAnimation();  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      updatepost('skills');
    } 
  }, [controls, inView,updatepost]);
  return (
   <div   className=' py-8 md:py-4 ' id='skills'>
        <h1  className="text-6xl max-md:text-4xl max-md:m-0 text-gray-900 dark:text-gray-200 font-bold text-center m-4 w-full max-w-[80%] max-md:max-w-[100%] mx-auto">
  Shape your <span className='transition-all duration-400' style={{ color: primaryColor }}>design</span>, shape your business
  <span style={{ color: primaryColor }}>destiny</span>
.
</h1>

<div ref={ref} className='fx justify-center gap-8 my-20 max-md:my-6 flex-wrap'>
  {skills && skills.components && skills.components.map((skill, index) => (
        <Skill key={index}
          image={skill.src} 
          title={skill.title}
          desc={skill.description}
        />
      ))}
  </div>

  <div  className="flex flex-wrap gap-6 md:px-4  justify-center my-20 max-md:my-8  max-md:gap-3">

{
  technologies.techno.map((t,index)=>(
    <Technologies
    key={index}
    svg={t.icon} 
    name={t.name}
    bg={t.background} index={index}
  />
  ))
}
   
 

  </div>
 

 
</div>
   

  )
}
