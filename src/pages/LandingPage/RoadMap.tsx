import CardBgImg from "@/assets/images/card-road-map.png";
import RoadmapImg from "@/assets/images/roadmap-line.png";
import { cn } from "@/utils/cn";

const items = [
  {
    title: "Q1",
    items: [
      "NFT Module Testnet",
      "NFT Loans Mainnet",
      "LP Collaterals Audit",
      "LP Collaterals Testnet",
    ],
  },
  {
    title: "Q2",
    items: [
      "LP Collaterals Mainnet",
      "KYC Implementation",
      "New Chain Integrations",
      "Cassus Pro Testnet",
      "Cassus Pro Mainnet",
    ],
  },
  {
    title: "Q3",
    items: [
      "RWA Audit",
      "RWA Collaterals Testnet",
      "RWA Collaterals Integration",
    ],
  },
  {
    title: "Q4",
    items: [
      "Market Data Driven Interest Rates Closed Beta",
      "Market Data Driven Interest Rates Integration",
    ],
  },
];

const Card = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div
      className="w-[299px] h-auto pb-5 relative bg-contain bg-top bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${CardBgImg})`,
      // }}
    >
      <img className="w-full h-full absolute inset-0" src={CardBgImg} />
      <div
        className={cn(
          "text-[48px] font-normal leading-[1.4em] ml-10 mt-3  relative w-fit",
          "after:absolute after:w-full after:h-[2px] after:bg-primary after:bottom-0 after:left-0 after:right-0"
        )}
      >
        {title}
      </div>
      <div className="ml-9 mt-5">
        <ul className="list-disc">
          {items.map((item) => (
            <li
              key={item}
              className="xl:text-[22px] text-base md:text-lg md:leading-7 leading-6 xl:leading-[42px] font-light"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default function RoadMap() {
  return (
    <div className="mx-auto flex flex-col items-center mt-24">
      <div className="md:text-[64px] text-[32px] font-normal text-primary pb-10 md:pb-0">
        Roadmap
      </div>
      <img className="w-full hidden md:block" src={RoadmapImg} />
      <div className="w-full max-w-[1440px] px-16 mx-auto">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <Card title={items[0].title} items={items[0].items} />
          <Card title={items[1].title} items={items[1].items} />
          <Card title={items[2].title} items={items[2].items} />
          <Card title={items[3].title} items={items[3].items} />
        </div>
      </div>
    </div>
  );
}
