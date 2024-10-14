import FooterSession1MbImg from "@/assets/images/footer-background-mb.png";
import FooterSession1Img from "@/assets/images/footer-background.png";

export default function Footer() {
  return (
    <div className="w-full  relative">
      <img className="w-full  hidden md:block" src={FooterSession1Img} />
      <img className="w-full  block md:hidden" src={FooterSession1MbImg} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group w-full flex items-center justify-center flex-col"
        onClick={() => {
          window.open("https://app.reyield.xyz/restake");
        }}
      >
        <div className="lg:text-[56px] leading-[48px] md:text-[56px] w-full md:w-max text-[40px] font-normal text-center group-hover:text-primary transition-all duration-300">
          Restaking With Ethera
        </div>
        <div className="md:text-lg text-base tracking-[0.02em] font-normal mt-2 md:mt-6 text-center md:leading-[40px] leading-[1.7em] group-hover:text-primary transition-all duration-300  w-auto">
          Enjoy the advantages of capital efficiency{" "}
          <br className="md:block hidden" /> and robust network security.
        </div>
      </div>
    </div>
  );
}
