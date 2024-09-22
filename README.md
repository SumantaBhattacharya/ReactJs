# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# [***ReactJS | Modern Animated Website | OCHI DESIGN | Awwwarded Website Clone***](https://youtu.be/AZXYSlxj0vU?si=XfahCFcdAW0GbAbn)

[![ReactJS | Modern Animated Website | OCHI DESIGN | Awwwarded Website Clone](https://img.youtube.com/vi/AZXYSlxj0vU/hqdefault.jpg)](https://youtu.be/AZXYSlxj0vU?si=XfahCFcdAW0GbAbn)

# ***list of topics:***

- *Creating a modern animated website using ReactJS*
- *Installing dependencies and setting up Tailwind CSS for the website*
- *Setting up ReactJS app and installing extensions for development*
- *Creating a modern animated website with different sections*
- *Introduction to creating and importing React components*
- *Changing the color of the navigation bar to white*
- *Fetching a font from a website for installation*
- *Selecting and using fonts in ReactJS*
- *Fix navigation bar and ensure z-index for visibility*
- *Creating and styling text structure of the website*
- *Customizing text appearance in the website design*
- *Creating and customizing masks in ReactJS*
- *Styling the website elements with CSS*
- *Creating and using icons in ReactJS*
- *Installation process for ReactJS on Windows and Mac*
- *Styling elements and managing layout*
- *Adjusting rounded curved angles and values for proper display*
- *Creating a rough sea effect with green section*
- *Styling adjustments and animations discussed*
- *Implementing rounded corners and animation in the website design*
- *Development process of creating a modern animated website*
- *Creating a modern animated website using ReactJS*
- *Creating and customizing design elements in the website using ReactJS*
- *Fixing the bottom line on the website*
- *Creating and styling elements using ReactJS*
- *Creating and customizing website design elements*
- *Discussing design elements and color choices*
- *Adjusting elements for the layout*
- *Learn how to create a rotating circle with transparency*
- *Explanation of finding the angle and point on the screen*
- *Using radians to calculate degrees and extracting mouse location for website interaction*
- *Understanding mouse position and delta in ReactJS*
- *Learn how to rotate elements using ReactJS*
- *Creating and styling website components with ReactJS*
- *Creating card div and setting dimensions*
- *Creating card structures and applying CSS*
- *Customizing website colors and image shapes*
- *Positioning and styling elements using ReactJS*
- *Adjusting colors and elements on the website*
- *Creating animated website using ReactJS*
- *Discussing layout configurations and styling elements*
- *Creating and styling a logo and button in the website design*
- *Code corrections and styling enhancements*
- *Discussing the CSS properties flex, justify, height, and presentation*
- *Installing and using locomotive for smooth scrolling website*
- *Using ReactJS to create animated website*
- *Troubleshooting and fixing an error during application runtime*
- *Controlling scroll speed and creating a dynamic effect*
- *Styling and animating elements using inline-block and flex*
- *Creating hover animation using ReactJS*
- *Discussing styling and DOM manipulation in ReactJS*
- *Using motion and animation in ReactJS*
- *Demonstrating animation with Frame Motion*

# ***SECTIONS***
- *Navbar*
- *Landing Page*
- *Marque*
- *About*
- *Playful*
- *Cards*
- *Cards* (duplicate)
- *Ready to Start*
- *Footer*
- *Loader*

# ***BEFORE***
```jsx
useEffect(()=> {
    return window.addEventListener("mousemove",(event)=>{
      // console.log(event.clientX,event.clientY);

      let mouseX = event.clientX;
      let mouseY = event.clientY;

      let deltaX = mouseX - window.innerWidth/2;// mouse to center deiff
      let deltaY = mouseY - window.innerHeight/2; // mouse to center deiff

      // var angle = Math.atan2(deltaX,deltaY) to value in radian now convert it to degrees
      // (180 / Math.PI) 57.29
      var angle = Math.atan2(deltaX,deltaY) * (180 / Math.PI)

      setRotate(angle-180)//updates automatically
      
      /*const eyes = document.querySelectorAll('.line');
      eyes.forEach(eye => {
        const { clientX: x, clientY: y } = event;
        const { top: eyeTop, left: eyeLeft } = eye.getBoundingClientRect();
        const { width: eyeWidth, height: eyeHeight } = eye;
      })

      const x = (event.clientX - eye.offsetLeft) / eye.offsetWidth * 100;
      const y = (event.clientY - eye.offsetTop) / eye.offsetHeight * 100;
      eye.style.transform = `translate(${x}%, ${y}%)`;*/
    })
  })
```
```
You can't directly use window.removeEventListener within the same function where you add the event listener because handleMouseMove needs to be defined as a separate function for it to work correctly.

Here's why:

Function Reference: When you add an event listener, you need to pass a reference to the same function when removing it. In your code, you're defining an anonymous function for addEventListener, so you don't have a reference to it later when trying to remove it.

Immediate Invocation: If you call window.removeEventListener within the same block, it will remove the listener immediately after it's added, which defeats the purpose.

To summarize, you need to define handleMouseMove as a named function outside the event listener

The clean-up function:


return () => window.removeEventListener("mousemove", handleMouseMove);
```

is useful for several reasons:

### 1. **Prevents Memory Leaks**:
   - If you don’t remove the event listener when the component is unmounted, it will continue to listen for mouse movements even when the component is no longer in the DOM. This results in a **memory leak**, where unused event listeners pile up in memory, potentially slowing down your app over time.

### 2. **Avoids Unnecessary Computations**:
   - Without removing the event listener, even after your component is unmounted, the event listener will still be active and execute the callback (`handleMouseMove`) every time the mouse moves. This leads to unnecessary computations, as there's no UI left to update.

### 3. **Prevents Bugs**:
   - If the component is unmounted and then re-mounted, new event listeners will be added, but the old ones will remain, causing **duplicate event listeners**. This can cause bugs like the `mousemove` event being handled multiple times, leading to incorrect behavior, for example, updates happening more frequently than expected.

### 4. **Improves Performance**:
   - By cleaning up event listeners when they are no longer needed, you free up resources and ensure your app stays performant. For large or complex apps, keeping unnecessary event listeners active can degrade performance, particularly with events like `mousemove` that fire frequently.

### Example Scenario Without Cleanup:
Let’s say your `Eyes` component is only shown on one page, and when the user navigates away, it’s unmounted. Without the clean-up function, the `mousemove` event listener will still exist and run, even though the component is not visible anymore. Over time, more listeners might pile up, leading to excessive memory usage, slower performance, and difficult-to-debug errors.

### Clean-Up Process:
- The clean-up function runs when the component is about to be **unmounted**. At that moment, it ensures that the `mousemove` event listener is **removed**, stopping unnecessary updates and freeing resources.

In summary, the clean-up ensures your app remains efficient, bug-free, and well-optimized by stopping unnecessary processes when they’re no longer needed.

# ***AFTER***
```jsx
useEffect(() => {
  const handleMouseMove = (event) => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let deltaX = mouseX - window.innerWidth / 2; // mouse to center diff
    let deltaY = mouseY - window.innerHeight / 2; // mouse to center diff

    // Convert radian to degrees
    var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);

    setRotate(angle - 180); // updates automatically
  };

  // Add the event listener
  window.addEventListener("mousemove", handleMouseMove);

  // Clean-up function to remove the event listener when the component unmounts
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []); // Empty dependency array ensures it runs only once (on mount and unmount)

```

```html
<div data-scroll-section>
  <h1 data-scroll data-scroll-speed="2">I scroll faster!</h1>
  <p data-scroll data-scroll-speed="1">I scroll at normal speed.</p>
</div>

```

# ***Locomotive***

## ***Before***
```jsx
  useEffect(() => {
    // Initialize LocomotiveScroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // The container you want to scroll
      smooth: true, // Enables smooth scrolling
    });

    // Clean up the instance on unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
```
## ***After***
```jsx
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
```
```jsx
<h1 className="absolute uppercase right-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-fit text-[#CDEA69] leading-none tracking-wide z-20 text-[6.4vw] whitespace-nowrap">
  {['A', 'H', '2', ' ', '&', ' ', 'M', 'a', 't', 't', ' ', 'H', 'o', 'r', 'n'].map((item, idx) => (
    <span key={idx}>
      {item}
    </span>
  ))}
</h1>

```

```bash
npm i framer-motion
npm i gsap
```

https://easings.net/

```
<div onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} className="card-container relative w-1/2 h-[70vh]">
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
                <motion.span 
                initial={{y:"100%"}} animate={isHovered ? ({y:"0"}) : ({y:"100%"})} transition={{ease: [0.83, 0, 0.17, 1], delay: idx * 0.1 }}
                key={idx} className="inline-block">
                  {item}
                </motion.span>
              ))}
```