import SessionImg1 from "@/assets/images/img-session-2-1.png";
import SessionImg2 from "@/assets/images/img-session-2-2.png";
import SessionImg3 from "@/assets/images/img-session-2-3.png";
import LogoSession1 from "@/assets/images/session-2-1.svg";
import LogoSession2 from "@/assets/images/session-2-2.svg";
import { Card } from "@/components/Card";
import { cn } from "@/utils/cn";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    image: SessionImg1,
    logo: LogoSession1,
    title: [
      {
        label: "L-Swap",
        text: "Cross-chain swaps executed quickly at competitive rates.",
      },
    ],
    label: "L-Swap",
  },
  {
    image: SessionImg2,
    logo: LogoSession1,
    title: [
      {
        label: "L-Stake",
        text: "Simplified staking with automated rewards compounding.",
      },
    ],
    label: "L-Stake",
  },
  {
    image: SessionImg3,
    logo: LogoSession2,
    title: [
      {
        label: "$ILM Token",
        text: "Empowering community governance and rewarding participation.",
      },
    ],
    label: "$ILM Token",
  },
];

const Section = ({
  logo,
  title,
  label,
}: {
  logo: string;
  title: { label: string; text: string }[];
  label: string;
}) => (
  <div className="relative w-full flex flex-col gap-8">
    <Card className="items-start p-2 md:p-6">
      <div className="flex flex-col justify-between h-full p-6 md:p-2">
        <div className="flex flex-col items-center md:items-start justify-end">
          <div className="button-gradient w-fit text-xs flex gap-1 uppercase">
            <img src={logo} alt="" />
            {label}
          </div>
          <div className="mt-4 mb-4 md:mb-0 flex flex-col gap-2">
            {title.map((item) => (
              <div
                key={item.label}
                className="font-bold text-gradient text-xl md:text-2xl max-md:text-center"
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export const SessionThird = () => {
  return (
    <div className={cn("my-40 relative max-w-screen-lg mx-auto")}>
      <div className="flex flex-col-reverse md:flex-row gap-6 w-full mx-auto px-4 md:px-0 items-center">
        <div className="flex w-fit flex-col gap-6">
          <Section {...items[0]} />
          <Section {...items[1]} />
          <Section {...items[2]} />
        </div>
        <div className="md:w-1/2 h-[200px] md:h-[300px]">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="h-full"
          >
            <SwiperSlide>
              <img
                src={SessionImg1}
                alt="Graphic"
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={SessionImg2}
                alt="Graphic"
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={SessionImg3}
                alt="Graphic"
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
