import { ReactNode } from "react";

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  console.log(className);

  return (
    <div className="bg-[#ADCBF3]/[0.05] relative z-[1] rounded-[24px] p-[12px] border border-[#ADCBF3]/[0.06] h-full w-full">
      <div className="bg-radial-gradient relative z-[1] rounded-[14px] border border-[#ADCBF3]/[0.15] p-0 flex flex-col h-full w-full items-center gap-[20px] xl:p-[20px]">
        {children}
      </div>
    </div>
  );
};
