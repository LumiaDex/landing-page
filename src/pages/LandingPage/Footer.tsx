import DiscordIcon from "@/components/socials/DiscordIcon";
import TelegramIcon from "@/components/socials/TelegramIcon";
import XIcon from "@/components/socials/XIcon";

const socials = [
  {
    name: "Telegram",
    icon: TelegramIcon,
  },
  {
    name: "Discord",
    icon: DiscordIcon,
  },
  {
    name: "X",
    icon: XIcon,
  },
];
export default function Footer() {
  return (
    <div className="w-full relative flex flex-col md:flex-row items-center justify-center gap-3 mb-[30px] md:justify-between max-w-[1170px] mx-auto px-4 xl:px-0">
      <div className="text-xs text-[#97A1C0]">
        All rigths reserved. © 2024 ILUM.FI
      </div>
      <div className="flex gap-4">
        {socials.map(({ name, icon: Icon }) => (
          <Icon key={name} className="cursor-pointer" />
        ))}
      </div>
    </div>
  );
}
