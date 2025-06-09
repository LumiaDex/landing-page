import HeaderShadowImg from "@/assets/images/header-shadow.png";
import LogoImg from "@/assets/images/logo-header.svg";
import { ROUTES } from "@/routes/paths.route";
import { LINK_TO_APP } from "@/utils/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuIcon = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 1H0" stroke="#03D181" stroke-width="2" />
    <path d="M16 7H0" stroke="#03D181" stroke-width="2" />
    <path d="M16 13H0" stroke="#03D181" stroke-width="2" />
  </svg>
);

const Links = [
  {
    name: "Swap",
    path: LINK_TO_APP + "/swap",
  },
  {
    name: "Pools",
    path: LINK_TO_APP + "/pools",
  },
  {
    name: "Liquidity",
    path: LINK_TO_APP + "/liquidity",
  },
  {
    name: "Docs",
    path: "http://docs.ilum.fi/",
    isBlank: true,
  },
];

export default function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((pre) => !pre);
  };
  return (
    <>
      <div className="absolute top-20 left-1/2 translate-x-[-50%] w-[500px] z-[1000]">
        <img
          src={HeaderShadowImg}
          className=" cursor-pointer w-[500px] h-[400px]"
        />
      </div>
      <div className="h-14 mx-auto lg:overflow-hidden absolute top-0 left-1/2 translate-x-[-50%] lg:h-[84px] w-full  flex flex-row justify-between items-center px-2 z-[1000] max-w-screen-2xl">
        <div className="flex-1">
          <img
            onClick={() => navigate(ROUTES.LANDING_PAGE)}
            src={LogoImg}
            className="w-[109px] relative z-20 h-auto cursor-pointer lg:w-[145px] "
          />
        </div>
        <div className=" flex flex-1 justify-center">
          <div className="relative z-20 flex items-center">
            <div className="hidden lg:flex items-center gap-6 justify-center">
              {Links.map((element) => (
                <a
                  className="text-md font-normal text-white w-max cursor-pointer hover:text-[#ADCBF3]"
                  key={element.name}
                  href={element.path}
                  target={element?.isBlank ? "_blank" : "_self"}
                >
                  {element.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 ">
          <button
            onClick={() => {
              window.open(LINK_TO_APP + "/swap");
            }}
            className="button-gradient flex h-12 items-center gap-4 ml-auto !pr-2"
          >
            <span className="text-md font-medium whitespace-nowrap">
              Enter Ilum.fi
            </span>
            <ArrowIcon />
          </button>
        </div>
        {/* <div
          onClick={handleClick}
          className="lg:hidden relative z-[20] flex items-center gap-1.5"
        >
          <MenuIcon />
        </div> */}

        {active && (
          <>
            <div
              onClick={handleClick}
              className="absolute w-[100vw] h-[100svh] inset-0 bg-transparent z-[10000]"
            ></div>
            <div className="absolute z-[10001] top-14 bg-black rounded-[24px] border border-primary right-0 rounded-tr-none p-10">
              <div className="flex flex-col gap-10">
                {Links.map((element) => (
                  <a
                    href={element.path}
                    className="text-2xl font-normal text-white"
                  >
                    {element.name}
                  </a>
                ))}

                <button
                  onClick={() => {
                    window.open(LINK_TO_APP + "/swap");
                  }}
                  className="bg-gradient1 w-fit flex h-12 rounded-lg items-center gap-2 px-3"
                >
                  <span className="text-xl font-medium text-black">
                    Enter Ilum.fi
                  </span>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="white" />
      <g clip-path="url(#clip0_5_43)">
        <path
          d="M15.7747 10.893L15.3146 11.357C15.2057 11.4669 15.2057 11.6449 15.3146 11.7548L18.9199 15.3906H10.9848C10.8308 15.3906 10.7059 15.5166 10.7059 15.6719V16.3281C10.7059 16.4834 10.8308 16.6094 10.9848 16.6094H18.9199L15.3146 20.2452C15.2057 20.3551 15.2057 20.5331 15.3146 20.643L15.7747 21.107C15.8836 21.2169 16.0602 21.2169 16.1691 21.107L21.036 16.1989C21.1449 16.0891 21.1449 15.911 21.036 15.8011L16.1691 10.893C16.0602 10.7831 15.8836 10.7831 15.7747 10.893Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_43">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
