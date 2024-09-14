"use client"
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marqee from './Components/Marqee'
import About from './Components/About'
import EyesAni from './Components/EyesAni'
import Featured from './Components/Featured'
import Template from './Components/Template'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';





const page = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-slate-900 '>
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
      <EyesAni/>
      <Featured/>
      <Template/>
      <Footer/>


    </div>
  )
}

export default page
