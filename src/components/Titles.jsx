import React from 'react'
import { motion } from "motion/react"
// here title and desc are props which are used in the parent services, team,contact etc.
//the child component. ie this file named titles is used for setting the html of the props ie title and desc
const Titles = ({ title, desc }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }} className=' w-[30vw] m-3  ml-auto mr-auto text-center dark:text-white max-md:w-[80vw] max-md:text-sm '>
        <h2 className='text-2xl p-3 pb-3 '>{title}</h2>
        <p className='text-gray-500 max-md:w-[60vw] max-md:flex max-md:ml-auto max-md:mr-auto'>{desc}</p>
      </motion.div>
    </>
  )
}

export default Titles
