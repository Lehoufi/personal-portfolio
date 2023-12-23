'use client'
import React from 'react'
import { useState } from 'react';
import {  motion } from 'framer-motion';
function contact({primaryColor}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [noti, setnoti] = useState('');

    const send = async (e) => {
    e.preventDefault();
    setnoti('sent succesifully')
      setName('');
      setEmail('');
      setMessage('');
   
  };
      return (
        <>
      {
        noti != '' &&(
             <motion.div
             initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}

             className='fixed top-16 right-3'>
  <div role="alert" class="rounded-xl border border-gray-100 bg-white p-4 dark:bg-slate-900 ">
    <div class="flex items-start gap-4">
      <span class="text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
  
      <div class="flex-1">
        <strong class="block font-medium text-gray-900 dark:text-gray-200"> Email sent </strong>
  
        <p class="mt-1 text-sm text-gray-700 dark:text-gray-400">Your Email changes have been sent.</p>
      </div>
  
      <button onClick={()=>setnoti('')} class="text-gray-500 transition hover:text-gray-600">
        <span class="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</motion.div>
        )
      }  
       
         <motion.section
    className="fx flex-col items-center justify-center my-9 max-md:my-4" 
     
  >
<div className='text-8xl max-md:text-5xl max-md:m-0 m-4 font-black text-center transition-all duration-400' style={{ color: primaryColor }} id="contact">
        Lets Talk
</div>
<div class="flex justify-between m-6 text-lg gap-7 max-sm:text-base max-sm:m-1 max-sm:gap-3">
            
            <div class="bg-white dark:bg-gray-700 p-4 max-md:p-2  rounded-lg shadow-md fx gap-3 cursor-pointer">
            <svg className='w-8 hidden sm:block ' style={{color:primaryColor}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <g id="style=fill"> <g id="email"> <path id="SubtracurrentColort" fill-rule="evenodd" currentclip-rule="evenodd" d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z" fill="currentColor"></path> </g> </g> </g></svg>
                <p class="text-gray-600 dark:text-gray-400">lehoufi.said@gmail.com</p>
            </div>

            
            <div class="bg-white dark:bg-gray-700 p-4 max-md:p-2  rounded-lg shadow-md fx gap-3 cursor-pointer">
            <svg className='w-7 hidden sm:block ' style={{color:primaryColor}} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g><g id="SVGRepo_icurrentColoronCarrier"> <title>whatsapp [#7f1f1f]</title> <descurrentc>Created with SketcurrentColorh.</descurrentc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="currentColor"> <g id="icurrentColorons" transform="translate(56.000000, 160.000000)"> <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#7f1f1f]"> </path> </g> </g> </g> </g></svg>
                <p class="text-gray-600 dark:text-gray-400">+212 770378943</p>
            </div>
        </div>
<div class="bg-[#eceff1] dark:bg-[#161616cf] w-[60%] max-md:w-[90%] max-sm:w-[98%] rounded-lg ">
    <div class="relative px-4 py-6  overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
 
    <form
  className="mt-6"
  onSubmit={send}
>
            <div class="flex flex-col space-y-4">
                
                <input type="text" id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="rounded-lg  border border-gray-300 dark:border-gray-500 py-2 px-4 dark:bg-gray-700 w-full dark:text-white bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" placeholder="Your Name" />
                <input 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                type="email" id="email" class="rounded-lg border border-gray-300 dark:border-gray-500 py-2 px-4 dark:bg-gray-700 w-full dark:text-white bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" placeholder="Your Email" required/>
                <textarea 
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                id="message" rows={5} class="rounded-lg border border-gray-300 dark:border-gray-500 py-2 px-4 dark:bg-gray-700 w-full dark:text-white bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" placeholder="Your Message" required></textarea>
                <button style={{backgroundColor:primaryColor}} class="px-4 py-2 text-base font-semibold text-white  rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-purple-200" type="submit">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>




  </motion.section>
        </>
   
  )
}

export default contact