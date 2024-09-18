import { cn } from "@/utils/cn";
import { FOOTER_HEIGHT } from "@/utils/constant";
import DiscordIcon from "../socials/DiscordIcon";
import TelegramIcon from "../socials/TelegramIcon";
import XIcon from "../socials/XIcon";

export default function Footer() {
  return (
    <div
      className="mb-auto"
      style={{
        height: FOOTER_HEIGHT,
      }}
    >
      <div className="flex items-center gap-3 md:justify-between md:flex-row flex-col-reverse">
        <span className="text-xs font-normal text-white text-opacity-30">
          All rights reserved. © 2024 Face-off
        </span>
        <div className="flex items-center gap-5">
          {["Terms & Use", "Privacy Policy", "hello@face-off.io"].map(text => (
            <span
              className="text-xs font-normal text-white text-opacity-30"
              key={text}
            >
              {text}
            </span>
          ))}
        </div>
        <div className={cn("flex gap-6 md:gap-4 items-center")}>
          <TelegramIcon className="cursor-pointer" onClick={() => {}} />
          <XIcon className="cursor-pointer" onClick={() => {}} />
          <DiscordIcon className="cursor-pointer" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
