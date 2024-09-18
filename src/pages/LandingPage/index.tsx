import BgImg from "@/assets/images/landing-secction-2.png";
import { Header } from "@/components";
import Footer from "@/components/Footer";
import PageLayout from "@/layouts/PageLayout";
import { useNavigate } from "react-router-dom";
import Intro from "./Intro";
import TechSolution from "./TechSolution";
import WhatIs from "./WhatIs";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Header />
      <div>
        <Intro />
        <div
          style={{
            backgroundImage: `url(${BgImg})`,
          }}
          className="min-h-[100vh] relative bg-cover bg-center bg-no-repeat"
        >
          <WhatIs />
          <TechSolution />
        </div>
      </div>
      <Footer />
    </PageLayout>
  );
}
