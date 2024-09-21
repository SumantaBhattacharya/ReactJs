import React, { useEffect,useState } from "react";

const Eyes = () => {
  
  let [isRotate,setRotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
  
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2; 
  
      var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
  
      setRotate(angle - 180); 
    };
  
    // Add the event listener
    window.addEventListener("mousemove", handleMouseMove);
  
    // Clean-up function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures it runs only once (on mount and unmount)

  return (
    <div className="eyes w-full h-screen overflow-hidden rounded-t-[2vw]">
      <div className='relative w-full h-full bg-[url("/images/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
        <div className="absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 ">
          <div className="flex items-center justify-between">
            <div className="w-[13vw] relative flex items-center justify-center rounded-full h-[13vw] bg-white">
              <div className="w-1/2 h-1/2 relative rounded-full bg-zinc-900">
                <div style={{transform: `translate(-50%,-50%) rotate(${isRotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-7 ">
                  <div className="w-7 h-7 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="w-[13vw] flex items-center justify-center rounded-full h-[13vw] bg-white">
              <div className="w-1/2 h-1/2 rounded-full relative bg-zinc-900">
                {/* <div className="w-1/4 h-1/4 rounded-full bg-white"></div> */}
                <div style={{transform: `translate(-50%,-50%) rotate(${isRotate}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-7 ">
                  <div className="w-7 h-7 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;

/*
we have to rotate the line to make the eye changes

width/2
height/2

delta-x
delta-y

delta means difference
formula
atan
atan2(deltaY,deltaX)

radians converted to degree
    1 = 57.2958 deg
    tan(atan2(deltaY,deltaX)) * 57.2958 = angle in degrees

180/Math.PI
57.295

angle = atan2(deltaY,deltaX) * 57.2958;

*/