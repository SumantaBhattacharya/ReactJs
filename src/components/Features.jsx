import React from "react";
import "./landing.css";
import "./Navbar.css";
import { motion, useAnimation } from "framer-motion";

const Features = () => {
  // Separate animations for each card
  const card1Animation = useAnimation();
  const card2Animation = useAnimation();

  const handleHover = (index) => {
    // Trigger respective card's animation based on the index
    if (index === 0) {
      card1Animation.start({
        y: "0%",
        scale: 0.95, // Add scale down on hover
      });
    } else if (index === 1) {
      card2Animation.start({
        y: "0%",
        scale: 0.95, // Add scale down on hover
      });
    }
  };

  const handleHoverEnd = (index) => {
    // Reset respective card's animation based on the index
    if (index === 0) {
      card1Animation.start({
        y: "100%",
        scale: 1, // Reset scale on hover end
      });
    } else if (index === 1) {
      card2Animation.start({
        y: "100%",
        scale: 1, // Reset scale on hover end
      });
    }
  };

  return (
    <div className="Features font-['Neue Montreal', sans-serif'] w-full min-h-screen bg-[hsl(0,0%,89%)] px-10 py-10">
      <div className="border-b-2 border-[#E3E3E3] relative">
        <h1 className="text-[5vw] mb-[3vw] text-[#D3CFCA] font-bold leading-none tracking-tight">
          Our Features
        </h1>
      </div>

      <div className="cards mt-[2vw] h-[40vw] w-full flex justify-between align-middle gap-[1vw]">
        {/* First Card */}
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card-container relative w-1/2 h-[70vh]"
        >
          <motion.h1 className="absolute uppercase left-full transform -translate-x-[50%] top-1/2 -translate-y-[50%] w-full text-[#CDEA69] leading-none tracking-wide z-20 text-[6.4vw] whitespace-nowrap overflow-hidden flex ">
            {"Cardboard Spaceship".split("").map((item, idx) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={card1Animation}
                transition={{ ease: [0.83, 0, 0.17, 1], delay: idx * 0.06 }}
                key={idx}
                className={"inline-block"}
              >
                {item}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex items-center ml-[1vw] mb-[0.8vw] text-center justify-between h-[2vw] w-[10vw] ">
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
        </motion.div>

        {/* Second Card */}
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}

          className="card-container relative w-1/2 h-[70vh]"
        >
          <motion.h1 className="absolute uppercase right-full transform translate-x-[50%] top-1/2 -translate-y-[50%] w-full text-[#CDEA69] leading-none tracking-wide z-20 text-[6.4vw] whitespace-nowrap overflow-hidden flex ">
            {"AH2 & Matt Horn".split("").map((item, idx) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={card2Animation}
                transition={{ ease: [0.83, 0, 0.17, 1], delay: idx * 0.06 }}
                key={idx}
                className={"inline-block"}
              >
                {item}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex items-center ml-[1vw] mb-[0.8vw] text-center justify-between h-[2vw] w-[10vw] ">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
