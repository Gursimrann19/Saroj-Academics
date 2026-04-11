import React from 'react'
import Titles from './Titles'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {
  const workData = [
    {
      title: 'Offline Classroom',
      desc: 'Fully air conditioned classrooms to facilitate comfort',
      image: assets.work_mobile_app
    },
    {
      title: 'Our Application',
      desc: 'Recorded Lectures Available for each subject and chapter',
      image: assets.work_dashboard_management
    },
    {
      title: 'Hostel Facility',
      desc: 'For students coming from distant places, hostels available',
      image: assets.work_fitness_app
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }} id='ourwork'>
      {/* this is the work title  */}
      <div className='flex  gap-1 w-[40vw] ml-auto mr-auto mb-2 mt-10 dark:text-white max-md:w-[80vw]'>

        <Titles title='Our Work' desc='Our office is based in Patiala and I have been in the teaching department for over 28 years ' />

      </div>

      {/* this is the work content */}
      <div className='flex flex-row ml-auto mr-auto w-fit mb-10 dark:text-white max-md:overflow-auto max-md:flex-nowrap max-md:w-[60vw] text-sm  ' >
        {
          workData.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index*0.3 }}
              viewport={{ once: true }} key={index} 
              className='dark:bg-gray-900  dark:hover:bg-gray-800 dark:hover:bg-none dark:text-white justify-center place-items-center   text-wrap text-center w-fit p-4 pt-4 pb-4  m-3 max-md:pt-7 max-md:pb-7 max-md:p-2 hover:bg-linear-to-r bg-white hover:from-[#e4f7fc] hover:to-[rgb(251,237,254)] hover:transition-colors rounded-2xl'>
              <img src={work.image} className='w-40 max-md:w-30 hover:scale-105 rounded-2xl ' alt="" />
              <div className=' w-[13vw] max-md:w-[30vw] max-md:text-sm m'>

                <h3 className='dark:text-white font-semibold text-gray-900 pt-3'>{work.title}</h3>
                <p className='text-gray-700 dark:text-gray-300'>{work.desc}</p>
              </div>

            </motion.div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default OurWork
