"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-mono z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 id="title-1" className="text-9xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-9xl">
          Designer
        </h1>
        <h1 id="title-3" className="text-9xl">
          Freelancer
        </h1>
      </div>
      <main className="h-screen flex bg-gray-950 justify-center place-items-center flex-col">
        <h1
          id="welcome"
          className="text-9xl font-bold text-gray-100 font-mono mb-20"
        >
          Welcome.
        </h1>
        <Link href="second">
          <p className="text-2xl font-bold text-gray-100 font-mono">
            Next Page
          </p>
        </Link>
      </main>
    </div>
  );
}
