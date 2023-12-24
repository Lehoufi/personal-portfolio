'use client'
import { useEffect, useState } from 'react'; 
import { motion, useAnimation } from "framer-motion";
import Skill from './skill';
import { useInView } from "react-intersection-observer";
import { skills } from './skills';
import Technologies from './technologies';
export default function Page({ updatepost,primaryColor }) {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  

  return (
   <div  className=' py-8 md:py-4 ' id='skills'>
        <h1 className="text-6xl max-md:text-4xl max-md:m-0 text-gray-900 dark:text-gray-200 font-bold text-center m-4 w-full max-w-[80%] max-md:max-w-[100%] mx-auto">
  Shape your <span className='transition-all duration-400' style={{ color: primaryColor }}>design</span>, shape your business
  <span style={{ color: primaryColor }}>destiny</span>
.
</h1>

      
 

 
</div>
   

  )
}
