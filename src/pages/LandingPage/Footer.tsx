import FooterSession1Img from "@/assets/images/footer-background.png";

export default function Footer() {
  return (
    <div className="w-full relative">
      <img className="w-full" src={FooterSession1Img} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
        <div className="text-[96px] font-normal text-center group-hover:text-primary transition-all duration-300">
          Enter Cassus
        </div>
        <div className="text-2xl font-normal text-center leading-[40px] group-hover:text-primary transition-all duration-300">
          Unlock the value of inactive blockchain assets by infusing them  with
          liquidity and practical, novel solutions.
        </div>
      </div>
    </div>
  );
}
