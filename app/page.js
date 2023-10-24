'use client'
import { useEffect,useState } from "react"
import Navbar from "./components/navbar"
import Homei from "./components/home"
import Standout from "./components/standout"
import Skills from "./components/skills"
import Projects from './components/projects'
import Footer from "./components/footer"
export default function Home() {
  const [activated, setActivated] = useState('home');
  const updatepost = (number) => {
    setActivated(number);
  };
  return (
    <>
  <div className=" md:px-24 sm:px-9 px-3">
    <Navbar activated={activated} updatepost={updatepost}/>
 <Homei  updatepost={updatepost} />
 <Standout updatepost={updatepost}/>
 <Skills />
 <Projects updatepost={updatepost}/>

 </div> <Footer />
 </>
  )
}
