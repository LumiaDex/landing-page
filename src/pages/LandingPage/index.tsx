import { Header } from "@/components";
import PageLayout from "@/layouts/PageLayout";

import LogoSession1 from "@/assets/images/logo-session-1.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BoxWhatIs from "./BoxWhatIs";
import Footer from "./Footer";
import Intro from "./Intro";
import RoadMap from "./RoadMap";
import TechSolution from "./TechSolution";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const parallaxRef = useRef(null);
  const divRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, {
      xPercent: -100, // Move it all the way to the left (based on content width)
      ease: "none",
      duration: 10, // Adjust this for the speed you want
      repeat: -1, // Infinite repeat
    });
  }, []);

  useEffect(() => {
    gsap.to(divRef.current, {
      yPercent: 170,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        scrub: true,
      },
    });

    window.addEventListener("scroll", () => {
      if (divRef.current?.clientHeight && window.scrollY) {
        const percent =
          window.scrollY > divRef.current.clientHeight
            ? 1
            : window.scrollY / divRef.current.clientHeight;
        percentRef.current!.style.width = `${percent * 100}%`;
        // textRef.current!.style.transform = `translateX(${-percent * 100}%)`;
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <PageLayout>
      <Header />
      <div>
        <div ref={divRef}>
          <Intro />
        </div>
        <div className="max-w-[1170px] mx-auto">
          <div className=" z-20 md:-translate-y-1/2 relative md:px-0 px-5 my-auto mx-auto ">
            <div className="button-gradient w-fit text-xs flex gap-1 mx-auto">
              <img src={LogoSession1} alt="" />
              ILUM.FI
            </div>
            <div className="mt-4 ">
              <h1 className="text-[20px] leading-[1.3em] font-normal text-gradient md:text-[28px] text-center">
                Ilum is a DeFi platform that merges decentralized finance with
                real-world assets. It provides a seamless and user-friendly
                experience for exploring and providing liquidity to a diverse
                range of assets.
              </h1>
            </div>
          </div>
        </div>

        <div
          // style={{
          //   backgroundImage: `url(${BgImg})`,
          // }}
          className="min-h-[100vh] relative max-w-[1170px] mx-auto bg-cover bg-center bg-no-repeat md:pb-20 pb-10"
        >
          <BoxWhatIs />
          <TechSolution />

          <RoadMap />
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}
