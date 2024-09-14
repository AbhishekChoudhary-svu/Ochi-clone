"use client"
import { motion } from 'framer-motion'
import React, { useRef } from 'react'


const Marqee = () => {
  

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full flex  py-20 pb-16 bg bg-green-600 rounded-tl-2xl rounded-tr-2xl overflow-hidden'>
        <div  className="text flex items-center pr-10 border-t-2 border-b-2 border-white shrink-0    ">
            {["We are ochi","We are ochi","We are ochi"].map((item,i)=>{
                return <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:10}} className='text-[17vw] pr-20 text-white leading-none font-["Founders Grotesk"] font-bold  uppercase -tracking-[1vw] mb-5'>{item}</motion.h1>
            })}
        </div>
    </div>
  )
}

export default Marqee
