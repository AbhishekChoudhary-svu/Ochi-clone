import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.01" className='w-full bg-[#cdea68]  rounded-tr-2xl rounded-tl-2xl'>
            <h1 className='text-[4vw] tracking-tight leading-[4vw] p-20'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='w-full flex p-6 border-t-2 border-[#b9c981] mt-15'>
                <div className="w-1/2 mx-14 ">
                <h1 className='text-black text-[4vw] '>Our approach:</h1>
                <div className='text-white flex items-center justify-center gap-10 rounded-full bg-black h-[3.5vw] mt-3 w-[13vw]'>
                <button className='uppercase'>Read more</button>
                <div className='w-3 h-3 rounded-full bg-white'></div>
                </div>
                </div>
               <div className="w-1/2 h-[65vh] rounded-3xl overflow-hidden">
               <img className='object-cover w-full h-full ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
               </div>
                

            </div>

    </div>
  )
}

export default About
