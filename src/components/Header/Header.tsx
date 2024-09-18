import LogoImg from "@/assets/images/face-off.png";
import { ROUTES } from "@/routes/paths.route";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="mt-8 flex items-center justify-between sticky top-3 z-[1000]">
      <img
        onClick={() => navigate(ROUTES.LANDING_PAGE)}
        src={LogoImg}
        className="w-[138px] h-auto cursor-pointer"
      />
    </div>
  );
}
