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
    <div className="max-w-[1440px] px-16 mx-auto pt-24 w-full">
      <div className="text-primary text-2xl font-light">What is Cassus?</div>
      <div className="flex flex-row w-full items-center">
        <div className="basis-3/5 ">
          <div className="text-[48px] font-normal leading-[1.4em] text-white max-w-[688px]">
            Innovate DeFi by unlocking <br /> the value of both conventional and
            unconventional assets
          </div>
        </div>
        <div className="basis-2/5 ml-auto">
          <div className=" text-xl max-w-[467px] font-light leading-[1.6em] ml-auto">
            Cassus is the AI-backed, cross-chain, <br /> decentralized borrowing
            &  lending protocol for NFTs, LPs & RWAs.
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col md:flex-row gap-6 justify-between items-center">
        {items.map(({ title, image }) => (
          <div
            key={title}
            className="flex md:flex-row flex-col items-center justify-center gap-6"
          >
            <img className="h-298 w-auto" src={image} />
            <div className="text-2xl font-normal text-white">{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
