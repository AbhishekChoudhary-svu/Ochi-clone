"use client"
import React, { useEffect, useState } from "react";

const EyesAni = () => {
  const [Rotate,setRotate] = useState(0)
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth/2
      let deltaY = mouseY - window.innerHeight/2
      const angle=Math.atan2(deltaY,deltaX)*(180/Math.PI)
      setRotate(angle-180)
    });
  });
  return (
    <div className="w-full h-screen rounded-tl-2xl rounded-tr-2xl overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
        <div className="absolute flex items-center justify-center gap-5 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 h-1/3">
          <div className="relative left a bg-white w-[13vw] h-[13vw] rounded-full">
            <div className="left-in flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-black w-[9vw] h-[9vw] rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${Rotate}deg)`}} className="lineleft absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="left-in bg-white w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="relative right bg-white w-[13vw] h-[13vw] rounded-full">
            <div className="right-in flex items-center justify-center  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-black w-[9vw] h-[9vw] rounded-full">
              <div style={{transform: `translate(-50%,-50%) rotate(${Rotate}deg)`}} className="lineright w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
                <div className="left-in  bg-white w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyesAni;
