"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Second = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        ["#bx1", "#bx2", "#bx3"],
        {
          x: -900,
          // background: "green",
          ease: "expoScale(0.5,7,none)",
          stagger:1,
          rotation:360
         
        },
        {
          // background: "orange",
          duration: 3,
          x: 0,
    
         
        }
      );
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div
        ref={comp}
        className="h-screen bg-[#030518] flex text-center flex-col justify-center items-center gap-[2rem]"
      >
        <div
          id="ball"
          className="w-32 h-32 bg-darkOrange rounded-full flex flex-col"
        >
          <p id="namemi" className="m-auto">
            Temitope
          </p>
        </div>
        <div id="boxes" className="flex gap-5 mt-28">
          <p id="bx1" className="h-40 w-40 bg-green">
            Box 1
          </p>
          <p id="bx2" className="h-40 w-40 bg-blue-500">
            Box 2
          </p>
          <p id="bx3" className="h-40 w-40 bg-yellow-500">
            Box 3
          </p>
        </div>
      </div>
    </>
  );
};

export default Second;
