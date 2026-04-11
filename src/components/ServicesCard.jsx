import React from 'react'
import { motion } from "motion/react"

const ServicesCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay:index*0.2 }}
            viewport={{ once: true }}
    className='  place-items-start ml-auto mr-auto '>
            <div className=' bg-linear-to-br from-[rgb(225,133,245)] to-[#8fdff5] rounded-lg m-5 p-1 pt-1 pb-1 hover:bg-linear-to-r hover:from-[#8fdff5] hover:to-[rgb(225,133,245)] hover:transition-colors max-sm:m-1'>
                <div className=' '>

                    <div className='dark:bg-gray-900 dark:border-0 hover:scale-101 bg-white flex flex-row  text-sm m-0  pt-2 pb-2 rounded-lg p-2 items-center gap-2 h-28 w-70  max-sm:w-60 max-sm:h-28 max-sm:m-1'>
                        <img src={service.icon} alt="" className='w-12 ' />
                        <div className=''>
                            <h3 className='font-semibold'>{service.title}</h3>
                            <p className='font-2xs max-sm:p-1 '>{service.description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}

export default ServicesCard
