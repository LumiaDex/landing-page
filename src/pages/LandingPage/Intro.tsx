import BgMP4 from "@/assets/video/steel.mp4";
import BgWebm from "@/assets/video/steel.webm";
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
      ref={bgRef}
      className=" pt-16 overflow-hidden md:pt-0 relative md:h-[937px] h-[800px] bg-cover bg-center bg-no-repeat"
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        className=" h-2/3 md:h-full object-cover absolute bottom-0 md:left-1/4 z-0"
      >
        <source src={BgWebm} type="video/webm" />
        <source src={BgMP4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-[1440px] md:top-1/2 md:-translate-y-1/2 relative md:px-16 px-4 my-auto mx-auto">
        <div className="w-full max-w-[567px]">
          <h1 className="text-[40px] leading-[1.3em] font-normal text-white md:text-[64px] md:leading-[84px]">
            Invest in DeFi, <br />
            redefine your yield
          </h1>
          <div className="text-[#C0C0C0] md:text-white text-base md:text-xl leading-[32px] tracking-[0.02em] mt-3">
            A cross-chain borrowing and lending protocol for NFTs, liquidity
            positions, synthetic assets and real world assets.
          </div>
          <button
            onClick={() => {
              window.open("https://app.cassus.org/");
            }}
            className="bg-primary h-12 md:h-[64px] rounded-xl flex items-center gap-2 px-3 md:px-6 mt-10"
          >
            <span className="text-base md:text-xl font-medium text-black">
              Enter Cassus
            </span>
            <ArrowIcon />
          </button>
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
