import Tech1Img from "@/assets/images/tech-1.png";
import Tech2Img from "@/assets/images/tech-2.png";
import Tech3Img from "@/assets/images/tech-3.png";
import Tech4Img from "@/assets/images/tech-4.png";
import Tech5Img from "@/assets/images/tech-5.png";
import { cn } from "@/utils/cn";

const CardItem = ({ title, image }: { title: string; image: string }) => {
  return (
    <div
      style={{
        boxShadow: "-6px 6px 0px rgba(3, 209, 129, 0.5)",
      }}
      className={cn(
        "bg-[#0F1010] border border-[#03D181] h-[348px] rounded-[40px] w-full max-w-[303px]",
        "flex items-center justify-center flex-col gap-4"
      )}
    >
      <img src={image} className="w-[200px] h-auto" />
      <div className="text-2xl max-w-[288px] font-light text-center">
        {title}
      </div>
    </div>
  );
};

export default function TechSolution() {
  const items = [
    {
      title: "Liquid Restaking",
      description:
        "Achieve liquidity with Ethera on your preferred DeFi projects",
      image: Tech1Img,
    },
    {
      title: "Simple Profit",
      description: "Maximize your assets through a broader range of activities",
      image: Tech4Img,
    },
    {
      title: "Compounded Rewards",
      description: "Expand earning rewards by staking in different protocols",
      image: Tech5Img,
    },
    {
      title: "Risk/Reward Management",
      description:
        "Customize your restaking strategies by selecting one or more networks to secure and earn yield",
      image: Tech2Img,
    },
    {
      title: "Enhance security",
      description:
        "Leverage the security provided by Ethereum’s validator network",
      image: Tech3Img,
    },
  ];
  return (
    <div className="max-w-[1440px] md:px-16 px-5 mx-auto pt-10 md:pt-20 w-full relative">
      <div
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, rgba(60, 64, 61, 0.5) 0%, rgba(11, 11, 11, 0) 100%)`,
          transform: "rotate(-25.31deg)",
        }}
        className="w-[1000px] h-[600px] absolute rounded-full -top-[10%]"
      ></div>
      <div
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, rgba(60, 64, 61, 0.5) 0%, rgba(11, 11, 11, 0) 100%)`,
        }}
        className="w-[1000px] h-[600px] absolute rounded-full -right-0 -bottom-1/3"
      ></div>
      <fieldset className="border border-primary w-full pb-10  mx-auto rounded-[40px]">
        <legend className="md:mx-16 mx-4">
          <span className="text-primary md:text-[56px] text-[40px] font-normal px-5">
            Tech Solution
          </span>
        </legend>

        <div className="h-full w-full flex items-center justify-center">
          <div className="flex md:py-10 flex-wrap justify-around md:justify-center md:gap-x-[100px] md:gap-y-20 ">
            {items.map(({ title, image, description }) => (
              <div
                className={cn(
                  "flex items-center justify-center flex-col gap-4 md:mt-0 mt-10"
                )}
              >
                <img
                  src={image}
                  className="md:w-[200px] mx-0 sm:mx-10 sm:w-[150px] w-[120px] h-auto"
                />
                <div className="md:text-2xl text-base max-w-[160px] md:max-w-[288px] font-light text-center">
                  {title}
                </div>
                <div className="md:text-md text-sm max-w-[288px] font-light text-center text-gray-400">
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </fieldset>
      {/* <div className="mt-10">
        <div className="grid grid-cols-4">
          <div>
            <div className="mt-[25%]">
              <CardItem title={items[0].title} image={items[0].image} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <CardItem title={items[1].title} image={items[1].image} />
            <CardItem title={items[2].title} image={items[2].image} />
          </div>
          <div>
            <div className="mt-[90%]">
              <CardItem title={items[3].title} image={items[3].image} />
            </div>
          </div>
          <div>
            <div className="mt-[50%]">
              <CardItem title={items[4].title} image={items[4].image} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
