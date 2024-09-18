import { ReactNode } from "react";

export default function LayoutContainer({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1170px] mx-auto w-full relative px-2 lg:px-0 pb-32 md:pb-0">
      {children}
    </div>
  );
}
