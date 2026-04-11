import React from 'react'
import Titles from './Titles'
import {motion} from "motion/react"

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
}

const ContactUs = () => {
  return (
    <motion.div
    animate={{x:0}}
    transition={transition}
    id='contactus' className='mt-8'>
      <Titles title='Contact Us' desc='Fill this form and our team with reach out to you in a day'/>
    </motion.div>
  )
}

export default ContactUs
