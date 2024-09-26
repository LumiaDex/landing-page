import CardBgImg from "@/assets/images/card-roadmap.png";
import RoadmapImg from "@/assets/images/roadmap-line.png";
import StartGreenImg from "@/assets/images/start-green.png";
import UFOImg from "@/assets/images/ufo.png";
import { cn } from "@/utils/cn";

const items = [
  {
    title: "Q4",
    year: 2024,
    items: [
      "NFT Module Testnet",
      "NFT Loans Mainnet",
      "LP Collaterals Audit",
      "LP Collaterals Testnet",
    ],
  },
  {
    title: "Q1",
    year: 2025,
    items: [
      "LP Collaterals Mainnet",
      "KYC Implementation",
      "New Chain Integrations",
      "Cassus Pro Testnet",
      "Cassus Pro Mainnet",
    ],
  },
  {
    title: "Q2",
    year: 2025,
    items: [
      "RWA Audit",
      "RWA Collaterals Testnet",
      "RWA Collaterals Integration",
    ],
  },
  {
    title: "Q3",
    year: 2025,
    items: [
      "Market Data Driven Interest Rates Closed Beta",
      "Market Data Driven Interest Rates Integration",
    ],
  },
];

const Card = ({
  title,
  items,
  year,
  className,
}: {
  title: string;
  year: number;
  items: string[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-[299px] h-auto md:min-h-[260px] lg:min-h-[300px] pb-5 relative bg-contain bg-top bg-no-repeat",
        className
      )}
      // style={{
      //   backgroundImage: `url(${CardBgImg})`,
      // }}
    >
      <div>
        <img
          src={StartGreenImg}
          className="w-26 h-26 absolute left-[-50px] block md:hidden"
        />
      </div>
      <img
        className="w-full max-w-[270px] h-full absolute inset-0"
        src={CardBgImg}
      />
      <div>
        <div
          className={cn(
            "text-[40px] font-normal leading-[1.4em] ml-10 mt-3 text-black relative w-fit",
            "after:absolute after:w-full after:h-[2px] after:bg-black after:bottom-0 after:left-0 after:right-0"
          )}
        >
          {title}
          <div
            className={cn(
              "text-black absolute top-1/2 -translate-y-1/2 !text-base font-normal leading-[1.4em]",
              title === "Q4" && "left-[56px]",
              title === "Q1" && "left-[45px]",
              title === "Q2" && "left-[53px]",
              title === "Q3" && "left-[55px]"
            )}
          >
            {year}
          </div>
        </div>
      </div>
      <div className="ml-9 mt-5 md:mt-7 relative">
        <ul className="list-disc pr-1 flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item}
              className="xl:text-lg text-black text-base md:text-lg md:leading-7 leading-6 xl:leading-6 font-light"
            >
              <div className="xl:text-lg text-black text-base md:text-lg md:leading-7 leading-6 xl:leading-6 font-light pr-10 md:pr-14">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default function RoadMap() {
  return (
    <div className="mx-auto flex flex-col items-center mt-[120px] md:mt-24 relative">
      <div
        style={{
          left: "calc(50% - 182px)",
        }}
        className="absolute w-[2px] h-full top-0 bottom-0 bg-primary md:hidden"
      ></div>
      <div className="md:text-[56px] text-[40px] font-normal text-primary w-[299px] ">
        Roadmap
      </div>
      <img className="w-full hidden lg:block" src={RoadmapImg} />
      <div className="w-full max-w-[1440px] px-16 mx-auto mt-10 lg:mt-0 flex justify-center">
        <div className="flex flex-col flex-wrap lg:flex-nowrap md:flex-row gap-10 justify-around items-center lg:justify-between w-fit">
          <div className="relative">
            <Card
              className="relative lg:-top-20"
              title={items[0].title}
              items={items[0].items}
              year={items[0].year}
            />
            <img
              className="absolute md:hidden right-[-30px] top-[-10px] w-[100px]"
              src={UFOImg}
            />
          </div>
          <div className="relative">
            <Card
              className="relative lg:-top-20"
              title={items[1].title}
              items={items[1].items}
              year={items[1].year}
            />
            <img
              className="absolute md:hidden left-[-120px] bottom-[-60px] w-[130px]"
              src={UFOImg}
            />
          </div>
          <Card
            className="relative lg:-top-10"
            title={items[2].title}
            items={items[2].items}
            year={items[2].year}
          />
          <div className="relative">
            <Card
              className="relative lg:-top-20 z-10"
              title={items[3].title}
              items={items[3].items}
              year={items[3].year}
            />
            <img
              className="absolute md:hidden z-0 right-[-35px] top-[20px] w-[100px]"
              src={UFOImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
