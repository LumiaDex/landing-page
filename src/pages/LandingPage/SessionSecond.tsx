import SessionImg1 from "@/assets/images/img-session-2-1.png";
import SessionImg2 from "@/assets/images/img-session-2-2.png";
import SessionImg3 from "@/assets/images/img-session-2-3.png";
import SessionImg4 from "@/assets/images/img-session-2-4.png";
import LogoSession1 from "@/assets/images/session-2-1.svg";
import LogoSession2 from "@/assets/images/session-2-2.svg";
import LogoSession3 from "@/assets/images/session-2-3.svg";
import { Card } from "@/components/Card";
import { cn } from "@/utils/cn";

const items = [
  {
    image: SessionImg1,
  },
  {
    image: SessionImg2,
  },
  {
    image: SessionImg3,
  },
  {
    image: SessionImg4,
  },
];

export const SessionSecond = () => {
  return (
    <div className={cn(" my-40 min-h-[100svh] relative")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-fit mx-auto px-4 md:px-0">
        <div className="h-[414px] md:w-[440px] relative">
          <div className="absolute -top-2 right-6">
            <img src={items[0].image} alt="" />
          </div>
          <Card>
            <div className="max-w-[440px] flex flex-col justify-end h-full p-6 md:p-2">
              <div className=" relative flex flex-col items-start justify-end ">
                <div className="button-gradient w-fit text-xs flex gap-1 ">
                  <img src={LogoSession1} alt="" />
                  LUM
                </div>
                <div className="mt-4 mb-4 md:mb-0">
                  <div className="text-[20px] leading-[1.3em] font-normal text-gradient md:text-[28px] ">
                    LUM - the heart of ILUM, one token to rule them all
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="md:translate-y-[20%] h-[414px] md:w-[440px] relative">
          <div className="absolute top-4 right-6 ">
            <img src={items[1].image} alt="" className="rotate-[42deg]" />
          </div>
          <Card>
            <div className="max-w-[440px] flex flex-col justify-end h-full p-6 md:p-2">
              <div className=" relative flex flex-col items-start justify-end ">
                <div className="button-gradient w-fit text-xs flex gap-1 ">
                  <img src={LogoSession1} alt="" />
                  L-SWAP
                </div>
                <div className="mt-4 mb-4 md:mb-0 ">
                  <div className="text-[20px] leading-[1.3em] font-normal text-gradient md:text-[28px] ">
                    Swap and pool assets seamlessly
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="h-[414px] md:w-[440px] relative">
          <div className="absolute top-4 right-10 ">
            <img src={items[2].image} alt="" />
          </div>
          <Card>
            <div className="max-w-[440px] flex flex-col justify-end h-full p-6 md:p-2">
              <div className=" relative flex flex-col items-start justify-end ">
                <div className="button-gradient w-fit text-xs flex gap-1 ">
                  <img src={LogoSession2} alt="" />
                  L-Stake
                </div>
                <div className="mt-4 mb-4 md:mb-0 ">
                  <div className="text-[20px] leading-[1.3em] font-normal text-gradient md:text-[28px] ">
                    Earn governance tokens by staking in our streamlined
                    process.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="md:translate-y-[20%] h-[414px] md:w-[440px] relative">
          <div className="absolute -top-10 right-0 ">
            <img src={items[3].image} alt="" />
          </div>
          <Card>
            <div className="max-w-[440px] flex flex-col justify-end h-full p-6 md:p-2">
              <div className=" relative flex flex-col items-start justify-end ">
                <div className="button-gradient w-fit text-xs flex gap-1 uppercase ">
                  <img src={LogoSession3} alt="" />
                  L-Assets (coming soon)
                </div>
                <div className="mt-4 mb-4 md:mb-0 ">
                  <div className="text-[20px] leading-[1.3em] font-normal text-gradient md:text-[28px] ">
                    Boost your yield with synthetic assets for additional
                    rewards.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
