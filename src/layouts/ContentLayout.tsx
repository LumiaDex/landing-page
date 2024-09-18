import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/utils/constant";
import { ReactNode } from "react";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full relative overflow-y-auto flex flex-col justify-center"
      style={{
        minHeight: `calc(100svh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px)`,
      }}
    >
      {children}
    </div>
  );
}
