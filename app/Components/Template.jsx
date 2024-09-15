"use client"
import React from "react";

const Template = () => {
  return (
    <div   className="w-full h-screen bg-white flex justify-center items-center rounded-tl-2xl rounded-tr-2xl">
      <div className="w-full flex gap-5 justify-center items-center  mx-12">
        <div className="relative w-1/2 h-[55vh] flex items-center justify-center bg-[#004D43] rounded-xl">
        <img className="h-[9vh]" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className="px-4 py-1 border-2 rounded-full text-[#cdea68] border-[#cdea68] absolute left-8 bottom-8" >&copy;2019-2020</button>
        </div>
        <div className="w-1/2 h-[55vh] flex gap-5">
          <div className=" relative w-1/2 h-[55vh] flex items-center justify-center bg-[#212121] rounded-xl">
          <img className="h-[11vh]" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="px-4  tracking-tighter py-1 border-2 rounded-full text-white border-white absolute left-8 bottom-8" >RATING 5.0 ON CLUTCH</button>
          </div>
          <div className="relative w-1/2 h-[55vh] flex items-center justify-center bg-[#212121] rounded-xl">
          <img className="h-[15vh]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="px-4  tracking-tighter py-1 border-2 rounded-full text-white border-white absolute left-8 bottom-8" >BUSINESS BOOTCAMP ALUMNI</button></div>
        </div>
      </div>
    </div>
  );
};

export default Template;
