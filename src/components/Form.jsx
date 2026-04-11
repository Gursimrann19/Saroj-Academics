import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { motion } from "motion/react"


const Form = () => {


    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "595380d2-32fd-4d17-b34c-c2d4155662bf");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Thank you for your submission !');
                event.target.reset();
            } else {
                toast.error(data.message)

            }

        } catch (error) {
            toast.error(error.message);
        }

    };
    return (
        <div
            className='flex flex-col ml-auto mr-auto place-items-center '>

            <motion.form
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                onSubmit={onSubmit}>
                <div className='w-[30vw] max-md:w-[80vw] '>

                    <div className="mb-5">
                        <label for="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="name" className="block mb-2.5 text-sm font-medium text-heading">Your Name</label>
                        <input type="name" name="name" id="name" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Name" required />
                    </div>



                    <label for="message" className="block mb-2.5 text-sm font-medium text-heading">Your message</label>
                    <textarea id="message" rows="4" name="message" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>



                    <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none mt-5 mb-10 ml-auto mr-auto flex ">Submit</button>

                </div>
            </motion.form>


        </div>
    )
};

export default Form
