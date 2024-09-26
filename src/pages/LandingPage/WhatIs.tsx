import DefiImg from "@/assets/images/defi.png";
import InstitutionsImg from "@/assets/images/institutions.png";
import InvestorImg from "@/assets/images/investors.png";

export default function WhatIs() {
  const items = [
    {
      title: "Defi Expert",
      image: DefiImg,
    },
    {
      title: "Institutions",
      image: InstitutionsImg,
    },
    {
      title: "Web3 investors",
      image: InvestorImg,
    },
  ];

  return (
    <div className="max-w-[1440px] md:px-16 px-4 mx-auto pt-[120px] md:pt-24 w-full">
      <div className="text-lg md:text-2xl font-normal text-primary">
        What is Cassus?
      </div>
      <div className="flex flex-col gap-3 mt-3 md:gap-0 w-full items-center md:items-start">
        <div className="">
          <div className="md:text-[48px] text-[32px] font-normal md:leading-[1.4em] leading-[1.2em] text-white max-w-[688px]">
            Innovate DeFi by <br className="md:hidden block" /> unlocking{" "}
            <br className="hidden md:block" /> the value of
            <br className="md:hidden block" /> both conventional and
            unconventional assets
          </div>
        </div>
        <div className="md:mt-6 w-full">
          <div className=" text-base md:text-xl max-w-[467px] font-light leading-[1.6em]">
            Cassus is the AI-backed, cross-chain, <br /> decentralized borrowing
            &  lending protocol for NFTs, LPs & RWAs.
          </div>
        </div>
      </div>
      {/* <div className="mt-24 flex flex-col md:flex-row gap-6 justify-between items-center">
        {items.map(({ title, image }) => (
          <div
            key={title}
            className="flex md:flex-row flex-col items-center justify-center gap-6"
          >
            <img className="h-298 w-auto" src={image} />
            <div className="text-2xl font-normal text-white">{title}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
