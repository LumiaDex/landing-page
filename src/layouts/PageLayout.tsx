import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-[#05060F] w-full overflow-hidden ">
      {children}
    </div>
  );
}
