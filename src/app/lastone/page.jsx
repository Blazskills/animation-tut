"use client";

import React, { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Second = () => {
  const comp = useRef(null);
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ["#tope"],
        start: "top center",
        end: "bottom 100%",
        // start: "bottom bottom",
        // end: "bottom center",
        scrub: 2,
        markers: true,
        // pin: true,
        toggleActions: "restart none none none"
      },
    });
    t2.from(["#ball1", "#ball2", "#ball3", "#ball4"], {
      x: -1500,
      // duration: 1.9,
    }).to(["#ball1", "#ball2", "#ball3", "#ball4"], {
      x: 0,
      background: "red",
      duration: .8,
      stagger: 1,
      yoyo: true,

    });
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#heading", {
        opacity: 0,
        y: -30,
        duration: 1,
      })
        .from("#para1", {
          opacity: 0,
          x: -30,
          duration: 1,
        })
        .from("#para2", {
          opacity: 0,
          x: 60,
          duration: 1.5,
        })
        .from("#para3", {
          opacity: 0,
          y: -60,
          duration: 1.5,
        })
        .from("#para4", {
          opacity: 0,
          x: -60,
          duration: 1.5,
        })
        .from("#para5", {
          opacity: 0,
          y: 60,
          duration: 1.5,
        })
        .from("#morebtn", {
          opacity: 0,
          y: -60,
          duration: 1.5,
          background: "green",
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div ref={comp} className=" text-white bg-[#030518]">
        <div className="max-md:px-5 max-w-5xl m-auto">
          <div className="pt-5">
            <p id="heading" className="font-mono text-4xl mb-5">
              Welcome to Scroll Trigger
            </p>
            <p id="para1" className="font-mono text-base  mb-5">
              Authoritatively e-enable strategic technologies rather than
              resource maximizing architectures. Appropriately implement team
              driven e-services for error-free methods of empowerment.
              Phosfluorescently procrastinate out-of-the-box mindshare via
              web-readiness. Collaboratively reinvent go forward opportunities
              for extensive methods of empowerment. Collaboratively repurpose
              client-centered imperatives vis-a-vis tactical e-tailers.
              Collaboratively deliver performance based markets for
              market-driven technology. Progressively customize world-class
              services via equity invested e-services. Continually re-engineer
              maintainable content and covalent catalysts for change.
            </p>
            <p id="para2" className="font-mono text-base mb-5">
              Objectively mesh adaptive technologies for unique manufactured
              products. Objectively administrate goal-oriented strategic theme
              areas vis-a-vis collaborative channels. Enthusiastically matrix
              collaborative initiatives and stand-alone networks. Globally
              integrate resource-leveling ROI before world-class resources.
              Appropriately whiteboard leveraged mindshare through orthogonal
              scenarios. Continually brand installed base schemas whereas
              principle-centered results. Quickly streamline value-added content
              for mission-critical catalysts for change. Completely develop team
              building process improvements with highly efficient strategic
              theme areas. Phosfluorescently communicate standards compliant
              infomediaries without empowered intellectual capital.
            </p>
            <p id="para3" className="font-mono text-base mb-5">
              Dynamically drive compelling testing procedures for viral action
              items. Professionally enable B2C value whereas granular testing
              procedures. Holisticly plagiarize professional innovation via
              global convergence. Competently customize effective ideas through
              timely services. Energistically revolutionize backward-compatible
              infrastructures and optimal processes. Completely predominate
              intermandated intellectual capital whereas long-term high-impact
              networks. Rapidiously negotiate cross functional imperatives
              without efficient functionalities. Assertively simplify visionary
              e-commerce after holistic customer service. Dramatically visualize
              interoperable information without principle-centered
              web-readiness. Collaboratively reinvent go forward opportunities
              for extensive methods of empowerment. Collaboratively repurpose
              client-centered imperatives vis-a-vis tactical e-tailers.
            </p>
            <p id="para4" className="font-mono text-base mb-5">
              Dynamically drive compelling testing procedures for viral action
              items. Professionally enable B2C value whereas granular testing
              procedures. Holisticly plagiarize professional innovation via
              global convergence. Competently customize effective ideas through
              timely services. Energistically revolutionize backward-compatible
              infrastructures and optimal processes. Completely predominate
              intermandated intellectual capital whereas long-term high-impact
              networks. Rapidiously negotiate cross functional imperatives
              without efficient functionalities. Assertively simplify visionary
              e-commerce after holistic customer service. Dramatically visualize
              Intrinsicly supply visionary total linkage with B2C e-markets.
              Authoritatively provide access to magnetic processes without
              unique web-readiness. Proactively reinvent process-centric niches
              and covalent sources.Progressively matrix cross-platform best
            </p>
            <p id="para5" className="font-mono text-base mb-5">
              Intrinsicly supply visionary total linkage with B2C e-markets.
              Authoritatively provide access to magnetic processes without
              unique web-readiness. Proactively reinvent process-centric niches
              and covalent sources.Progressively matrix cross-platform best
              practices via performance based infrastructures. Interactively
              scale prospective infomediaries via leading-edge manufactured
              products. Globally utilize just in time vortals with user friendly
              opportunities. Monotonectally customize low-risk high-yield
              testing procedures vis-a-vis diverse bandwidth. Credibly exploit
              wireless alignments vis-a-vis high standards in scenarios.
            </p>
            <p
              id="morebtn"
              className="font-mono text-lg mb-3 bg-yellow-500 py-4 px-5 w-fit rounded-md cursor-pointer"
            >
              View More
            </p>

            <div
              ref={sectionRef}
              id="tope"
              className="flex justify-between gap-3 mt-10 mb-52"
            >
              <div
                id="ball1"
                className="ball w-32 h-32 bg-white rounded-full"
              ></div>
              <div
                id="ball2"
                className="ball w-32 h-32 bg-white rounded-full"
              ></div>
              <div
                id="ball3"
                className="ball w-32 h-32 bg-white rounded-full"
              ></div>
              <div
                id="ball4"
                className="ball w-32 h-32 bg-white rounded-full"
              ></div>
            </div>

            <p className="font-mono text-lg mt-20 mb-3 border-red border-b-[2px] w-fit">
              Get Started
            </p>
          </div>

          <div className="flex gap-3">
            <div className="mb-5 max-w-2xl bg-red px-3 py-2 rounded-sm">
              <p className="font-mono text-base">Main Heading</p>
              <p className="font-mono text-lg">Sub Heading</p>
              <p className="font-mono text-lg max-w-sm">
                Competently innovate excellent value vis-a-vis seamless
                opportunities. Proactively drive.
              </p>
            </div>
            <div className="mb-5 max-w-2xl bg-purple px-3 py-2 rounded-sm">
              <p className="font-mono text-base">Main Heading</p>
              <p className="font-mono text-lg">Sub Heading</p>
              <p className="font-mono text-lg max-w-sm">
                Competently innovate excellent value vis-a-vis seamless
                opportunities. Proactively drive.
              </p>
            </div>
            <div className="mb-5 max-w-2xl bg-black px-3 py-2 rounded-sm">
              <p className="font-mono text-base">Main Heading</p>
              <p className="font-mono text-lg">Sub Heading</p>
              <p className="font-mono text-lg max-w-sm">
                Competently innovate excellent value vis-a-vis seamless
                opportunities. Proactively drive.
              </p>
            </div>
          </div>

          <div className="pb-4 bg-green">
            <p className="font-mono text-base text-center">
              END OF GSAP ANIMATION AND TRANSITION LEARNING FOR NOW
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
