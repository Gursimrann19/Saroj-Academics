import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }} className='dark:text-white  max-md:w-[60vw] max-md:ml-auto max-md:mr-auto flex flex-col place-items-center justify-center'>

            <div className=' lg:h-[10vh] max-lg:h-[20vh]  w-full  top-0'>hi</div>
            <div id='hero' className=' flex mt-23 pl-6 pr-6 pt-2 pb-2 ml-auto mr-auto justify-center gap-10 text-gray-600 items-center dark:text-white text-sm border-gray-400 border-2 rounded-full w-fit  max-md:p-2 max-md:gap-2 max-md:w-[60vw] max-sm:w-[70vw] max-md:m-0'>
                <img src={assets.group_profile} className='rounded-full max-sm:hidden h-10 max-md:w-20' alt="" />
                <p className='text-center'>Trusted by 5k+ PSEB Board Students </p>
            </div>


            <div className='flex flex-col max-md:p-2 max-md:text-lg md:text-3xl md:w-fit ml-auto mr-auto justify-center place-items-center text-center max-lg:w-[60vw] max-md:ml-auto max-md:mr-auto max-md:place-items-center max-md:justify-start  '>


                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }} className=' pt-10 pb-10 md:w-[50vw] max-lg:text-md max-md:p-2 ml-auto mr-auto' >&quot;Democratising Education so it reaches every house of    <span className='max-md:p-2 max-md:w-[80vw]  ml-auto mr-auto bg-linear-to-r from-[#5044E5] to-[#6fa0ce] bg-clip-text text-transparent'>Punjab</span>&quot; </motion.h1>


                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }} className='pt-2 gap-3 max-md:pt-2 max-md:w-[80vw] max-md:justify-center ' > ਤਾਂ ਜੋ ਸਿੱਖਿਆ&nbsp; <span className='bg-linear-to-r from-[#0c0485] to-[#056fd3] bg-clip-text text-transparent max-lg:text-2xl pr-0 pl-0 p-2'>ਪੰਜਾਬ&nbsp; </span>ਦੇ ਘਰ-ਘਰ ਪਹੁੰਚੇ।</motion.h3>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.10 }}
                viewport={{ once: true }} className='dark:text-white    bg-linear-to-br from-[rgb(198,4,237)] to-[#8fdff5]  text-white ml-auto mr-auto justify-center place-items-center text-center rounded-full mt-8  p-4 pt-0  max-md:hidden'>
                <p className='mt-1 m-1 w-[50vw] text-md max-lg:text-md max-lg:w-[50vw]'>Empowering young minds with the right resources and heartfelt guidance.</p>
                <p className='mt-1 m-1 w-[50vw] text-md max-lg:text-md max-lg:w-[50vw]' >ਅੱਜ ਹੀ ਆਪਣੇ ਬੱਚੇ ਦੇ ਸੁਪਨੇ ਸਾਕਾਰ ਕਰੋ</p>
            </motion.div>
            <div className='relative'>
                <motion.img
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    src={assets.hero_img} className=' rounded-4xl ml-auto mr-auto mt-10 w-full max-w-2xl max-md:max-w-[60vw]' alt="" />
                <div className='max-md:w-screen'>

                    <img className='md:hidden absolute -top-40 -z-1 opacity-27 mask-[linear-gradient(to_right,transparent,black,black,transparent)]' src={assets.bgImage1} alt="" />
                    <img className='md:hidden absolute top-100 -z-1 opacity-27 mask-[linear-gradient(to_right,transparent,black,black,transparent)]' src={assets.bgImage1} alt="" />
                    <img className='md:hidden absolute top-300 -z-1 opacity-27 mask-[linear-gradient(to_right,transparent,black,black,transparent)]' src={assets.bgImage1} alt="" />
                    <img className='md:hidden absolute top-480 -z-1 opacity-77 mask-[linear-gradient(to_right,transparent,black,black,transparent)]' src={assets.bgImage2} alt="" />
                </div>
                <div className='max-md:hidden'>


                    <img src={assets.bgImage1} className='dark:hidden opacity-25 -z-1 -top-76 absolute   max-md:absolute mask-[linear-gradient(to_right,transparent,black,black,transparent)]' alt="" />
                    <img src={assets.bgImage1} className='dark:hidden opacity-25 -z-1 top-50 absolute   max-md:absolute mask-[linear-gradient(to_right,transparent,black,black,transparent)]' alt="" />
         
                    <img src={assets.bgImage2} className='dark:hidden opacity-65 -z-1 top-200 absolute   max-md:absolute mask-[linear-gradient(to_right,transparent,black,black,transparent)]' alt="" />
                    <img src={assets.bgImage2} className='dark:hidden opacity-65 -z-1 top-300 absolute   max-md:absolute mask-[linear-gradient(to_right,transparent,black,black,transparent)]' alt="" />
                    <img src={assets.bgImage1} className='dark:hidden opacity-25 -z-1 top-400 absolute   max-md:absolute mask-[linear-gradient(to_right,transparent,black,black,transparent)]' alt="" />
                    <img src={assets.bgImage2} className='dark:hidden opacity-65 -z-1 top-600 absolute   max-md:absolute mask-[linear-gradient(to_right,transparent,black,black,transparent)]' alt="" />
               

                </div>


             

            </div>
        </motion.div>
    )
}

export default Hero
