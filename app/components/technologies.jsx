'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
function Technologies({svg,index,name,bg}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } 
    }, [controls, inView]);
  return (
    <motion.div
    ref={ref}
  initial={{ opacity: 0, y: 100 }}  
  animate={controls}
  transition={{ duration: 0.2, ease: "easeOut" }} 
  variants={{
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3, 
        ease: "easeOut",
        delay: 0.07 * index 
      }
    }
  }}
        className={`fx gap-3 cursor-pointer relative shadow  px-3  ${bg} text-white  text-3xl font-semibold rounded-2xl  max-md:h-14 max-md:text-xl  h-16 '`}>
     <span>
    {svg}
     </span>
     <span className='max-md:hidden'>
       {name}
     </span>
 </motion.div>
  )
}

export default Technologies