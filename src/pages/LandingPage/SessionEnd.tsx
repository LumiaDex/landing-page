import SessionImg1 from "@/assets/images/img-session-3-1.png";
import SessionImg2 from "@/assets/images/img-session-3-2.png";
import { Card } from "@/components/Card";

const data = [
  {
    image: SessionImg1,
  },
  {
    image: SessionImg2,
  },
];
export const SessionEnd = () => {
  return (
    <div className="mt-[300px] md:mb-[100px] px-4 xl:px-2 max-w-screen-lg mx-auto">
      <div className="relative w-full h-full">
        <div className="absolute top-32 -left-32 md:left-6">
          <img
            src={data[0].image}
            alt=""
            className="rotate-[30deg] scale-50 md:scale-100"
          />
        </div>
        <div className="absolute -top-40 -right-[30%] md:right-[5%]">
          <img src={data[1].image} alt="" className="scale-50 md:scale-100" />
        </div>
        <Card>
          <div className="mx-auto flex flex-col gap-4 justify-center py-8">
            <div className=" flex items-center gap-4 justify-center">
              <div>
                <Line />
              </div>
              <p className="text-[#ADCBF3]"> Swap</p>
              <div className="rotate-180">
                <Line />
              </div>
            </div>
            <div className="text-[28px] md:text-[40px] font-[500] text-gradient text-center">
              Alpha v.1 - 2025
            </div>
            <div className="text-[#97A1C0] text-[12px] md:text-[14px] text-center">
              Swap crypto at the best rates
            </div>
            <button
              className="button-gradient text-[14px] font-bold"
              // onClick={() => window.open(LINK_TO_APP + "/swap", "_blank")}
            >
              Coming soon
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <svg
      width="60"
      height="2"
      viewBox="0 0 60 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H60" stroke="url(#paint0_linear_184_4030)" />
      <defs>
        <linearGradient
          id="paint0_linear_184_4030"
          x1="60"
          y1="1.5"
          x2="0"
          y2="1.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ADCBF3" />
          <stop offset="1" stop-color="#ADCBF3" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
