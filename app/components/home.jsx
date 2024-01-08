'use client'
import React from 'react';
import { useState,useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Page({ updatepost,primaryColor }) {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      updatepost('home');
    }
  }, [inView, updatepost]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }} className='fx  justify-center max-md:mb-[-90px] max-md:mt-[-100px]' id='home'>
      <div  className="home mt-[100px] text-gray-900 dark:text-gray-200">
        <div  className='text-7xl max-md:text-5xl font-black text-center'>
          <p >hello .🌍 , I&apos;m <span style={{ color: primaryColor }} className='transition-all duration-400'>Lehoufi</span></p>
        </div>
        <div className="fx gap-2 text-[#5e5e63] dark:text-[#d1d1d1]  ">
        <svg viewBox="0 0 24 24" className='w-6 max-md:w-5' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" strokeLinejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <path fillRule="evenodd"  d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z" fill="currentColor"></path> <path fillRule="evenodd"  d="M11.0901 22.5958C11.2059 22.6753 11.2981 22.7366 11.3626 22.7788L11.4687 22.8472C11.7933 23.0504 12.2061 23.0508 12.5307 22.8476L12.6375 22.7788C12.7019 22.7366 12.7941 22.6753 12.9099 22.5958C13.1415 22.4367 13.4685 22.2041 13.8591 21.9041C14.6386 21.3054 15.6801 20.4322 16.7247 19.3336C18.7857 17.1661 21 13.9725 21 10.1818C21 7.75381 20.0571 5.42084 18.3719 3.69728C16.6859 1.97296 14.3943 1 12 1C9.60571 1 7.31415 1.97296 5.62814 3.69728C3.94288 5.42084 3 7.75381 3 10.1818C3 13.9725 5.21434 17.1661 7.27531 19.3336C8.31993 20.4322 9.36136 21.3054 10.1409 21.9041C10.5315 22.2041 10.8585 22.4367 11.0901 22.5958ZM12 3C10.1508 3 8.37273 3.75107 7.05815 5.09552C5.74283 6.44073 5 8.26992 5 10.1818C5 13.2007 6.78566 15.9162 8.72469 17.9554C9.68007 18.9602 10.6386 19.7646 11.3591 20.3179C11.6046 20.5065 11.8215 20.6651 12 20.7918C12.1785 20.6651 12.3954 20.5065 12.6409 20.3179C13.3614 19.7646 14.3199 18.9602 15.2753 17.9554C17.2143 15.9162 19 13.2007 19 10.1818C19 8.26992 18.2572 6.44073 16.9418 5.09552C15.6273 3.75107 13.8492 3 12 3Z" fill="currentColor"></path> </g></svg>

          <p className='text-xl font-bold max-md:text-lg  text-[#5e5e63] dark:text-[#d1d1d1]  '>Morocco</p>
        </div>
        <p className='font-bold max-w-[90%] max-md:max-w[99%] max-sm:text-base max-md:max-w-full md:max-w-[600px] text-center leading-loose text-[#5e5e63] dark:text-[#d1d1d1]  '>
          I&apos;m a student with a diploma in Information System Development, and my ambition lies in the realm of web design. I&apos;m passionate about creating visually appealing and user-friendly websites, and I&apos;m excited to explore the creative possibilities in this field 
        </p>
      </div>

      <div className="fx flex-col gap-4 max-md:hidden ">
       
                           <Link target='_blank' href="https://web.facebook.com/seen.oo.129">   <svg viewBox="0 0 16 16" className='w-9 cursor-pointer relative' xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></g></svg></Link>
                                <Link target='_blank' href="https://www.instagram.com/said_100o/"><svg viewBox="0 0 32 32" className='w-9 cursor-pointer relative' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stopColor="#B13589"></stop> <stop offset="0.79309" stopColor="#C62F94"></stop> <stop offset="1" stopColor="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stopColor="#E0E8B7"></stop> <stop offset="0.444662" stopColor="#FB8A2E"></stop> <stop offset="0.71474" stopColor="#E2425C"></stop> <stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stopColor="#406ADC"></stop> <stop offset="0.467799" stopColor="#6A45BE"></stop> <stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop> </radialGradient> </defs> </g></svg></Link>
                               <Link target='_blank' href="https://github.com/Lehoufi"><svg className='w-9 cursor-pointer relative text-black dark:text-white' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg></Link>
   
      </div>
    </motion.div>
  );
}
