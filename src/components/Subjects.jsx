import React from 'react'
// import { subjects } from '../assets/assets'
// import { language_subjects } from '../assets/assets'
import { motion } from "motion/react"
const TrustUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='max-md:mt-10 mt-6 m-4 flex flex-col align-middle place-items-center dark:text-white max-md:m-2  '>
      <h1 className='text-2xl mb-4'>
        Subjects Offered
      </h1>
      <div className='max-md:text-sm max-md:gap-0 flex text-2xl font-bold gap-5 w-[60vw] flex-wrap justify-center dark:text-white bg-linear-to-br from-[#d134d3] to-[#1c8ef2] bg-clip-text text-transparent'>

        <span>English |</span>
        <span>Social Studies |</span>
        <span>Maths |</span>
        <span>Science </span>

      </div>
      <div className='max-md:text-sm max-md:gap-0 p-2 flex text-2xl font-bold gap-5 w-[60vw] flex-wrap justify-center dark:text-white bg-linear-to-br from-[#d134d3] to-[#1c8ef2] bg-clip-text text-transparent'>

        <span>ਪੰਜਾਬੀ |</span>
        <span>हिन्दी</span>
      </div>

      {/* <div className='flex flex-row gap-10 p-2  max-md:gap-3 max-md:w-10 justify-center bg-linear-to-tr from-[] to-[#83b6e4]'>
        {subjects.map((logo, index) => (<img key={index} src={logo} className=' flex h-9 justify-between max-md:h-2 dark:drop-shadow-2xl' alt="" />))}

      </div> */}
    </motion.div>
  )
}

export default TrustUs
