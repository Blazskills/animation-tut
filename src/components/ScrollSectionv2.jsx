"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner h-screen w-[400vw] flex relative  ">
          <div className="scroll-section h-screen w-screen flex justify-center items-center bg-slate-700">
            <h3 className="text-white leading-[1rem] text-[1rem] lowercase ">
              Section 1
            </h3>
          </div>
          <div className="scroll-section h-screen w-screen flex justify-center items-center bg-emerald-600">
            <h3 className="text-white leading-[1rem] text-[1rem] lowercase">
              Section 2
            </h3>
          </div>
          <div className="scroll-section h-screen w-screen flex justify-center items-center bg-yellow-800">
            <h3 className="text-white leading-[1rem] text-[1rem] lowercase">
              Section 3
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
