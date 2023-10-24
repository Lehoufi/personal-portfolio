'use client'
import { useEffect, useState } from 'react'; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function page({updatepost}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      controls.start("visible");
      updatepost('skills');
    } 
  }, [controls, inView]);
  return (
    <div className='flex flex-col gap-10 ' id='skills'>
        <div className='fx flex-col gap-8 text-5xl mb-7 font-black'> 
            <h1>what mekes me stand out</h1>
            <p className='text-xl font-semibold text-[#5e5e63]  '>i provide website design and develop  for evry stage of your project

            </p>
        </div>
          <div className="fx justify-center md:gap-28 sm:gap-3 gap-1 ">
          <motion.div
   
       initial="hidden"
       animate={controls}
       transition={{ duration: 1 }}
       variants={{visible: { opacity: 1, x: 0 },
       hidden: { opacity: 0, x: 100 }}}
       className="fx flex-col gap-5  items-center">
            <div class="bigone p-5 rounded-full shad  bg-white ">
                <div class="fx smallone p-6 rounded-full bg-red-400 inline-block">
               <svg viewBox="0 0 1024 1024" className='w-16 text-white' class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M689.1 462.3c10.5 10.5 24.6 16.2 39.5 16.2s29-5.8 39.5-16.2l116.1-115.4c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3L761 145.9c-21.1-20.9-57.9-20.9-79 0L566 261.3c-10.5 10.5-16.3 24.4-16.3 39.3s5.8 28.8 16.3 39.3l123.1 122.4z m-89.3-167.4l116.1-115.4c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3L850.3 302c2 2 2.3 4.4 2.3 5.6 0 1.2-0.3 3.6-2.3 5.6l-116 115.4c-2 2-4.4 2.3-5.6 2.3-1.2 0-3.6-0.3-5.6-2.3L599.8 306.2c-2-2-2.3-4.4-2.3-5.6s0.3-3.7 2.3-5.7zM316.1 588.4c-21.1-20.9-58-20.9-79 0l-15.3 15.2c-15.3 15.3-31.5 42.4-37.5 63.1l-51.1 174.7c-4.3 14.6-2.4 28.2 5.3 38.4 7 9.3 18.2 14.6 30.7 14.6 5 0 10.3-0.8 15.6-2.5l182.4-56.1c20.6-6.3 47.7-22.6 62.9-37.7l9-8.9c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3l-123-122.2z m89.2 167.2l-9 8.9c-9.6 9.6-30.2 21.9-43.2 25.9L244 823.9l-41.3-49.5 27.6-94.3c3.8-12.9 15.9-33.3 25.4-42.7l15.3-15.2c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3l123 122.3c2 2 2.3 4.4 2.3 5.6 0.1 1.2-0.2 3.6-2.2 5.5zM324 145.9c-21.1-20.9-57.9-20.9-79 0L121.9 268.3c-10.5 10.5-16.3 24.4-16.3 39.3 0 14.9 5.8 28.8 16.3 39.3l560.2 557c10.5 10.5 24.6 16.2 39.5 16.2 14.9 0 29-5.8 39.5-16.2l123.2-122.5c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3L324 145.9z m526.3 601.8L727.2 870.2c-2 2-4.4 2.3-5.6 2.3-1.2 0-3.6-0.3-5.6-2.3l-560.2-557c-2-2-2.3-4.4-2.3-5.6 0-1.2 0.3-3.6 2.3-5.6l123.1-122.5c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3l16.7 16.6-57.1 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 27.8 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.8 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.2-2.3 16.9-7l57.2-56.9 27.9 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.9 27.7-57.2 56.9c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 27.9 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.8 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.2-2.3 16.9-7l57.2-56.9 27.8 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.9 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 15.9 15.9c2 2 2.3 4.4 2.3 5.6s0.2 3.2-1.8 5.2z"
                fill="currentColor"></path></g></svg>
                </div>
            </div>
              <p className='font-bold'>FrontEnd</p>
        </motion.div>
          
        <motion.div
     
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      variants={{visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: -50 }}}
      className="fx flex-col gap-5  items-center mb-2">
            <div class="bigone p-5 rounded-full shad  bg-white ">
                <div class="fx smallone p-8 rounded-full bg-blue-400 inline-block">
                <svg viewBox="0 0 24 24" className='w-16 text-white' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <path d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecurrentcap="round"></path> <path d="M13.2942 7.17041L12.0001 12L10.706 16.8297" stroke="currentColor" stroke-width="1.5" stroke-linecurrentcap="round"></path> <path d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15" stroke="currentColor" stroke-width="1.5" stroke-linecurrentcap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" stroke-width="1.5" stroke-linecurrentcap="round"></path>
                 </g></svg>
                </div>
            </div>
              <p  ref={ref}  className='font-bold'>Full-Stack</p>
        </motion.div>
        <motion.div
      
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
      variants={{visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 }}} className="fx flex-col gap-5  items-center">
            <div class="bigone p-5 rounded-full shad  bg-white ">
                <div class="fx smallone p-6 rounded-full bg-green-400 inline-block">
                <svg viewBox="0 0 24 24" className='w-16 text-white' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 6V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" stroke="currentColor" stroke-width="1.5"></path> <path opacity="0.5" d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" stroke="currentColor" stroke-width="1.5"></path> <path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18" 
                stroke="currentColor" stroke-width="1.5"></path> </g></svg>
                </div>
            </div>
              <p  className='font-bold'>Backend</p>
        </motion.div>

    </div>

    <div className="fx flex-col gap-4 base" >
        <p>Design and develop an interactive and engaging web user interface  and user experience  </p>
        <div className="w-44 pt-6 md:pt-0">
                <a 
    class="group relative inline-flex items-center overflow-hidden rounded bg-green-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
    href="/"
  >
    <span class="absolute -start-full transition-all group-hover:start-4">
     <svg viewBox="0 0 24 24"  class="h-5 w-5 rtl:rotate-180" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tra#fffffferCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_i#ffffffonCarrier"> <path fill-rule="evenodd" currentclip-rule="evenodd" d="M17.4145 14.3822C17.1173 14.2334 15.6564 13.5147 15.384 13.4153C15.1117 13.3162 14.9136 13.2667 14.7154 13.5641C14.5173 13.8615 13.9478 14.5309 13.7745 14.7293C13.6012 14.9275 13.4278 14.9524 13.1307 14.8036C12.8335 14.6549 11.876 14.3411 10.7411 13.3287C9.85769 12.5407 9.26129 11.5677 9.08799 11.2702C8.91461 10.9727 9.06943 10.8119 9.21822 10.6637C9.35195 10.5306 9.51546 10.3166 9.66399 10.1431C9.81257 9.96961 9.86209 9.84558 9.96114 9.6474C10.0602 9.44899 10.0107 9.27553 9.93634 9.12682C9.86209 8.97808 9.26779 7.51537 9.02016 6.92034C8.77895 6.34096 8.53397 6.41944 8.35157 6.41024C8.17844 6.40165 7.98013 6.39981 7.78207 6.39981C7.58397 6.39981 7.26201 6.47418 6.98958 6.77159C6.71727 7.06908 5.94959 7.78806 5.94959 9.25059C5.94959 10.7133 7.01434 12.1263 7.16296 12.3246C7.31158 12.523 9.25829 15.5244 12.2393 16.8116C12.9482 17.1178 13.5017 17.3006 13.9333 17.4375C14.6451 17.6637 15.2929 17.6318 15.805 17.5552C16.3759 17.47 17.5631 16.8364 17.8107 16.1424C18.0583 15.4481 18.0583 14.8532 17.984 14.7293C17.9097 14.6053 17.7116 14.5309 17.4145 14.3822ZM11.9925 21.7853H11.9886C10.2148 21.7846 8.47517 21.3081 6.9575 20.4075L6.59654 20.1932L2.85541 21.1746L3.85395 17.527L3.61899 17.153C2.62951 15.5792 2.10688 13.7603 2.10765 11.8925C2.10983 6.44257 6.54415 2.0086 11.9965 2.0086C14.6367 2.00954 17.1185 3.03905 18.9849 4.9075C20.8511 6.77582 21.8782 9.25932 21.8772 11.9005C21.875 17.3509 17.4408 21.7853 11.9925 21.7853ZM20.4052 3.48773C18.1599 1.2398 15.1739 0.00128304 11.9925 0C5.43736 0 0.102301 5.33471 0.0996495 11.8918C0.0987941 13.9879 0.646396 16.0337 1.68711 17.8373L0 24L6.30443 22.3462C8.04154 23.2937 9.99728 23.7931 11.9877 23.7937H11.9926C18.547 23.7937 23.8825 18.4585 23.8852 11.9013C23.8864 8.72361 22.6505 5.73566 20.4052 3.48777" 
     fill="#ffffff"></path> </g></svg>
    </span>
  
    <span  class="text-sm font-medium transition-all group-hover:ms-4">
      Contact me
    </span>
  </a>
  
                </div>
    </div>
    </div>
  
  )
}
