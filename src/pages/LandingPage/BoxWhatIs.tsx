import Cassus01Img from "@/assets/images/cassus-01.png";
import Cassus02Img from "@/assets/images/cassus-02.png";
import Cassus03Img from "@/assets/images/cassus-03.png";
import Cassus05Img from "@/assets/images/cassus-05.png";
import CassusBgImg from "@/assets/images/cassus-bg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Tooltip from "@/components/Tooltip";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import WhatIs from "./WhatIs";

enum Screen {
  Mobile = "Mobile",
  Tablet = "Tablet",
  Desktop = "Desktop",
  None = "",
}

export default function BoxWhatIs() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);

  const breakpoints = {
    mobile: 0,
    tablet: 640,
    desktop: 1024,
    large: 1280,
  };

  const [device, setDevice] = useState(Screen.None);

  useEffect(() => {
    // Function to determine the device type based on window width
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.desktop) {
        setDevice(Screen.Desktop);
      } else if (width >= breakpoints.tablet) {
        setDevice(Screen.Tablet);
      } else {
        setDevice(Screen.Mobile);
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
    if (device === Screen.None) return;
    if (boxRef.current) {
      const distanceX =
        device === Screen.Mobile ? 80 : device === Screen.Tablet ? 150 : 250;
      const distanceY =
        device === Screen.Mobile ? 20 : device === Screen.Tablet ? 50 : 100;
      gsap.fromTo(
        imageRefs.current[0],
        {
          x: 0,
          y:
            -distanceY +
            (device === Screen.Mobile
              ? 10
              : device === Screen.Tablet
              ? 70
              : 100),
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
          y: distanceY - (device === Screen.Mobile ? 10 : 50),
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
          x:
            device === Screen.Mobile
              ? 55
              : device === Screen.Tablet
              ? 200
              : 300,
          y:
            device === Screen.Mobile ? 50 : device === Screen.Tablet ? 30 : -60,
        },
        {
          x:
            device === Screen.Mobile
              ? 180
              : device === Screen.Tablet
              ? 320
              : 500, // Move right
          y:
            device === Screen.Mobile ? 5 : device === Screen.Tablet ? 12 : -150,
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
          x:
            device === Screen.Mobile
              ? -50
              : device === Screen.Tablet
              ? -80
              : -200,
          y:
            device === Screen.Mobile
              ? 100
              : device === Screen.Tablet
              ? 200
              : 220,
          // y: distanceY - (device === Screen.Mobile ? 10 : 50),
        },
        {
          x:
            device === Screen.Mobile
              ? -150
              : device === Screen.Tablet
              ? -280
              : -420, // Move right
          y:
            device === Screen.Mobile
              ? 130
              : device === Screen.Tablet
              ? 250
              : 240,
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
    <div
      ref={boxRef}
      className="box-container overflow-hidden relative pb-20 max-w-[1440px] mx-auto"
    >
      <div className="md:absolute relative z-10 top-0 left-0">
        <WhatIs />
      </div>
      <div className="relative  w-full md:mt-[260px]">
        <img
          className={cn(
            "min-w-[120%] relative left-[-10%] md:left-auto md:min-w-[100px] h-auto ml-auto mt-6 pt-5 md:pt-0",
            device === Screen.Mobile && ""
          )}
          src={CassusBgImg}
        />

        <div className="top-5 md:top-[80px] lg:top-[100px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <div
            className="mx-auto pl-5 md:pl-10 w-[140px] sm:h-[350px] sm:w-auto md:h-[400px] md:w-auto lg:w-auto lg:h-[508px] mt-6 relative"
            ref={el => (imageRefs.current[0] = el)}
          >
            <img className="w-full h-full" src={Cassus01Img} />
            <Tooltip
              trigger={
                <div className="text-xs md:text-lg absolute z-20 cursor-pointer top-[30px] md:top-[50px] left-[40px] md:left-[70px] translate-x-[-50%] bg-black text-primary px-2 py-1 rounded-lg">
                  Step 1
                </div>
              }
              content={
                <div className="text-black w-[222px]">
                  Deposit either ETH or any supported LST on Ethera
                </div>
              }
            />
          </div>
        </div>
        <div className="top-5 md:top-[80px] z-5 lg:top-[90px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <div
            ref={el => (imageRefs.current[1] = el)}
            className=" mx-auto pl-5 md:pl-10 w-[140px] sm:h-[350px] sm:w-auto md:h-[400px] md:w-auto lg:w-auto lg:h-[508px] mt-6 relative "
          >
            <img className="w-full h-full" src={Cassus02Img} />
          </div>
        </div>
        <div className="top-5 md:top-[80px] lg:top-[80px] items-center left-1/2 md:left-[55%] absolute -translate-x-1/2">
          <div
            ref={el => (imageRefs.current[2] = el)}
            className=" mx-auto pl-5 md:pl-10 w-[140px] sm:h-[350px] sm:w-auto md:h-[400px] md:w-auto lg:w-auto lg:h-[508px] mt-6 relative z-50 "
          >
            <img className="w-full h-full" src={Cassus03Img} />
            <Tooltip
              trigger={
                <div className="text-xs md:text-lg absolute cursor-pointer top-[30px] md:top-[50px] left-[40px] md:left-[70px] translate-x-[-50%] bg-black text-primary px-2 py-1 rounded-lg">
                  Step 3
                </div>
              }
              content={
                <div className="text-black w-[222px]">
                  Safely allocate your funds on-chain with leading crypto
                  managers
                </div>
              }
            />
          </div>
          <Tooltip
            trigger={
              <div className="text-xs md:text-lg absolute z-50 cursor-pointer top-[50px] md:top-[90px] left-[40px] md:left-[70px] translate-x-[-50%] bg-black text-primary px-2 py-1 rounded-lg">
                Step 2
              </div>
            }
            content={
              <div className="text-black w-[222px]">
                Select the optimal strategy for your goals
              </div>
            }
          />
        </div>
        <div className="top-4 md:top-[140px] lg:top-[235px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <img
            ref={el => (imageRefs.current[3] = el)}
            className=" mx-auto sm:w-[90px] w-[60px] md:w-[113px] mt-6 relative "
            src={Cassus05Img}
          />
        </div>
        <div className="top-5 md:top-[140px] lg:top-[235px] items-center left-1/2 md:left-[55%]  absolute -translate-x-1/2">
          <img
            ref={el => (imageRefs.current[4] = el)}
            className=" mx-auto w-[60px] sm:w-[90px] md:w-[113px] mt-6 relative "
            src={Cassus05Img}
          />
        </div>
      </div>
    </div>
  );
}
