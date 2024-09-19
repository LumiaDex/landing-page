import FooterSession1Img from "@/assets/images/bg-footer-section-1.png";
import DefiGroupImg from "@/assets/images/defi-group.png";
import BgImg from "@/assets/images/landing-secction-2.png";
import StartGrayImg from "@/assets/images/start-gray.png";
import { Header } from "@/components";
import PageLayout from "@/layouts/PageLayout";
import { cn } from "@/utils/cn";

import Footer from "./Footer";
import Intro from "./Intro";
import RoadMap from "./RoadMap";
import TechSolution from "./TechSolution";
import WhatIs from "./WhatIs";

export default function LandingPage() {
  return (
    <PageLayout>
      <Header />
      <div className="pb-20">
        <Intro />
        <div
          style={{
            backgroundImage: `url(${FooterSession1Img})`,
          }}
          className={cn(
            "h-[200px] w-full bg-white bg-opacity-10 backdrop-blur-[30px] bg-no-repeat",
            "flex items-center justify-center relative"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="text-[64px] font-normal">Powered by Lumia</div>
            <img className="w-[91px] h-full" src={StartGrayImg} />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex justify-between items-center h-[92px] px-12">
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
          className="min-h-[100vh] relative bg-cover bg-center bg-no-repeat"
        >
          <WhatIs />
          <img className="w-auto mx-auto mt-6" src={DefiGroupImg} />

          <TechSolution />

          <RoadMap />
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}
