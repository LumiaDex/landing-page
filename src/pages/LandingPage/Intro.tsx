import { default as BgIntro } from "@/assets/images/bg-session-1.png";
import LogoSession1 from "@/assets/images/logo-session-1.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const bgRef = useRef(null); // Reference for the background image

  // useEffect(() => {
  //   // Parallax effect on the background image
  //   gsap.to(bgRef.current, {
  //     yPercent: 50, // Adjust this value to control the parallax effect
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: bgRef.current,
  //       start: "top bottom", // When the effect starts
  //       end: "bottom top", // When the effect ends
  //       scrub: true, // Smooth scrolling effect
  //     },
  //   });
  // }, []);
  return (
    <div
      style={
        {
          // backgroundImage: `url(${BgIntro})`,
          // filter: "blur(250px)",
        }
      }
      className=" pt-16 overflow-hidden md:pt-0 relative h-[700px] md:h-[100svh]  bg-bottom bg-cover bg-no-repeat"
    >
      {/* <div
        style={{
          background: "rgba(37, 114, 84, 0.5)",
          filter: "blur(250px)",
        }}
        className="w-[900px] left-[-20%] h-[222px] absolute z-10 rotate-[-23deg]"
      ></div> */}
      <div
        style={{
          backgroundImage: `url(${BgIntro})`,
          // filter: "blur(250px)",
        }}
        className="absolute inset-0 bg-contain md:bg-cover bg-bottom mt-200px bg-no-repeat "
      ></div>
      {/* <img
        src={BgWebm}
        className="h-[370px] sm:h-[500px] md:h-full object-cover absolute bottom-[-40px] md:bottom-[-200px] left-[15%] md:left-1/4 z-0"
        alt=""
      /> */}
      <div className="max-w-[1170px] top-[20%] md:top-[35%] z-20 md:-translate-y-1/2 relative md:px-0 px-5 my-auto mx-auto">
        <div className="button-gradient w-fit text-xs flex gap-1 mx-auto">
          <img src={LogoSession1} alt="" />
          ILUM.FI
        </div>
        <div className="w-full ">
          <h1 className="text-[50px] leading-[1.3em] font-normal text-gradient md:text-[101px] md:leading-[104px] text-center">
            Welcome to <br className="md:hidden block" /> the&nbsp;
            <br className="md:block hidden" />
            New Era <br className="md:hidden block" /> of DeFi
          </h1>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="white" />
      <g clip-path="url(#clip0_5_43)">
        <path
          d="M15.7747 10.893L15.3146 11.357C15.2057 11.4669 15.2057 11.6449 15.3146 11.7548L18.9199 15.3906H10.9848C10.8308 15.3906 10.7059 15.5166 10.7059 15.6719V16.3281C10.7059 16.4834 10.8308 16.6094 10.9848 16.6094H18.9199L15.3146 20.2452C15.2057 20.3551 15.2057 20.5331 15.3146 20.643L15.7747 21.107C15.8836 21.2169 16.0602 21.2169 16.1691 21.107L21.036 16.1989C21.1449 16.0891 21.1449 15.911 21.036 15.8011L16.1691 10.893C16.0602 10.7831 15.8836 10.7831 15.7747 10.893Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_43">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
