import BgImg from "@/assets/images/landing-secction-2.png";
import { Header } from "@/components";
import PageLayout from "@/layouts/PageLayout";
import { cn } from "@/utils/cn";

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
    // gsap.to(divRef.current, {
    //   yPercent: 170,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: parallaxRef.current,
    //     scrub: true,
    //   },
    // });

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
          className={cn(
            "md:h-[104px] h-[84px] w-full bg-white bg-opacity-10 bg-left-bottom md:bg-auto backdrop-blur-[30px]",
            "flex items-center justify-center relative overflow-hidden"
          )}
        >
          <div
            ref={percentRef}
            className="w-0 h-[1px] absolute top-0 left-0 bg-primary"
          ></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0  right-0">
            <div
              ref={textRef}
              className="justify-between items-center h-[92px] px-12 w-full flex gap-20"
            >
              {new Array(50).fill("Powered by Lumia").map((element, idx) => (
                <>
                  <div
                    key={`running-${idx}`}
                    className="text-[#03d18250] text-xl min-w-max relative font-normal md:tracking-[0.4em]"
                  >
                    {element}
                    <div className="h-6 absolute -left-10 top-1/2 -translate-y-1/2 w-[2px] bg-[#03d18250]" />
                  </div>
                </>
              ))}
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
