import React from "react";
import "./landing.css";
import "./Navbar.css";
import { CiLocationArrow1 } from "react-icons/ci";

const Landing = () => {
  return (
    <div className="Landing font-['Neue Montreal', sans-serif'] w-full h-screen bg-zinc-900 text-[#D3CFCA] pt-1 relative">
      <div className="masker mt-52 px-20">
        {["We Create", "EYE-OPENING"].map((item, idx) => {
          return (
            <div className=" w-fit flex items-center overflow-hidden relative">
               {/* Conditionally render the red div for the second item */}
               {idx === 1 && (
                <div className="w-[9.1vw] mr-[1vw] rounded-lg h-[5.7vw] relative top-[0.5vw] bg-green-500 mr-4"></div>
              )}
              <h1
                key={idx}
                className="uppercase text-[9.1vw] leading-[7vw] tracking-normal font-medium"
              >
                {item}
              </h1>
            </div>
          );
        })}
        <h1 className="uppercase text-[9.1vw] leading-[7vw] tracking-normal font-medium">
          PRESENTATIONs
        </h1>
      </div>
      <div className="line border-t-[1px] border-zinc-800 mt-32 font-['Neue Montreal', sans-serif] ">
        {" "}
        {/*line*/}
        <div className="flex justify-between align-middle text-center  px-20 mt-[2vw]">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
            <button className="flex px-4 gap-1 py-1 text-[1.4vw] font-[100] capitalize rounded-full text-white border-[1px] bg-zinc-700 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
              start the project
              <div className="CiLocationArrow1 rounded-full flex justify-center items-center">
                <CiLocationArrow1 />
              </div>
            </button>,
          ].map((item, idx) => (
            <div key={idx}>
              <p className="text-[1.6vw] font-light tracking-tight leading-none ">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//
export default Landing;
/*
font-regular medium bold semibold
leading-none
tracking-tight
rounded-lg full
w-fit full 

Order your website
home
about me 
Insights where i will should the code of the page 
contacts
*/
