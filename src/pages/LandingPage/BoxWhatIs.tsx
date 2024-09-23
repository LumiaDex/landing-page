import Cassus01Img from "@/assets/images/cassus-01.png";
import Cassus02Img from "@/assets/images/cassus-02.png";
import Cassus03Img from "@/assets/images/cassus-03.png";
import CassusBgImg from "@/assets/images/cassus-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { isMobile } from "@/utils/devices";
import { useEffect, useRef } from "react";
import WhatIs from "./WhatIs";

export default function BoxWhatIs() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      const distance = isMobile() ? 150 : 600;
      // GSAP ScrollTrigger to animate the first and third image positions
      gsap.fromTo(
        imageRefs.current[0],
        { x: isMobile() ? 100 : 200 },
        {
          x: -distance, // Move left
          scrollTrigger: {
            trigger: boxRef.current, // Trigger based on boxRef
            start: "top bottom", // Start animation when top of box reaches the bottom of viewport
            end: "bottom top", // End animation when bottom of box reaches top of viewport
            scrub: true, // Smooth animation following the scroll
          },
        }
      );

      gsap.fromTo(
        imageRefs.current[2],
        { x: isMobile() ? -100 : -200 },
        {
          x: distance, // Move right
          scrollTrigger: {
            trigger: boxRef.current, // Trigger based on boxRef
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);
  return (
    <div ref={boxRef} className="box-container">
      <WhatIs />
      <div className="relative w-full overflow-hidden">
        <img className="w-auto mx-auto mt-6" src={CassusBgImg} />

        <div className="top-10 md:top-20 items-center left-1/2  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[0] = el)}
            className=" mx-auto w-[120px] md:w-[307px] mt-6 relative "
            src={Cassus01Img}
          />
        </div>
        <div className="top-10 md:top-20 items-center left-1/2  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[1] = el)}
            className=" mx-auto w-[120px] md:w-[307px] mt-6 relative "
            src={Cassus02Img}
          />
        </div>
        <div className="top-10 md:top-20 items-center left-1/2  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[2] = el)}
            className=" mx-auto w-[120px] md:w-[307px] mt-6 relative "
            src={Cassus03Img}
          />
        </div>
      </div>
    </div>
  );
}
