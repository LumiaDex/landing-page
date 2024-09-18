import BgImg from "@/assets/images/landing-secction-1.png";

export default function Intro() {
  return (
    <div
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
      className="pt-[84px] relative h-[937px] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-[1440px] absolute top-1/2 -translate-y-1/2 px-16 mx-auto">
        <div className="w-full max-w-[567px]">
          <h1 className="text-[64px] leading-[84px] font-normal text-white">
            Invest in DeFi, <br />
            redefine your yield
          </h1>
          <div className="text-xl leading-[32px] tracking-[0.02em] mt-3">
            A cross-chain borrowing and lending protocol for NFTs, liquidity
            positions, synthetic assets and real world assets.
          </div>
          <button className="bg-primary h-[64px] rounded-xl flex items-center gap-2 px-6 mt-10">
            <span className="text-xl font-medium text-black">Enter Cassus</span>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-[30px] ">
        <div className="flex justify-between items-center h-[92px] px-12">
          {["Powered by Lumia", "Powered by Lumia", "Powered by Lumia"].map(
            (element, idx) => (
              <>
                <div
                  key={`running-${idx}`}
                  className="text-primary text-xl font-normal md:tracking-[0.4em]"
                >
                  {element}
                </div>
                <div className="h-6 w-[1px] bg-primary" />
              </>
            )
          )}
        </div>
      </div>
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
