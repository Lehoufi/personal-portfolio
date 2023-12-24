'use client'
import { useEffect,useState } from "react"
import Navbar from "./components/navbar"
import Homei from "./components/home"
import Skills from "./components/skills"
import Projects from './components/projects'
import Contact from "./components/contact"
import Footer from "./components/footer"
import Loading from './Loading'
export default function Home() {
  const [activated, setActivated] = useState('home');
  const updatepost = (number) => {
    setActivated(number);
  };
  const [primaryColor, setPrimaryColor] = useState('#7C3AED');
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    function handleLoad() {
      setIsLoading(false); // Set loading to false when page is loaded
    }
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
    
  <div className="  she font-sans  lf:px-[10rem] px-9 max-md:px-3  transition-all duration-500 dark:bg-[#000000fc]">
  <Navbar activated={activated} updatepost={updatepost} primaryColor={primaryColor} setPrimaryColor={setPrimaryColor}/>
 <Homei  updatepost={updatepost} primaryColor={primaryColor} />
 <Skills updatepost={updatepost} primaryColor={primaryColor} />
 <Projects updatepost={updatepost} primaryColor={primaryColor}/>
 <Contact updatepost={updatepost} primaryColor={primaryColor}/>
 </div>
 <Footer primaryColor={primaryColor}/>
 </>
  )
}
