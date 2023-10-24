'use client'
import { useEffect, useState } from 'react'; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Page({updatepost}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      controls.start("visible");
      updatepost('project')
    } 
  }, [controls, inView]);
const keyrae=['/keyrae/Capture1.png','/keyrae/Capture2.png','/keyrae/Capture3.png','/keyrae/Capture4.png',]
const [index,setindex]=useState(0)

  return (
    <div className='fx flex-col items-center justify-center my-9' id='project'>
      <h1>My projects</h1>
       <motion.div
    
        initial="hidden"
        animate={controls}
        whileTap={{scale :0.9}}
        transition={{ duration: 0.5 }}
        variants={{visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 }}}

      whileHover={{scale:1.02}}
      className="card  cursor-pointer">
                <div className=" lisr gap-7">
                     <div className="logo text-5xl font-bold">
                        KEYRAE
                     </div>

                     <div className="layout">
                           {keyrae.map((element, i) => (
                           <span key={i} onClick={() => setindex(i)}>
                           --
                           </span>
                           ))}
                  </div>
                     <p className='text-xl'>KEYRAE is a platform for publishing offers for selling and renting homes and shops, facilitating communication between people interested in the offers</p>
                   <div className="fx justify-start gap-2 bg-white p-4 px-5 rounded-xl diva ">
                           <p className='font-bold'>Visit website</p>
                           <svg fill="currentColor" className='w-8' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path d="M17.707,17.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L16.293,7.707a1,1,0,0,1,1.414-1.414l5,5a1,1,0,0,1,0,1.414Z">
                              </path></g></svg>
                   </div>
                     
                </div>

                
                    <img src={keyrae[index]} className='imgs duration-200 cursor-pointer transition-all '  alt="" />
                
        </motion.div>

        <motion.div
         ref={ref}
        initial="hidden"
        animate={controls}
        whileTap={{scale :0.9}}
        transition={{ duration: 0.5 }}
        variants={{visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 }}}

      whileHover={{scale:1.02}} className="card cursor-pointer  ">
                <div className=" lisr gap-7">
                     <div className="logo text-5xl font-bold">
                        KEYRAE
                     </div>

                     <div className="layou">
                        -- -- -- --
                     </div>
                     <p className='text-xl'>KEYRAE is a platform for publishing offers for selling and renting homes and shops, facilitating communication between people interested in the offers</p>
                   <div className="fx justify-start gap-2 bg-white p-4 px-5 rounded-xl diva ">
                           <p className='font-bold'>Visit website</p>
                           <svg fill="currentColor" className='w-8' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path d="M17.707,17.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L16.293,7.707a1,1,0,0,1,1.414-1.414l5,5a1,1,0,0,1,0,1.414Z">
                              </path></g></svg>
                   </div>
                     
                </div>

                
                    <img src="/Capture.png" className='imgs'  alt="" />
                
        </motion.div>

        <motion.div
       
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
        variants={{visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 }}}
 className="card cursor-not-allowed  ">
                <div className=" lisr gap-7">
                     <div className="logo text-5xl font-bold">
                        KEYRAE
                     </div>

                     <div className="layou">
                        -- -- -- --
                     </div>
                     <p className='text-xl'>KEYRAE is a platform for publishing offers for selling and renting homes and shops, facilitating communication between people interested in the offers</p>
                   <div className="fx justify-start gap-2 bg-white p-4 px-5 rounded-xl diva ">
                           <p className='font-bold'>Visit website</p>
                           <svg fill="currentColor" className='w-8' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"><path d="M17.707,17.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L16.293,7.707a1,1,0,0,1,1.414-1.414l5,5a1,1,0,0,1,0,1.414Z">
                              </path></g></svg>
                   </div>
                     
                </div>

                
                    <img src="/Capture.png" className='imgs'  alt="" />
                
        </motion.div>

     
      
    </div>
        
        
        
   
  )
}
