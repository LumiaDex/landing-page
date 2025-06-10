import SessionImg2 from "@/assets/images/AI.png";
import SessionImg1 from "@/assets/images/cross-chain-liquidity.png";
import LogoSession1 from "@/assets/images/session-2-1.svg";
import LogoSession2 from "@/assets/images/session-2-2.svg";
import SessionImg3 from "@/assets/images/trading.png";
import { Card } from "@/components/Card";
import { cn } from "@/utils/cn";

const items = [
  {
    image: SessionImg1,
    logo: LogoSession1,
    title: [
      {
        label: "Comprehensive Interoperability",
        text: "Execute seamless trades across Ethereum, Solana, Lumia, and more.",
      },
      {
        label: "Efficient Transactions",
        text: "Deep liquidity ensures minimal slippage and rapid settlement times.",
      },
      {
        label: "Security First",
        text: "Decentralized, open-source infrastructure ensures trustless, secure cross-chain swaps.",
      },
    ],
    label: "Cross-Chain Liquidity Integration",
  },
  {
    image: SessionImg2,
    logo: LogoSession1,
    title: [
      {
        label: "Automated Optimization",
        text: "AI-driven vaults constantly manage and rebalance liquidity to maximize yields.",
      },
      {
        label: "Predictive Insights",
        text: "Sophisticated market analytics proactively adapt and inform liquidity strategies.",
      },
      {
        label: "User-Friendly Automation",
        text: "Effortlessly maximize earnings with automated liquidity provisioning.",
      },
    ],
    label: "AI-Enhanced Liquidity Management",
  },
  {
    image: SessionImg3,
    logo: LogoSession2,
    title: [
      {
        label: "Precision Analytics",
        text: "Real-Time AI market analysis identifies optimal entry and exit opportunities.",
      },
      {
        label: "Intelligent Investment",
        text: "Automated DCA strategies tailored to market dynamics, ensuring smart stability.",
      },
      {
        label: "Optimized Order Execution",
        text: "AI-driven trade execution routes provide optimal pricing and minimal costs.",
      },
    ],
    label: "Advanced Trading Capabilities",
  },
];

const Section = ({
  image,
  logo,
  title,
  label,
}: {
  image: string;
  logo: string;
  title: { label: string; text: string }[];
  label: string;
}) => (
  <div className="relative  w-full flex flex-col gap-8">
    <div className="h-[300px]">
      <img src={image} alt="" className="w-full h-full object-contain" />
    </div>
    <Card className="xl:p-2">
      <div className="flex flex-col justify-between  h-full p-6 md:p-2">
        <div className="flex flex-col items-center justify-end">
          <div className="button-gradient w-fit text-xs flex gap-1 uppercase">
            <img src={logo} alt="" />
            {label}
          </div>
          <div className="mt-4 mb-4 md:mb-0 flex flex-col gap-2">
            {title.map((item) => (
              <div
                key={item.label}
                className="font-bold text-sm text-gradient text-center"
              >
                {item.label}: <span className="font-normal">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export const SessionSecond = () => {
  return (
    <div className={cn("my-40 relative max-w-screen-lg mx-auto")}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-fit mx-auto px-4 md:px-0">
        <Section {...items[0]} />
        <Section {...items[1]} />
        <Section {...items[2]} />
      </div>
    </div>
  );
};
