"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Second = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#ball", {
        x: -300,
        duration: 2,
        ease: "expoScale(0.5,7,none)",
        scale: 4.5,
        // repeat:-1,
        // yoyo: true,
      })
        .from("#namemi", {
          opacity: 0,
        })
        .to("#namemi", {
          opacity: 1,
          duration: 1.9,
          scale: 1.2,
          color: "green",
        })
        .from(["#bx1", "#bx2", "#bx3"], {
          opacity: 0,
          duration: 1,
          x: "-900",
          stagger: 0.5,
          onComplete: function () {
            t1
              .from("#bx2", {
                duration: 2,
                backgroundColor: "#7EA16B",
                scale: -0.4,
                rotation: 360,
                yoyo: true,
                // repeat:-1,

                borderRadius: "50px",
              })
          },
          // ease: "expoScale(0.5,7,none)",
        });
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
