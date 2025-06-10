import XIcon from "@/components/socials/XIcon";

const socials = [
  // {
  //   name: "Telegram",
  //   icon: TelegramIcon,
  //   link: "",
  // },
  // {
  //   name: "Discord",
  //   icon: DiscordIcon,
  //   link: "",
  // },
  {
    name: "X",
    icon: XIcon,
    link: "https://x.com/ilumfi",
  },
];
export default function Footer() {
  return (
    <div className="w-full z-50 relative flex flex-col-reverse md:flex-row items-center justify-center gap-3 mb-[30px] md:justify-between max-w-screen-2xl mx-auto px-4 xl:px-2">
      <div className="text-xs text-[#97A1C0]">
        All rigths reserved. © 2025 ilum.fi
      </div>
      <div className="flex gap-4">
        {socials.map(({ name, icon: Icon, link }) => (
          <a href={link} key={name} target="_blank">
            <Icon className="cursor-pointer" />
          </a>
        ))}
      </div>
      {/* <div className="px-6 text-xs text-[#97A1C0] py-3 rounded-full bg-button-gradient h-fit flex ">
        Powered by Lumia
      </div> */}
    </div>
  );
}
