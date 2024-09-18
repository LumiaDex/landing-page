import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return <div className="relative w-full">{children}</div>;
}
