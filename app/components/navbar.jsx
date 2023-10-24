'use client'
import { useEffect, useState } from 'react'; 
import { motion } from 'framer-motion';

export default function navbar({activated,updatepost}) {
  const [theme,settheme]=useState('light');


 const handletheme= ()=>{
      theme==='light' ?settheme('dark') :settheme('light');
 }
 useEffect(() => {
  const html = document.documentElement;

  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}, [theme]);
const buttonStyles = 'px-2 py-1 bg-slate-900 rounded-full text-white';
  return (
    <div
     className="fx sticky justify-evenly gap-5 top-0 z-40  p-2">
      <motion.div
     initial={{ opacity: 0, y: -25,scale :0.8 }}
     animate={{ opacity: 1, y: 0, scale: 1 }} // Add the scale animation here
     exit={{ opacity: 0, scale: 0.8 }}
     whileTap={{ scale: 0.9 }}
     transition={{ duration: 0.3 }}
    className='fx justify-center px-4 py-2 rounded-full bgnav gap-4 text-gray-800 text-xl cursor-pointer'>
        <a href="#home" onClick={()=>updatepost('home')} className={activated =='home'?buttonStyles:''}>Home</a>
        <a href="#skills" onClick={()=>updatepost('skills')} className={activated =='skills'?buttonStyles:''}>Skills</a>
        <a href="#project" onClick={()=>updatepost('project')} className={activated =='project'?buttonStyles:''}>projects</a>
      </motion.div>
     
   </div>
  )
}
