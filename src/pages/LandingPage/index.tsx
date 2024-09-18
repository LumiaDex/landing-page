import ExploreIcon from "@/assets/images/explore-icon.png";
import LogoImg from "@/assets/images/face-off.png";
import LightImg from "@/assets/images/light-2.png";
import { Header } from "@/components";
import Footer from "@/components/Footer";
import ContentLayout from "@/layouts/ContentLayout";
import LayoutContainer from "@/layouts/LayoutContainer";
import PageLayout from "@/layouts/PageLayout";
import { ROUTES } from "@/routes/paths.route";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <LayoutContainer>
        <Header />
        <ContentLayout>
          <div
            className={cn(
              "absolute left-1/2 w-full -translate-x-1/2 top-1/2 -translate-y-1/2 px-6 md:px-0"
            )}
          >
            <img
              className={cn("max-w-[914px] mx-auto w-full h-auto")}
              src={LogoImg}
              alt="Logo"
            />
            <div className="flex mx-auto max-w-[914px] w-full h-auto justify-between items-center gap-6 mt-6">
              <div className="min-w-max text-xs font-normal text-white uppercase">
                Anonymous game
              </div>
              <div className="h-1  w-full relative ">
                <div className="h-[1px] bg-white bg-opacity-10 w-full absolute top-1/2 -translate-y-1/2"></div>{" "}
                <motion.div
                  initial={{
                    right: 700,
                  }}
                  whileInView={{
                    right: 0,
                  }}
                  transition={{
                    duration: 2,
                    repeatDelay: 0.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="absolute top-0"
                >
                  <img src={LightImg} />
                </motion.div>
              </div>
              <button
                onClick={() => navigate(ROUTES.GAME)}
                className={cn(
                  "flex px-5 py-4 min-w-[132px] items-center justify-center gap-2",
                  "rounded-[70px] border border-white border-opacity-10"
                )}
                style={{
                  background:
                    "radial-gradient(63.86% 63.86% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
                }}
              >
                <div className="uppercase min-w-max text-xs font-normal text-white">
                  Play now
                </div>
                <img src={ExploreIcon} className="md:w-5 md:h-5 w-4 h-4" />
              </button>
            </div>
          </div>
        </ContentLayout>
        <Footer />
      </LayoutContainer>
    </PageLayout>
  );
}
