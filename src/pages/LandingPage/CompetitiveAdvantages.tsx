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
  const renderStatus = (status: boolean | string) =>
    typeof status === "string" ? "✅ " + status : status ? "✅" : "❌";

  return (
    <div className="container  p-4 flex flex-col gap-8 max-w-screen-lg mx-auto">
      <div className="button-gradient w-fit text-xs flex gap-1 uppercase">
        ilum.fi Competitive Advantages
      </div>
      <Card className="overflow-x-auto !p-0">
        <table className="w-full text-left border-collapse min-w-[400px]">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-4 text-left">Capability</th>
              <th className="p-2">ilum.fi</th>
              <th className="p-2">Uniswap v3</th>
              <th className="p-2">Gamma Strategies</th>
              <th className="p-2">Euclid Protocol</th>
            </tr>
          </thead>
          <tbody>
            {capabilities.map((cap, index) => (
              <tr
                key={index}
                className={cn(
                  "border-b border-gray-700",
                  index == capabilities.length - 1 && "border-b-0"
                )}
              >
                <td className="p-4 text-gradient text-sm">{cap.name}</td>
                <td className="p-2 text-green-400 whitespace-nowrap text-center">
                  {renderStatus(cap.ilumFi)}
                </td>
                <td className="p-2 text-red-400 text-center">
                  {renderStatus(cap.uniswapV3)}
                </td>
                <td className="p-2 text-green-400 text-center">
                  {renderStatus(cap.gammaStrategies)}
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
