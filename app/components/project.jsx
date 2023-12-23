'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
function project({title,description,href,image,className}) {
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
  initial={{opacity: 0,  x: -100 }}
  animate={controls}
  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
  transition={{ duration: 0.7, ease: "easeOut",delay: 0.2 }}
  variants={{
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        x: { type: "spring", stiffness: 120 },
        opacity: { duration: 0.3 },
        delay:0.2
      }
    }
  }}

  whileHover={{scale:1.01}} className={`card max-md:w-[25rem]  mt-12 select-none transition-all duration-100 dark:bg-[#161616cf] dark:text-gray-200 relative  cursor-pointer  `}>
        
        <div className={`lisr max-md:flex-row max-lf:gap-4 gap-7 ${className}`}>
          <div className="logo text-5xl font-bold  max-md:text-3xl">{title}</div>
        
          <p  className="text-xl max-lf:hidden">
           {description}
          </p>
          <Link href={href} target='_blank' className="fx justify-start dark:bg-[#000000fc] dark:text-white gap-2 bg-white p-4 px-5 rounded-xl diva">
            <p   className="font-bold  max-md:text-lg">Visit website</p>
            <svg fill="currentColor" className="w-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.707,17.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L16.293,7.707a1,1,0,0,1,1.414-1.414l5,5a1,1,0,0,1,0,1.414Z"
              ></path>
            </svg>
          </Link>
        </div>
        <Image src={image} width={750} height={400} priority className={`imgs duration-200 ${className}   `} alt="" />
      </motion.div>
  )
}

export default project