"use client"
import { FaArrowRightLong, FaDiscord } from "react-icons/fa6";
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';


gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  useEffect(() => {
    const star = document.querySelector('.star');

    gsap.to(star, {
      rotation: 180,
      duration: 0.9,
      repeat: -1,
      yoyo: true,
      ease:"power1.inOut"
    });
  }, []);  

  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const parentControls = gsap.timeline({
      repeat: -1,
      defaults: { duration: 10, ease: 'linear' },
    });

    parentControls.to(parentRef.current, {
      rotation: 360,
    });

    gsap.to(childRef.current, {
      rotation: 360,
      repeat: -1,
      
      ...parentControls,
    });
  }, []);

  const parentRef2 = useRef(null);
  const childRef2 = useRef(null);

  useEffect(() => {
    const parentControls1 = gsap.timeline({
      repeat: -1,
      defaults: { duration: 15, ease: 'linear' },
    });

    parentControls1.to(parentRef2.current, {
      rotation: 360,
    });

    gsap.to(childRef2.current, {
      rotation: 360,
      repeat: -1,
      
      ...parentControls1,
    });
  }, []);

  const parentRef3 = useRef(null);
  const childRef3 = useRef(null);

  useEffect(() => {
    const parentControls3 = gsap.timeline({
      repeat: -1,
      defaults: { duration: 15, ease: 'linear' },
    });

    parentControls3.to(parentRef3.current, {
      rotation: 360,
    });

    gsap.to(childRef3.current, {
      duration: 15,
      repeat: -1,
      motionPath: {
        path: [{ x: 60, y: 20 }, { x: 200, y: 100 }, { x: 0, y: 0 }], 
        
        autoRotate: true,
      },
      ...parentControls3,
    });
  }, []);

  const parentRef4 = useRef(null);
  const childRef4 = useRef(null);

  useEffect(() => {
    const parentControls4 = gsap.timeline({
      repeat: -1,
      defaults: { duration: 20, ease: 'linear' },
    });

    parentControls4.to(parentRef4.current, {
      rotation: -360,
    });

    gsap.to(childRef4.current, {
      duration: 20,
      repeat: -1,
      motionPath: {
        path: [{ x: 140, y: 100 }, { x: 160, y: 120 }, { x: 180, y: 100 }],
        curviness: 8, 
        autoRotate: true,
      },
      ...parentControls4,
    });
  }, []);
  
  
  return (
    <main className="hero-container flex justify-center items-center  w-screen h-screen box-border ">
      <div class="radial-gradient h-screen w-screen rounded-full top-[-40%] absolute z-[-1] "></div>

      {/*first circle */}
      <div className="absolute" 
          style={{width: "75%", height: "100%"}}
          ref={parentRef2}>
          <div
            className="element-3 w-5 h-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] rounded-full max-md:hidden"
             ref={childRef2}/>
      </div>

        {/* Middle circle - 1 */}
        <div className="absolute z-[-1]" 
          style={{width: "50%", height: "15%"}}
          ref={parentRef3}>
          <div
            className="element-2 w-2 h-2 rounded-full max-md:hidden"
             ref={childRef3}/>
        </div>

      <div className="big-ellipse flex justify-between items-center w-[90vw] h-[90vw] rounded-full box-border relative overflow-hidden px-10 max-xl:w-[95vw] max-xl:h-[95vw] max-lg:w-[100vw] max-lg:h-[100vw] max-lg:gap-x-4 max-md:w-[90vw] max-md:h-[90vw] max-md:gap-x-4 max-md:flex-row  max-md:justify-center max-md:overflow-visible max-sm:w-full max-sm:px-4">

        {/* Left container*/}
        <div className="details max-w-[480px] max-lg:w-[100%] max-md:mr-auto" style={{transform: 'translateY(30px) translateZ(0)' }}>
        <h2 class="text-[#0FEAB6] text1">UI ASTRA Framework    v1.0</h2>
          <h1 className="text-black text-5xl font-semibold mt-4 max-md:text-4xl">Design faster, better & beautiful.</h1>
          <p className=" text-lg text-[#70808F] mt-3 mb-4" style={{ whiteSpace: 'nowrap' }}>Discover UI ASTRA - your one-stop hub for design system resources.</p>
          <div className="flex justify-items-start gap-x-3 mt-6">
            <button className="bg-[#282A3A] text-white px-8 py-2.5 rounded-[20px] flex gap-x-2 justify-center items-center cursor-pointer">
              Get Started <FaArrowRightLong className="ml-4 text-2xl" />
            </button>
            <button className="border-[1.5px] text-black px-8 py-2.5 rounded-[20px] flex gap-x-2 justify-center items-center border-[#282A3A] cursor-pointer">
              <FaDiscord className="mr-4 text-2xl text-[#32db98]" /> Join our Discord
            </button>
          </div>
        </div>


        {/* Middle circle - 2 */}
        <div className="absolute" 
          style={{width: "30%", height: "105%"}}
          ref={parentRef4}>
          <div
            className="element-1 w-5 h-5 rounded-full max-md:hidden"
             ref={childRef4}/>
        </div>

        {/* Right container*/}
        <div className="small-ellipse flex justify-center items-center w-[55vw] h-[55vw] max-w-[550px] max-h-[550px] rounded-full relative max-sm:w-[300px] max-sm:h-[300px] max-sm:mr-auto " style={{transform: 'translateY(30px) translateZ(0)' }}>
          <img src="/3Dblock.webp" alt="Hero Image" className="w-[80%] h-[80%] object-contain" />
          <img
            src="/star.svg"
            alt="Star"
            className="star absolute top-[59px] right-[67px] w-8 h-8"
          />

          {/*Inner orbital circle*/}
          <div
              className="absolute "
              style={{width: "73%",height: "73%",}}
              ref={parentRef}>
              <div
                className="element-4 w-2 h-2 rounded-full max-md:hidden"
                ref={childRef}
              />
          </div>
        </div>
      </div>
    </main>
  );
}
