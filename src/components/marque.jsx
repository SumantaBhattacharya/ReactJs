import React from "react";
import "./Landing.css";
import { motion } from "framer-motion";

const marque = () => {
  return (
    <div className="marque h-[29.6vw] w-full py-20 bg-[#003E36] rounded-tr-[1vw] rounded-tl-[1vw]">
      <div className="uppercase border-t-2 border-b-2 border-zinc-400 flex justify-center text-center text-[29vw] whitespace-nowrap overflow-hidden gap-[2vw] ">
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className=" leading-none tracking-tight text-[#E8E6E3] -mb-[3vw] -mt-[6.3vw] ">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="leading-none tracking-tight text-[#E8E6E3] -mb-[3vw] -mt-[6.3vw] ">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className="leading-none tracking-tight text-[#E8E6E3] -mb-[3vw] -mt-[6.3vw] ">
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default marque;

/*
npm install framer-motion
<motion.div 
  className="flex whitespace-nowrap gap-[2vw]"
  initial={{ x: 0 }}
  animate={{ x: "-100%" }}
  transition={{ ease: "linear", repeat: Infinity, duration: 10 }}  // Adjust duration as needed
>
  <h1 className="leading-none tracking-tight text-[#E8E6E3] text-[29vw] -mb-[3vw] -mt-[6.3vw] ">
    We are Ochi
  </h1>
</motion.div>
*/
