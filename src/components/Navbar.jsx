import React from 'react'
import assets from '../assets/assets'
import { useState } from 'react'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion, useScroll, useMotionValueEvent } from "framer-motion";


const Navbar = ({ theme, setTheme }) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState("up");

    useMotionValueEvent(scrollY, "change", (current) => {
        const prev = scrollY.getPrevious() ?? 0;
        const diff = current - prev;

        if (current < 50) {
            setScrollDirection("up"); // always show at top
            return;
        }

        if (Math.abs(diff) < 1) return;

        setScrollDirection(diff > 0 ? "down" : "up");
    });

    return (
        <motion.div
            initial={false}
            animate={{ y: scrollDirection === "down" ? -130 : 0 }}
            transition={{ duration: 0.3 }}
            // initial={{ opacity: 0, y: -50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.9, ease: 'easeOut' }}
            className='dark:bg-black fixed bg-white top-0 w-full  z-1'>


            <div className=" dark:text-white  pt-3 container mx-auto flex flex-wrap p-5 pb-1 pt-1 flex-col md:flex-row items-center justify-between">
                <a className=" max-md:w-[90vw] max-md:justify-between flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <img src={theme === 'dark' ? assets.logo1_dark : assets.logo1} className='round-7xl w-32 sm:w-40' alt='' />
                    <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSideBarOpen(true)} className='w-8 md:hidden ml-auto' />.
                    <span className='md:hidden'>
                        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                    </span>

                </a>

                {/* <nav className="md:ml-auto md:mr-auto flex  items-center text-base justify-center transition-all flex-col md:flex-row"> */}
                {/* sidebar */}
                <nav className={` ${!sideBarOpen ? 'max-md:w-0 max-md:p-0  right-10 overflow-hidden' : 'max-md:h-screen max-md:w-50'}   max-md:h-screen  max-md:fixed max-md:right-0 max-md:top-0 max-md:items-center  max-md:gap-6 max-md:flex-col flex-row pt-1 pb-1 p-8  md:ml-auto md:mr-auto flex  md:items-center text-base md:justify-center transition-all max-md:bg-purple-50 max-md:hover:text-bold `}>
                   
               

                    <img src={assets.close_icon} alt="" className='invert w-4   md:hidden ml-auto  mt-4 mr-4 p-0 z-1 ' onClick={() => { setSideBarOpen(false) }} />
                    <a onClick={() => setSideBarOpen(false)} href='#' className="mr-5 sm:hover:border-b">Home</a>
                    <a onClick={() => setSideBarOpen(false)} href='#services' className="mr-5 sm:hover:border-b">Services</a>
                    <a onClick={() => setSideBarOpen(false)} href='#ourwork' className="mr-5 sm:hover:border-b">Our Work</a>
                    <a onClick={() => setSideBarOpen(false)} href='#ourteam' className="mr-5 sm:hover:border-b">Our Team</a>
                    <a onClick={() => setSideBarOpen(false)} href='#contactus' className="mr-5 sm:hover:border-b">Contact Us</a>
                    <button className="inline-flex text-white items-center bg-linear-to-br from-[rgb(198,4,237)] to-[#8fdff5] border-0 py-1 px-3 focus:outline-none hover:bg-linear-to-r hover:from-[#930fcb] hover:to-[rgb(77,171,243)]  rounded text-base  mt-0 max-md:mr-20 ml-auto z-1">Whatsapp Community
                        <svg fill='#7a7a7a' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                   
                </nav>
                <span className='max-md:hidden'>

                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                </span>
                
            </div>
        </motion.div>




    )
}

export default Navbar
