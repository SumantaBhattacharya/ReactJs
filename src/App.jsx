import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marque from "./components/marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  // Reference to the scroll container
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Enables smooth scrolling on desktop
      tablet: {
        smooth: true, // Enable smooth scrolling on tablets
        direction: "vertical", // Optionally, you can set horizontal scrolling here
      },
      smartphone: {
        smooth: false, // Disable smooth scrolling on mobile for performance reasons
      },
    });

    // Clean up the LocomotiveScroll instance on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <div
        data-scroll-container
        ref={scrollRef}
        className="w-full min-h-screen bg-zinc-900"
      >
        <Navbar />

        <div data-scroll-section>
          <Landing />
        </div>
        <div data-scroll-section>
          <Marque />
        </div>
        <div data-scroll-section>
          <About />
        </div>
        <div data-scroll-section>
          <Eyes />
        </div>
        <div data-scroll-section>
          <Features />
        </div>
        <div data-scroll-section>
          <Cards />
        </div>
        <div data-scroll-section>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
