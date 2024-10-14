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
    <div className="max-w-[1440px] md:px-16 px-5 mx-auto pt-[120px] w-full">
      <div className="text-lg md:text-2xl font-normal text-primary">
        What is Ethera?
      </div>
      <div className="flex flex-col gap-3 mt-3 md:gap-0 w-full items-center md:items-start">
        <div className="">
          <div className="md:text-[40px] text-[28px] font-normal leading-[1.4em] text-white max-w-[688px]">
            Ethera is a LRT platform that abstracts the technical, financial,{" "}
            <br />
            and risk management barriers
          </div>
        </div>
        <div className="md:mt-6 w-full">
          <div className=" text-base md:text-lg max-w-[467px] font-light leading-[1.6em] tracking-[0.02em]">
            {/* Cassus is the AI-backed, cross-chain, decentralized{" "}
            <br className="hidden md:block" /> borrowing &  lending protocol
            <br className="block md:hidden" />
            for NFTs, LPs & RWAs. */}
            For market participants, enabling easier access to the emerging
            restaking primitive.
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
