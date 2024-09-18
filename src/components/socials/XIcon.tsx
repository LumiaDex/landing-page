import { ComponentPropsWithoutRef } from "react";

export default function XIcon(props: ComponentPropsWithoutRef<"svg">) {
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
        d="M13.8343 4.16666H15.8788L11.4121 9.10853L16.6668 15.8333H12.5524L9.32987 11.7548L5.64256 15.8333H3.59678L8.37438 10.5474L3.3335 4.16666H7.55232L10.4652 7.89461L13.8343 4.16666ZM13.1167 14.6487H14.2496L6.93678 5.28904H5.72104L13.1167 14.6487Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}
