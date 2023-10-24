'use client'
import { useEffect, useState } from 'react'; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function page() {
  const controls = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } 
  }, [controls, inView]);
  return (
<div className=' my-7 mx-5 bag'>
    <ul className='grid gap-4 mx-auto max-w-screen-xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
         <motion.div
       ref={ref} 
         initial="hidden"
         animate={controls}
         transition={{ duration: 1 }}
         variants={{visible: { opacity: 1, x: 0 },
         hidden: { opacity: 0, x: -100 }}} className='p-4 fx flex-col rounded-lg gap-4  border-b-2 border-blue-400  bg-teal-300 text-center text-gray-700'>
            <img src="/next.png" className='w-32' alt="" />
            <p className='text-2xl font-bold'>Next js</p>
             </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: -100 }}} className='p-4 fx flex-col rounded-lg gap-4  border-b-2 border-red-400 bg-teal-300 text-center text-gray-700'>
            <svg viewBox="0 0 32 32" className='w-20' xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" 
            fill="#44a8b3"></path></g></svg>
            <p className='text-2xl font-bold'>Tailwind</p> </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: -100 }}} className='p-4 fx flex-col rounded-lg gap-4  border-b-2 border-red-400 bg-teal-300 text-center text-gray-700'>
            <svg viewBox="0 0 24 24" className='w-20' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" 
            fill="#7811F7"></path> </g></svg>           
             <p className='text-2xl font-bold'>Bootstrap</p> </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1,delay:0.5 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: 100 }}} className='p-4 fx flex-col rounded-lg gap-4  border-b-2 border-blue-400 bg-teal-300 text-center text-gray-700'>
            <svg viewBox="0 0 256 256" className='w-20' version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E"> </path> <path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000"> </path> <path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" 
            fill="#000000"> </path> </g> </g></svg>           
             <p className='text-2xl font-bold'>Javascript</p> </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1,delay:0.5 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: 100 }}} className='p-4 fx flex-col rounded-lg gap-4 bg-teal-300   border-b-2 border-red-400 text-center text-gray-700'>
            <svg viewBox="0 0 32 32" className='w-20' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" 
            fill="white"></path> </g></svg>
            <p className='text-2xl font-bold'>Html</p> </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1,delay:0.5 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: 100 }}} className='p-4 fx flex-col rounded-lg gap-4 bg-teal-300 text-center  border-b-2 border-red-400 text-gray-700'>
            <svg viewBox="0 0 32 32" fill="none" className='w-20' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" 
            fill="white"></path> </g></svg>
            <p className='text-2xl font-bold'>Css</p> </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1,delay:1 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: -100 }}} className='p-4 fx flex-col rounded-lg gap-4 bg-teal-300 text-center  border-b-2 border-green-400 text-gray-700'>
            <img src="/mongo.png" className='w-44' alt="" />
            <p className='text-2xl font-bold'>MongooDb</p> </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1,delay:1 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: -100 }}} className='p-4 fx flex-col rounded-lg gap-4 bg-teal-300 text-center  border-b-2 border-green-400 text-gray-700'>
            <img src="/mysql.png" className='w-32' alt="" />
            <p className='text-2xl font-bold'>Mysql</p> </motion.div>
             <motion.div
       
       initial="hidden"
       animate={controls}
       transition={{ duration: 1,delay:1 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: -100 }}} className='p-4 fx flex-col rounded-lg gap-2 bg-teal-300 text-center  border-b-2 border-green-400 text-gray-700'>
            <img src="/firebase.png" className='w-52' alt="" />
            <p className='text-2xl font-bold'>FireBase</p> </motion.div>
        </ul>
    
    </div>
  )
}
