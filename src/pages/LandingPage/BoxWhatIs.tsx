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
      const distanceX = isMobile() ? 150 : 600;
      const distanceY = isMobile() ? 100 : 400;
      gsap.fromTo(
        imageRefs.current[0],
        { x: isMobile() ? 100 : 200, y: -distanceY + (isMobile() ? 100 : 200) },
        {
          x: -distanceX, // Move left
          y: distanceY,
          delay: 0.5, // 0.5-second delay before starting the animation
          // ease: "power2.inOut", // Smooth easing
          scrollTrigger: {
            trigger: boxRef.current, // Trigger based on boxRef
            start: "top bottom", // Start animation when top of box reaches the bottom of viewport
            end: "bottom top", // End animation when bottom of box reaches top of viewport
            scrub: 1, // Smooth animation following the scroll
          },
        }
      );

      gsap.fromTo(
        imageRefs.current[2],
        {
          x: isMobile() ? -100 : -200,
          y: distanceY - (isMobile() ? 100 : 200),
        },
        {
          x: distanceX, // Move right
          y: -distanceY,
          delay: 0.5, // 0.5-second delay before starting the animation
          // ease: "power2.inOut", // Smooth easing
          scrollTrigger: {
            trigger: boxRef.current, // Trigger based on boxRef
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }
  }, []);
  return (
    <div ref={boxRef} className="box-container overflow-hidden relative pb-20">
      <WhatIs />
      <div className="relative w-full">
        <img className="w-auto mx-auto mt-6 pt-6 md:pt-0" src={CassusBgImg} />

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
