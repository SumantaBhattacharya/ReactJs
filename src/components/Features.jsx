import React from "react";
import "./landing.css";
import "./Navbar.css";
// import { CiLocationArrow1 } from "react-icons/ci";

const Features = () => {
  return (
    <div className="Features font-['Neue Montreal', sans-serif'] w-full min-h-screen bg-[hsl(0,0%,89%)] px-10 py-10">
      <div className="border-b-2 border-[#E3E3E3] relative ">
        <h1 className="text-[5vw] mb-[3vw] text-[#D3CFCA] font-bold leading-none tracking-tight">
          Our Features
        </h1>
      </div>

      <div className="cards mt-[2vw] h-[40vw] w-full flex justify-between align-middle gap-[1vw]">
        <div className="card-container relative w-1/2 h-[70vh]">
          <h1 className="absolute uppercase left-full transform -translate-x-[50%] top-1/2 -translate-y-[50%] w-full text-[#CDEA69] leading-none tracking-wide z-20 text-[6.4vw] whitespace-nowrap">
            {"Cardboard Spaceship".split("").map((item, idx) => (
              <span key={idx} className={``}>
                {item}
              </span>
            ))}
          </h1>

          <div className="flex items-center ml-[1vw] mb-[0.8vw]text-center justify-between h-[2vw] w-[10vw] ">
            <div className="flex items-center">
              <div className="h-[1vw] w-[2vh] rounded-full bg-black"></div>
            </div>
            <div className="flex items-center">
              <h5 className="text-[1.3vw] leading-none tracking-normal">
                Cardboard Spaceship
              </h5>
            </div>
          </div>
          <div className="card w-full rounded-[1vw] overflow-hidden h-full ">
            <img
              className="w-full h-full bg-cover bg-no-repeat rounded-[1vw] bg-center"
              src="/images/CS_Website_1-1326x1101.png"
              alt="CS Website"
            />
          </div>
        </div>

        <div className="card-container relative w-1/2 h-[70vh]">
            <h1 className="absolute uppercase right-1/2 transform -translate-x-2/2 top-1/2 -translate-y-1/2 w-fit text-[#CDEA69] leading-none tracking-wide text-[6.4vw] whitespace-nowrap">
              {[
                "A",
                "H",
                "2",
                " ",
                "&",
                " ",
                "M",
                "a",
                "t",
                "t",
                " ",
                "H",
                "o",
                "r",
                "n",
              ].map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </h1>


          <div className="flex items-center ml-[1vw] mb-[0.8vw]text-center justify-between h-[2vw] w-[10vw] ">
            <div className="flex items-center">
              <div className="h-[1vw] w-[2vh] rounded-full bg-black"></div>
            </div>
            <div className="flex items-center">
              <h5 className="text-[1.3vw] leading-none tracking-normal">
                AH2 & Matt Horn
              </h5>
            </div>
          </div>
          <div className="card w-full rounded-[1vw] overflow-hidden h-full ">
            <img
              className="w-full h-full bg-cover bg-no-repeat rounded-[1vw] bg-center"
              src="/images/Frame-481692-1-1326x1101.png"
              alt="Frame 481692"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
// leading-loose
