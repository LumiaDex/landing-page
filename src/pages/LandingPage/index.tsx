import { Header } from "@/components";
import PageLayout from "@/layouts/PageLayout";

import LogoSession1 from "@/assets/images/logo-session-1.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import CompetitiveAdvantages from "./CompetitiveAdvantages";
import Footer from "./Footer";
import Intro from "./Intro";
import { SessionEnd } from "./SessionEnd";
import { SessionSecond } from "./SessionSecond";
import { SessionThird } from "./SessionThird";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const parallaxRef = useRef(null);
  const divRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const textElement = textRef.current;

  //   gsap.to(textElement, {
  //     xPercent: -100, // Move it all the way to the left (based on content width)
  //     ease: "none",
  //     duration: 10, // Adjust this for the speed you want
  //     repeat: -1, // Infinite repeat
  //   });
  // }, []);

  // useEffect(() => {
  //   gsap.to(divRef.current, {
  //     yPercent: 170,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: parallaxRef.current,
  //       scrub: true,
  //     },
  //   });

  //   window.addEventListener("scroll", () => {
  //     if (divRef.current?.clientHeight && window.scrollY) {
  //       const percent =
  //         window.scrollY > divRef.current.clientHeight
  //           ? 1
  //           : window.scrollY / divRef.current.clientHeight;
  //       percentRef.current!.style.width = `${percent * 100}%`;
  //       // textRef.current!.style.transform = `translateX(${-percent * 100}%)`;
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);
  return (
    <PageLayout>
      <div
        className="absolute top-0 left-0 right-0 h-[100px] w-[100svw] "
        style={{
          // backgroundImage: `url(${BgIntro})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Header />
      <div>
        <div ref={divRef}>
          <Intro />
        </div>
        <div className="max-w-[925px] mx-auto">
          <div className=" z-20 md:-translate-y-1/2 relative md:px-0 px-5 my-auto mx-auto ">
            <div className="button-gradient w-fit text-xs flex gap-1 mx-auto">
              <img src={LogoSession1} alt="" />
              ilum.fi
            </div>
            <div className="mt-4 ">
              <h1 className="text-[20px] leading-[1.3em] font-normal text-gradient md:text-[28px] text-center">
                ilum.fi merges cross-chain liquidity, AI-powered strategies, and
                real-world asset integration to deliver unmatched performance
                and simplicity in decentralized finance
              </h1>
            </div>
          </div>
        </div>

        <div className="min-h-[100vh] relative max-w-screen-2xl mx-auto bg-cover bg-center bg-no-repeat md:pb-20 pb-10">
          <SessionSecond />
          <SessionThird />
          <CompetitiveAdvantages />
          <SessionEnd />
        </div>
      </div>
      <Footer />
      <div className="absolute bottom-0 left-0 right-0 h-[400px] w-[100svw] bg-gradient-to-t from-[#ADCBF3]/10 to-[#ADCBF3]/0" />
    </PageLayout>
  );
}
