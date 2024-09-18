import LogoImg from "@/assets/images/logo.png";
import { ROUTES } from "@/routes/paths.route";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="h-[84px] w-full bg-white bg-opacity-10 flex flex-row items-center px-6 z-[1000]">
      <div className="sm:basis-1/5">
        <img
          onClick={() => navigate(ROUTES.LANDING_PAGE)}
          src={LogoImg}
          className="w-[186px] h-auto cursor-pointer"
        />
      </div>
      <div className="sm:basis-1/5">
        <div className="flex items-center gap-4">
          {["Markets", "Docs", "Bridge"].map((element) => (
            <div className="text-xl font-normal text-white" key={element}>
              {element}
            </div>
          ))}
        </div>
      </div>
      <div className="sm:basis-3/5">
        <button className="bg-primary h-12 rounded-lg flex items-center gap-2 ml-auto px-3">
          <span className="text-xl font-medium text-black">Enter Cassus</span>
          <ArrowIcon />
        </button>
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
