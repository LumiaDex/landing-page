import FooterSession1MbImg from "@/assets/images/footer-background-mb.png";
import FooterSession1Img from "@/assets/images/footer-background.png";

export default function Footer() {
  return (
    <div className="w-full  h-[512px] md:h-[673px] relative">
      <img
        className="w-full absolute hidden md:block"
        src={FooterSession1Img}
      />
      <img
        className="w-full absolute block md:hidden"
        src={FooterSession1MbImg}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group flex items-center justify-center flex-col">
        <div className="lg:text-[96px] leading-[48px] md:text-[64px] w-max lg:w-full text-[40px] font-normal text-center group-hover:text-primary transition-all duration-300">
          Enter Cassus
        </div>
        <div className="md:text-2xl text-base tracking-[0.02em] font-normal mt-2 md:mt-6 text-center md:leading-[40px] leading-[1.7em] group-hover:text-primary transition-all duration-300 w-[302px] md:w-auto">
          Unlock the value of inactive blockchain assets by infusing them  with
          liquidity and practical, novel solutions.
        </div>
      </div>
    </div>
  );
}
