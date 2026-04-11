import React from 'react'
import assets from '../assets/assets'
import Titles from './Titles'
import ServicesCard from './ServicesCard'
import { motion } from "motion/react"
// why to apply
const Services = () => {
    const ServicesData = [
        {
            title: 'Online Lectures',
            description: 'For days of absentism , recorded lectures available',
            icon: assets.ads_icon
        },
        {
            title: 'Access to Live Classes',
            description: 'Get your doubts resolved in real time',
            icon: assets.marketing_icon
        },
        {
            title: '24Hour Mentorship & Support',
            description: 'All time mentorship for quick doubt solving',
            icon: assets.content_icon
        },
        {
            title: 'Language Flexible',
            description: 'Each topic is covered in English and Punjabi both.',
            icon: assets.social_icon
        }
    ]
    return (
        // here we are only returning the heading of Services. not ServicesData. that we will return inside ServicesCard
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            transition={{staggerChildren:0.6}}
            >
            <div id='services' className='relative flex flex-wrap dark:text-white '>
               
                <Titles title='Our Services' desc='Welcoming dear parents and children with open arms to start a new and fresh journey of learning.' />
            </div>


            {/* now we are mounting the ServicesCard  */}
            <div className='grid grid-cols-2 dark:text-white w-fit place-items-center ml-auto mr-auto bg-linear-to-r from-[#f6dbfa] to-[#e0eef1] z-1 max-lg:grid-cols-1 max-lg:overflow-y-scroll max-lg:scroll- max-lg:h-66 max-lg:shadow-2xl  max-lg:drop-shadow-gray-500  max-sm:pt-4 max-sm:pb-4'>
                {ServicesData.map((service, index) => (
                    <ServicesCard key={index} service={service} index={index} />)
                )}
            </div>
        </motion.div>
    )
}

export default Services
