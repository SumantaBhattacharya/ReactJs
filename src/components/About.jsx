import React from "react";
import "./Landing.css";

const About = () => {
  return (
    <div className="About h-full py-20 bg-[#57660E] rounded-tr-[1vw] rounded-tl-[1vw] rounded-bl-[1vw] rounded-br-[1vw] ">
      <div className="flex justify-start w-[80vw]">
        <p className="text-left text-[#D3CFCA] text-[4vw] leading-[3.1vw] tracking-normal ml-[2vw] ">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain com­plex
          ideas, and hire great peo­ple.
        </p>
      </div>
      <div className="w-full h-full border-t-[1px] border-[#57660e60] mt-[4vw] flex align-middle pl-[4vw] pr-[4vw] ">
        <div className="w-1/2" >
          <h1 className="text-[4vw] text-[#D3CFCA]">Our approach:</h1>
          <button className=" flex gap-9 items-center mt-[0.2vw] text-[1.4vw] bg-black uppercase border-none rounded-full px-8 py-2 text-white ">read more
            <div className="w-3 h-3 bg-[#D3CFCA] rounded-full"></div>
          </button>
        </div>
        <di className="w-1/2 h-[60vh] mt-[2vw]  ">
        <img className="w-full h-full object-cover rounded-[1.2vw]" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </di>
      </div>
    </div>
  );
};

export default About;
// Ochi is a revolutionary, high-tech, and eco-friendly company dedicated to creating eye-opening experiences. With a focus on providing unparalleled customer service and exceptional product quality, we strive to create an unforgettable experience for our customers.
