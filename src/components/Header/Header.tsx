import LogoImg from "@/assets/images/logo.png";
import { ROUTES } from "@/routes/paths.route";
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

export default function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((pre) => !pre);
  };
  return (
    <div className="h-14 lg:overflow-hidden relative lg:h-[84px] w-full lg:bg-white bg-[#262B29] lg:bg-opacity-10 flex flex-row justify-between items-center px-5 md:px-8 z-[1000]">
      <div
        style={{
          background: "rgba(37, 114, 84, 0.2)",
          filter: "blur(250px)",
        }}
        className="w-[900px] hidden lg:block left-[-20%] h-[222px] absolute z-10 rotate-[-23deg]"
      ></div>
      <div className="lg:basis-2/5 flex">
        <img
          onClick={() => navigate(ROUTES.LANDING_PAGE)}
          src={LogoImg}
          className="w-[109px] relative z-20 h-auto cursor-pointer lg:w-[145px]"
        />
        <div className="relative z-20">
          <div className="hidden lg:flex items-center gap-6 ml-24">
            {["About Us", "Features", "CASSUS Token", "Airdrop Program"].map(
              (element) => (
                <div
                  className="text-lg font-normal text-white w-max cursor-pointer"
                  key={element}
                >
                  {element}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className=" lg:basis-3/5">
        <button
          onClick={() => {
            window.open("https://app.cassus.org/");
          }}
          className="bg-primary hidden lg:flex h-12 rounded-lg items-center gap-2 ml-auto px-3"
        >
          <span className="text-lg font-medium text-black">Enter Cassus</span>
          <ArrowIcon />
        </button>
      </div>
      <div
        onClick={handleClick}
        className="lg:hidden relative z-[20] flex items-center gap-1.5"
      >
        <span className="text-primary font-bold text-xl tracking-[-0.04em] uppercase">
          Menu
        </span>
        <MenuIcon />
      </div>

      {active && (
        <>
          <div
            onClick={handleClick}
            className="absolute w-[100vw] h-[100svh] inset-0 bg-transparent z-[10000]"
          ></div>
          <div className="absolute z-[10001] top-14 bg-black rounded-[24px] border border-primary right-0 rounded-tr-none p-10">
            <div className="flex flex-col gap-10">
              <div className="text-2xl font-normal text-white">About Us</div>
              <div className="text-2xl font-normal text-white">Features</div>
              <div className="text-2xl font-normal text-white">
                CASSUS Token
              </div>
              <div className="text-2xl font-normal text-white">
                Airdrop Program
              </div>

              <button
                onClick={() => {
                  window.open("https://app.cassus.org/");
                }}
                className="bg-primary w-fit flex h-12 rounded-lg items-center gap-2 px-3"
              >
                <span className="text-xl font-medium text-black">
                  Enter Cassus
                </span>
                <ArrowIcon />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
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
