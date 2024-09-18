import bgImage from "@/assets/images/background.webp";
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative ">
      <div
        className="h-[100vh] z-[-1] fixed top-0 left-0 right-0 overflow-y-hidden w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${bgImage}")` }}
      ></div>
      {children}
    </div>
  );
}
