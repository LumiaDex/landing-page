import Cassus01Img from "@/assets/images/cassus-01.png";
import Cassus02Img from "@/assets/images/cassus-02.png";
import Cassus03Img from "@/assets/images/cassus-03.png";
import CassusBgImg from "@/assets/images/cassus-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";
import WhatIs from "./WhatIs";

export default function BoxWhatIs() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const rect = boxRef.current.getBoundingClientRect();
        const distanceFromTop = rect.top + window.scrollY; // Distance from the top of the page
        const boxHeight = boxRef.current.clientHeight; // Height of the box element
        const scrollY = window.scrollY; // Current scroll position

        // Calculate the percentage the box is scrolled into view
        const percentScrolled =
          -0.3 + (distanceFromTop + window.innerHeight - scrollY) / boxHeight;
        console.log();
        const height = window.innerWidth / 5;
        const spacing = percentScrolled * height;
        imageRefs.current[0]!.style.left = `${
          spacing > window.innerWidth / 5 ? 86 : spacing
        }px`;
        imageRefs.current[2]!.style.right = `${
          spacing > window.innerWidth / 5 ? 86 : spacing
        }px`;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   // GSAP animation for the images, expanding left and right (width)
  //   imageRefs.current.forEach((img) => {
  //     gsap.fromTo(
  //       img,
  //       { x: 300 },
  //       {
  //         x: -300,
  //         scrollTrigger: {
  //           trigger: ".box-container",
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div ref={boxRef} className="box-container">
      <WhatIs />
      <div className="relative w-full overflow-hidden">
        <img className="w-auto block mx-auto mt-6" src={CassusBgImg} />

        <div className="flex gap-1 top-10 md:top-20 items-center w-full absolute left-1/2 -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[0] = el)}
            className=" mx-auto w-[120px] md:w-auto mt-6 relative left-[320px]"
            src={Cassus01Img}
          />
          <img
            ref={(el) => (imageRefs.current[1] = el)}
            className=" mx-auto w-[120px] md:w-auto mt-6 relative"
            src={Cassus02Img}
          />
          <img
            ref={(el) => (imageRefs.current[2] = el)}
            className=" mx-auto w-[120px] md:w-auto mt-6 relative right-[320px]"
            src={Cassus03Img}
          />
        </div>
      </div>
    </div>
  );
}
