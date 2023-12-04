import { ScrollSection } from "@/components/ScrollSection";
import React from "react";

const Second = () => {
  return (
    <>
      <div className="h-screen flex text-center flex-col justify-center items-center gap-[2rem]">
        <h1 className="font-mono text-[5rem] text-[#e6e6e6]">
          Ilesanmi Temitope
        </h1>
        <h1 className="text-[0.6rem] leading-[0.6rem] lowercase text-[#0aa1ff]">
          Full-Stack Engineer
        </h1>
      </div>
      <ScrollSection />
      <div className="text-white text-9xl text-center uppercase leading-relaxed bg-purple h-screen">
        <p className="m-auto">Footer</p>
      </div>
    </>
  );
};

export default Second;
