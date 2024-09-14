"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { Power4 } from 'gsap/all'

const Featured = () => {
    
    const [isHovering,setHovering]=useState(false)
    const [isHovering1,setHovering1]=useState(false)
    
  return (
    <div   className='w-full py-20 pb-10 rounded-tl-2xl rounded-tr-2xl overflow-hidden'>
        <div className='w-full border-b-2 pb-12'>
            <h1 className='text-6xl mx-12 text-white font-[Neue Montreal] leading-none tracking-tight'>Featured Projects</h1>
        </div>
        {[{BrandName: "FYDE",
            imgURL:"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
            BrandName1: "VISE",
            imgURL1:"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
                
            
        },{BrandName: "TRAWA",
            imgURL:"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
            
        BrandName1: "PREIMEUM BLEND",
            imgURL1:"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
            
        }].map((item,i)=>{
            return <div className='card-screen px-12 py-10   '>
            <div className='w-full flex gap-[45%] mb-4'>
        <li className='text-lg text-white font-[Neue Montreal] font-medium '>{item.BrandName}</li>
        <li className='text-lg text-white font-[Neue Montreal] font-medium '>{item.BrandName1}</li>
            </div>
            <div className="cardGrid w-full flex gap-5">
                
                <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className="relative cardContainer w-1/2 h-[78vh] ">
                <h1 className='absolute flex overflow-hidden z-[9] text-8xl font-semibold tracking-tighter leading-none text-[#cdea68] font-[Founders Grotesk] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 whitespace-nowrap '>
                {item.BrandName.split('').map((item1,i1)=> 
                <motion.span initial={{y:"100%"}} animate={isHovering ? ({y:"0%"}): ({y:"100%"})} transition={{ease:Power4.easeInOut,duration:i1*0.2}} className='inline-block' key={i1} >{item1}</motion.span>
                )}
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src={item.imgURL} alt="" />
                </div>
                </div>
               
                <div onMouseEnter={()=>setHovering1(true)} onMouseLeave={()=>setHovering1(false)} className="relative cardContainer w-1/2 h-[78vh] ">
                <h1 className='absolute flex overflow-hidden z-[9] text-8xl font-semibold tracking-tighter leading-none text-[#cdea68] font-[Founders Grotesk] right-full translate-x-1/2 -translate-y-1/2 top-1/2 whitespace-nowrap '>
                {item.BrandName1.split('').map((item1,i1)=> 
                <motion.span initial={{y:"100%"}} animate={isHovering1 ? ({y:"0%"}): ({y:"100%"})} transition={{ease:Power4.easeInOut,duration:i1*0.2}} className='inline-block' key={i1} >{item1}</motion.span>
                )}
                </h1>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                    <img className='w-full h-full bg-cover' src={item.imgURL1} alt="" />
                </div>
                </div>
            </div>

        </div>
        })}
        
      
    </div>
  )
}

export default Featured
