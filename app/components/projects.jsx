import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Project from './project';
export default function Page({ updatepost,primaryColor }) {
  const [ref, inView] = useInView();

   
  useEffect(() => {
    if (inView) {
        updatepost('project')
    } 
  }, [inView, updatepost]);

  const projects=[
    ['Perfumes','Elegance meets innovation in our lifestyle brand, offering authentic perfumes sourced directly from authorized distributors for the highest quality.','https://perfume-ruby.vercel.app/','/perfume.png'],             
    ['Keyrae','KEYRAE is a platform for publishing offers for selling and renting homes and shops, facilitating communication between people interested in the offers','https://www.keyrae.online/','/keyrae2.png'],
                  ['Ip Tv','website presents a comprehensive showcase of our premium streaming services, offering clients a detailed insight into our diverse range of IPTV packages, with clear pricing structures and an array of channel options','https://hamza-cast.000webhostapp.com/','/hamza.png'],
                  ['Keyrae Mobile','KEYRAE is a platform for publishing offers for selling and renting homes and shops, facilitating communication between people interested in the offers','#','/mob.png'],
                ]
  const previews = ['/keyrae2.png', '/hamza.png', '/mob.png'];

  return (
    <motion.section
      className="fx flex-col items-center justify-center my-9 max-md:my-4"  
    >
      <h1 className={ `text-6xl text-center mt-10 font-semibold  transition-all duration-400 `} style={{ color: primaryColor }} id="project"> projects</h1>
  
      {
  projects.map((projet,index) => (
    <Project
      key={index}  // Make sure to add a unique key for each project
      title={projet[0]}
      description={projet[1]}
      href={projet[2]}
      image={projet[3]}
      className={projet[0]=='Keyrae Mobile' ? 'cursor-not-allowed' : 'cursor-pointer'}
    />
  ))
}
  
  
    </motion.section>
  );
}
