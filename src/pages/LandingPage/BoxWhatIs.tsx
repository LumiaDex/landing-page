import Cassus01Img from "@/assets/images/cassus-01.png";
import Cassus02Img from "@/assets/images/cassus-02.png";
import Cassus03Img from "@/assets/images/cassus-03.png";
import Cassus05Img from "@/assets/images/cassus-05.png";
import CassusBgImg from "@/assets/images/cassus-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef, useState } from "react";
import WhatIs from "./WhatIs";

export default function BoxWhatIs() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);

  const breakpoints = {
    mobile: 0,
    tablet: 640,
    desktop: 1024,
    large: 1280,
  };

  const [device, setDevice] = useState("");

  useEffect(() => {
    // Function to determine the device type based on window width
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.large) {
        setDevice("Large");
      } else if (width >= breakpoints.desktop) {
        setDevice("Desktop");
      } else if (width >= breakpoints.tablet) {
        setDevice("Tablet");
      } else {
        setDevice("Mobile");
      }
    };

    // Initial check
    updateDeviceType();

    // Add window resize event listener
    window.addEventListener("resize", updateDeviceType);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  useEffect(() => {
    console.log("device: ", device);
    if (boxRef.current) {
      const distanceX =
        device === "Mobile" ? 80 : device === "Tablet" ? 150 : 250;
      const distanceY =
        device === "Mobile" ? 20 : device === "Tablet" ? 50 : 100;
      gsap.fromTo(
        imageRefs.current[0],
        {
          x: 0,
          y:
            -distanceY +
            (device === "Mobile" ? 10 : device === "Tablet" ? 70 : 100),
        },
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
          x: 0,
          y: distanceY - (device === "Mobile" ? 10 : 50),
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
      gsap.fromTo(
        imageRefs.current[4],
        {
          x: device === "Mobile" ? 50 : device === "Tablet" ? 100 : 100,
          y: device === "Mobile" ? 40 : device === "Tablet" ? 10 : -0,
        },
        {
          x: device === "Mobile" ? 180 : device === "Tablet" ? 280 : 500, // Move right
          y: device === "Mobile" ? 10 : device === "Tablet" ? -0 : -150,
          delay: 0.5,
          scrollTrigger: {
            trigger: boxRef.current, // Trigger based on boxRef
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        imageRefs.current[3],
        {
          x: device === "Mobile" ? -50 : device === "Tablet" ? -80 : -100,
          y: device === "Mobile" ? 150 : 100,
          // y: distanceY - (device === "Mobile" ? 10 : 50),
        },
        {
          x: device === "Mobile" ? -150 : device === "Tablet" ? -280 : -420, // Move right
          y: device === "Mobile" ? 140 : device === "Tablet" ? 250 : 250,
          // y: -distanceY,
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
  }, [device]);
  return (
    <div ref={boxRef} className="box-container overflow-hidden relative pb-20">
      <WhatIs />
      <div className="relative w-full max-w-[1440px] mx-auto">
        <img className="w-auto ml-auto mt-6 pt-10 md:pt-0" src={CassusBgImg} />

        <div className="top-5 md:top-[80px] lg:top-[120px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[0] = el)}
            className=" mx-auto pl-5 md:pl-10 w-[140px] sm:w-[200px] md:w-[250px] lg:w-[307px] mt-6 relative "
            src={Cassus01Img}
          />
        </div>
        <div className="top-5 md:top-[80px] lg:top-[120px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[1] = el)}
            className=" mx-auto pl-5 md:pl-10 w-[140px] sm:w-[200px] md:w-[250px] lg:w-[307px] mt-6 relative "
            src={Cassus02Img}
          />
        </div>
        <div className="top-5 md:top-[80px] lg:top-[120px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[2] = el)}
            className=" mx-auto pl-5 md:pl-10 w-[140px] sm:w-[200px] md:w-[250px] lg:w-[307px] mt-6 relative "
            src={Cassus03Img}
          />
        </div>
        <div className="top-4 md:top-[140px] lg:top-[235px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[3] = el)}
            className=" mx-auto sm:w-[90px] w-[60px] md:w-[113px] mt-6 relative "
            src={Cassus05Img}
          />
        </div>
        <div className="top-5 md:top-[140px] lg:top-[235px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <img
            ref={(el) => (imageRefs.current[4] = el)}
            className=" mx-auto w-[60px] sm:w-[90px] md:w-[113px] mt-6 relative "
            src={Cassus05Img}
          />
        </div>
      </div>
    </div>
  );
}
