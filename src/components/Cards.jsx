import React from "react";
import "./landing.css";
import "./Navbar.css";

const Cards = () => {
  return (
    <div className="Cards p-[2vw] font-['Neue Montreal', sans-serif'] w-full h-screen bg-zinc-100 text-[#D3CFCA] relative flex">
      <div className="cardcontainer mx-[1vw] w-1/2  ">
        <div className="w-full h-[50vh] rounded-[1vw] bg-[#003E36] flex flex-col items-center justify-center relative">
          <img
            src="/svg/logo001.svg"
            alt="Logo"
            className="bg-cover bg-center bg-no-repeat w-[7vw] h-[3.3vw]"
          />

          <div className="bottom-0 left-0 h-[10vw] w-[10vw] leading-none absolute flex justify-center items-center align-middle ">
            <div className="border-2 p-[0.4vw] border-[#CDEA68] rounded-[1vw]">
              <h6 className="YEAR text-[1.3vw] text-[#CDEA68] leading-none">
                &copy;2019-2022
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="cardcontainer w-1/2 flex justify-between gap-[1vw]">
        <div className="card-contain w-1/2 h-[50vh] rounded-[1vw] bg-[#191B1C] flex flex-col items-center justify-center relative">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="uppercase absolute bottom-[4vw] text-[1.1vw] left-[2vw] text-[black] border-2 p-[0.4vw] border-[#11111174] rounded-[1vw] ">
          rating on 5.1 clutch
          </button>
        </div>
        <div className="card-contain w-1/2 h-[50vh] rounded-[1vw] bg-[#191B1C] flex flex-col items-center justify-center relative">
          <img
            src="/images/logo003.png"
            alt="/images/logo003.png"
            style={{ height: "6vw", width: "6vw" }}
          />
          <button className="uppercase absolute bottom-[4vw] text-[1.1vw] left-[2vw] text-[black] border-2 p-[0.4vw] border-[#11111174] rounded-[1vw] ">
            Business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
};
//
export default Cards;
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
