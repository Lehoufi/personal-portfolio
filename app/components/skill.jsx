import React from 'react'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function skill({image,title,desc,index}) {
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
    initial={{ opacity: 0, y: 50 }}
    animate={controls}
    transition={{
      duration: 1,
      ease: "easeOut",
      opacity: { duration: 0.5 },
      y: { type: "spring", stiffness: 100 }
    }}
    variants={{
      visible: { opacity: 1, y: 0 }
    }}
    whileTap={{ scale: 0.95 }}
     

      className='flex flex-col justify-start relative items-baseline gap-8 w-1/4 max-md:w-4/5 mb-4 dark:text-gray-300 hover:-translate-y-1 cursor-pointer'>      <Image src={image} width={350} height={200} priority className={` duration-200  rounded-lg dark:text-gray-50   `} alt={title} />
      <div className="flex flex-col gap-2">
      <span className="title font-semibold text-xl ">{title}</span>
        <span className="desc ">{desc}</span>
    
      </div>
        </motion.div>
  )
}

export default skill