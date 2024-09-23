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
      title: "Market Data-Driven Interest Rates",
      image: Tech1Img,
    },
    {
      title: "Cross-Chain Functionality & NFT Focus",
      image: Tech4Img,
    },
    {
      title: "Institutional-Grade Offering (Cassus Pro)",
      image: Tech5Img,
    },
    {
      title: "Partial Liquidations",
      image: Tech2Img,
    },
    {
      title: "RWA Collateral Support",
      image: Tech3Img,
    },
  ];
  return (
    <div className="max-w-[1440px] md:px-16 px-4 mx-auto pt-10 w-full">
      <fieldset className="border border-primary w-full pb-10  mx-auto rounded-[40px]">
        <legend className="md:mx-16 mx-4">
          <span className="text-primary md:text-[56px] text-[40px] font-normal px-5">
            Tech Solution
          </span>
        </legend>

        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-wrap justify-around md:justify-center md:gap-x-[100px] md:gap-y-20 ">
            {items.map(({ title, image }) => (
              <div
                className={cn(
                  "flex items-center justify-center flex-col gap-4 md:mt-0 mt-10"
                )}
              >
                <img src={image} className="md:w-[200px] w-[120px] h-auto" />
                <div className="md:text-2xl text-base max-w-[160px] md:max-w-[288px] font-light text-center">
                  {title}
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
