"use client"
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-screen  bg-slate-900 pt-1'>
        <div className="textStructure mt-40 px-20  ">
            {["we create", "Eyes-opening", "presentations"].map((item,i)=>{
                return <div className="marker">
                    <div className='w-fit flex items-center'>
                        {i===1 && (<motion.div initial={{width:0}} animate={{width: "7.5vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:0.8}} className='w-[7vw] bg-red-500 h-[5.2vw] overflow-hidden rounded-md mr-[1vw] mt-[1vw]'>
                            <img className='w-full h-full bg-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVGQsmVJN-RA5Ee2M_KYyrlXbxNhK689OZA&s" alt="" />

                        </motion.div>)}
                <h1 className='text-[7vw] uppercase text-white font-[Founders Grotesk] font-semibold leading-[6.6vw] -tracking-[0.3vw]'>{item}</h1>
                    </div>
            </div>
            })}
            
        </div>
        <div className='border-t-[1px] border-slate-600  mt-28 flex items-center justify-between'>
            {["For public and private companies", "From the first pitch to IPO"].map((item,i)=>{
                return <p className='p-4 px-[80px] text-white'>{item}</p>
            })}
            <div className='flex items-center gap-3'>
                <div className='border-slate-300 border-[2px] px-4 py-1 rounded-full text-md font-regular text-white uppercase '>
                    start the project
                </div>
                <div className='border-slate-300 border-[2px] text-white rounded-full w-8 flex items-center justify-center rotate-45 h-8 mr-10'>
                <FaArrowUpLong />
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default LandingPage
