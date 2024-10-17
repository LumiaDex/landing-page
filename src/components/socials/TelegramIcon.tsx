import { ComponentPropsWithoutRef } from "react";

export default function TelegramIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.20661 12.1209L7.93091 15.8435C8.32537 15.8435 8.4962 15.6809 8.70107 15.4856L10.5504 13.7889L14.3825 16.4829C15.0852 16.8589 15.5804 16.6609 15.77 15.8622L18.2853 4.54761L18.286 4.54694C18.5089 3.54961 17.9103 3.15961 17.2256 3.40428L2.4405 8.83825C1.43145 9.21425 1.44673 9.75425 2.26897 9.99891L6.04892 11.1276L14.829 5.8536C15.2422 5.59094 15.6179 5.73627 15.3089 5.99893L8.20661 12.1209Z"
        fill="#97A1C0"
      />
    </svg>
  );
}
