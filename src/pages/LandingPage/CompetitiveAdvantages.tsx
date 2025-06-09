import Check from "@/assets/images/check.png";
import SquareX from "@/assets/images/square_x.png";
import { Card } from "@/components/Card";
import { cn } from "@/utils/cn";
import React from "react";
interface Capability {
  name: string;
  ilumFi: boolean | string;
  uniswapV3: boolean;
  gammaStrategies: boolean | string;
  euclidProtocol: boolean;
}

const capabilities: Capability[] = [
  {
    name: "Multi-Chain Integration",
    ilumFi: true,
    uniswapV3: false,
    gammaStrategies: false,
    euclidProtocol: true,
  },
  {
    name: "AI Liquidity Optimization",
    ilumFi: true,
    uniswapV3: false,
    gammaStrategies: "Limited",
    euclidProtocol: false,
  },
  {
    name: "Real-time Trading Insights",
    ilumFi: true,
    uniswapV3: false,
    gammaStrategies: false,
    euclidProtocol: false,
  },
  {
    name: "Real-World Asset Support",
    ilumFi: true,
    uniswapV3: false,
    gammaStrategies: false,
    euclidProtocol: false,
  },
  {
    name: "Synthetic Asset Access",
    ilumFi: "Soon",
    uniswapV3: false,
    gammaStrategies: false,
    euclidProtocol: false,
  },
  {
    name: "Community Governance",
    ilumFi: true,
    uniswapV3: true,
    gammaStrategies: false,
    euclidProtocol: false,
  },
];

const CompetitiveAdvantages: React.FC = () => {
  const renderStatus = (status: boolean | string) => {
    if (typeof status === "boolean") {
      return status ? (
        <img src={Check} alt="" className="w-4 h-4 mx-auto" />
      ) : (
        <img src={SquareX} alt="" className="w-4 h-4 mx-auto" />
      );
    }
    return <img src={Check} alt="" className="w-4 h-4 mx-auto" />;
  };

  return (
    <div className="container  p-4 flex flex-col gap-8 max-w-screen-lg mx-auto">
      <div className="button-gradient w-fit text-xs flex gap-1 uppercase">
        ilum.fi Competitive Advantages
      </div>
      <Card className="overflow-x-auto !p-0 flex-row">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-4 text-left">Capability</th>
              <th className="p-2">ilum.fi</th>
              <th className="p-2 whitespace-nowrap">Uniswap v3</th>
              <th className="p-2 whitespace-nowrap">Gamma Strategies</th>
              <th className="p-2 whitespace-nowrap">Euclid Protocol</th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((cap, index) => (
              <tr
                key={index}
                className={cn(
                  "border-b border-gray-700 text-sm",
                  index == capabilities.length - 1 && "border-b-0"
                )}
              >
                <td className="p-4 text-gradient text-sm">{cap.name}</td>
                <td className="p-2 text-green-400 whitespace-nowrap text-center relative">
                  {renderStatus(cap.ilumFi)}{" "}
                  <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-[55px]">
                    {cap.ilumFi}
                  </div>
                </td>
                <td className="p-2 text-red-400 text-center">
                  {renderStatus(cap.uniswapV3)}
                </td>
                <td className="p-2 text-green-400 whitespace-nowrap text-center relative">
                  {renderStatus(cap.gammaStrategies)}{" "}
                  <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-[70px] ">
                    {cap.gammaStrategies}
                  </div>
                </td>
                <td className="p-2 text-red-400 text-center">
                  {renderStatus(cap.euclidProtocol)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default CompetitiveAdvantages;
