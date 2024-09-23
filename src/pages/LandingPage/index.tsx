import FooterSession1MbImg from "@/assets/images/bg-footer-section-1-mb.png";
import FooterSession1Img from "@/assets/images/bg-footer-section-1.png";
import BgImg from "@/assets/images/landing-secction-2.png";
import StartGrayImg from "@/assets/images/start-gray.png";
import { Header } from "@/components";
import PageLayout from "@/layouts/PageLayout";
import { cn } from "@/utils/cn";

import { isMobile } from "@/utils/devices";
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
  const percentRef = useRef<HTMLDivElement>(null);

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
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <PageLayout>
      <Header />
      <div>
        <div ref={divRef}>
          <Intro />
        </div>
        <div
          style={{
            backgroundImage: `url(${
              isMobile() ? FooterSession1MbImg : FooterSession1Img
            })`,
          }}
          className={cn(
            "md:h-[402px] h-[393px] w-full bg-white bg-opacity-10 bg-left-bottom md:bg-auto backdrop-blur-[30px] bg-no-repeat",
            "flex items-center justify-center relative"
          )}
        >
          <div
            ref={percentRef}
            className="w-0 h-[1px] absolute top-0 left-0 bg-primary"
          ></div>
          <div className="flex items-center gap-3">
            <div className="md:text-[64px]  text-[32px] font-normal">
              Powered by Lumia
            </div>
            <img className="md:w-[91px] w-[40px] h-full" src={StartGrayImg} />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="text-xl font-normal tracking-[0.4em] md:hidden text-[#03d18250] text-center mb-3">
              Powered by Lumia
            </div>
            <div className="justify-between items-center h-[92px] px-12 hidden md:flex">
              {["Powered by Lumia", "Powered by Lumia", "Powered by Lumia"].map(
                (element, idx) => (
                  <>
                    <div
                      key={`running-${idx}`}
                      className="text-[#03d18250] text-xl font-normal md:tracking-[0.4em]"
                    >
                      {element}
                    </div>
                    <div className="h-6 w-[2px] bg-[#03d18250]" />
                  </>
                )
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${BgImg})`,
          }}
          className="min-h-[100vh] relative bg-cover bg-center bg-no-repeat md:pb-20 pb-10"
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
