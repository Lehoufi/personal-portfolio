'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar({ activated, updatepost, primaryColor, setPrimaryColor  }) {
  const [theme, settheme] = useState('light');
  const [menu, setmenu] = useState(false);

  const handletheme = (t) => {
    settheme(t);
  };

  useEffect(() => {
    const html = document.documentElement;

    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [theme]);

  const buttonStyles = 'bg-[#f9f9f9] dark:bg-[#000000fc]   text px-3 py-1  font-semibold rounded-full ';

  return (
    <motion.div 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
    }}
     className="fx sticky justify-evenly gap-5 top-0 z-40 p-2">
      <div className="fx max-md:hidden justify-center px-4 transition-all duration-500   py-2 rounded-full  gap-4 text-gray-800 text-xl dark:text-gray-400 cursor-pointer   border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6   sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 ">
        <span onClick={() => handletheme('light')} className={theme === 'light' ? buttonStyles : ''}>
          Light
        </span>
        <span onClick={() => handletheme('dark')} className={theme === 'dark' ? buttonStyles : ''}>
          Dark
        </span>
      </div>

      <div className="fx justify-center px-4 py-2 max-sm:px-2 max-sm:py-1 max-sm:gap-3 max-sm:text-lg rounded-full transition-all duration-500  gap-4 text-gray-800 text-xl dark:text-gray-400 cursor-pointer   border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6   sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
        <Link href="#home" onClick={() => updatepost('home')}
          style={{ color: activated=== 'home' ? primaryColor : '' }}
        className={activated === 'home' ? buttonStyles : ''}>
            Home
        </Link>
        <Link href="#skills"     style={{ color: activated=== 'skills' ? primaryColor : '' }}  onClick={() => updatepost('skills')} className={activated === 'skills' ? buttonStyles : ''}>
            Skills
        </Link>
        <Link href="#project"      style={{ color: activated=== 'project' ? primaryColor : '' }} onClick={() => updatepost('project')} className={activated === 'project' ? buttonStyles : ''}>
            Projects
        </Link>
        <Link href="#contact"      style={{ color: activated=== 'contact' ? primaryColor : '' }} onClick={() => updatepost('contact')} className={activated === 'contact' ? buttonStyles : ''}>
            Conatct
        </Link>
      
      </div>

      <div className="relative ">
        <div onClick={() => setmenu(!menu)} className={`menu cursor-pointer   border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.02] backdrop-blur-[0.5rem]    rounded-full dark:bg-gray-950  dark:border-black/40 dark:bg-opacity-75  relative ${menu ? 'active' : ''}`}>
          <span className='dark:bg-gray-400'></span>
          <span className='dark:bg-gray-400'></span>
          <span className='dark:bg-gray-400'></span>
        </div>

        {menu && (
         <div className="absolute top-14 max-md:right-2 w-[10rem]  md:-left-7 bg-slate-50 rounded-lg text-gray-900 dark:text-gray-300 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
         <div className="relative flex flex-col items-start  p-2 ">
           <p className='text-base'>primary Color :</p> 
           <div className='flex items-center flex-wrap gap-3 p-2'>
  {[
   { color: "#7C3AED", name: 'Violet' },
   { color: "#ef233c", name: 'Red' }, 
   { color: "#83C512", name: 'Green' }, 
   { color: "#007FFF", name: 'Light Blue' },
   { color: "#FB8B24", name: 'Soft Yellow' },
   { color: "#FF6666", name: 'Soft Yellow' }
  ].map(({ color,index }) => (
    <div 
      key={index} 
      className={`w-7 h-7 rounded-lg cursor-pointer overflow-hidden border-2 ${primaryColor === color ? 'border-green-400' : 'border-transparent'}`}
      onClick={() => setPrimaryColor(color)} 
      style={{ backgroundColor: color }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    ></div>
  ))}
</div>

         </div>
         <div className="relative flex flex-col items-start  p-2  md:hidden">
           <p className='text-base'>Theme :</p> 
           <div className="fx flex-col  justify-center px-4 transition-all duration-500   py-2 rounded-full  gap-4 text-gray-800 text-xl dark:text-gray-400 cursor-pointer      sm:top-6   sm:rounded-full   ">
        <span onClick={() => handletheme('light')} className={theme === 'light' ? buttonStyles : ''}>
          Light
        </span>
        <span onClick={() => handletheme('dark')} className={theme === 'dark' ? buttonStyles : ''}>
          Dark
        </span>
      </div>

         </div>
       </div>
        )}
      </div>
    </motion.div>
  );
}
