import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Subjects from './components/Subjects'
import OurWork from './components/OurWork'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Form from './components/Form'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'


const App = () => {

  const [theme,setTheme] = useState('light')
  return (
    <div className='dark:bg-gray-900 relative'>
      <Toaster/>
      <Navbar theme = {theme} setTheme={setTheme}/>
      <Hero/>   

      <Subjects/> 
      <Services/>
      <OurWork/>
      <Team/>
      <ContactUs/>
      <Form/>
      
      <Footer theme = {theme} />
    </div>
  )
}

export default App
