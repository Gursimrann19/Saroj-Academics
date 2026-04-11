import React from 'react'
import Titles from './Titles'
import { teamData } from '../assets/assets'
import { private_pics } from '../assets/assets'
import { motion } from "motion/react"

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }} id='ourteam'>
      <div className='max-md:hidden flex p-0 m-0 gap-0 w-[40vw] place-items-center ml-auto mr-auto'>
<div className=''>

        <Titles title='Meet our Team' desc='Our team includes teachers from various backgrounds, most of who have been associated with Punjab School Education Board from years' />
</div>
        <span>

          {private_pics.map((pics, index) => (
            <img key={index} src={pics} className='mt-auto mb-auto w-20 rounded-full' alt="" />
          ))}
        </span>
      </div>
          <div className='md:hidden text-2xl flex  max-md:w-fit place-items-center ml-auto mr-auto max-lg:h-fit'>Meet our Team</div>

      <div className='dark:text-white flex flex-wrap w-[50vw] ml-auto mr-auto justify-center place-items-center gap-1 max-lg:flex-nowrap  max-lg:overflow-auto  max-lg:w-[60vw] max-lg:h-fit'>
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            viewport={{ once: true }} key={index}
             className='dark:bg-gray-900 bg-white dark:hover:bg-gray-800 dark:hover:bg-none items-start justify-center dark:border-0 hover:scale-103 hover:bg-linear-to-r hover:from-[#e4f7fc] hover:to-[rgb(251,237,254)] hover:transition-color rounded-2xl flex flex-col  text-center border-2 border-gray-100 text-sm w-fit max-lg:h-40 pt-4 max-lg:pt-3 max-lg:pb-3 '>
            <img src={team.image} className='w-12 rounded-full ml-auto mr-auto max-sm:w-8 ' alt="" />
            <h3 className='text-sm text-center h-5 w-28 pt-2 pb-6 '>{team.name}</h3>
            <p className='text-sm text-gray-500 text-center h-10 w-28 ' >{team.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Team
