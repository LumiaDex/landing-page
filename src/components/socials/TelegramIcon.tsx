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
        d="M8.43299 11.8556L8.20395 15.1129C8.53164 15.1129 8.67356 14.9706 8.84376 14.7997L10.3801 13.3151L13.5636 15.6723C14.1474 16.0013 14.5588 15.8281 14.7163 15.1293L16.8059 5.22893L16.8064 5.22835C16.9916 4.35568 16.4943 4.01443 15.9255 4.22851L3.64279 8.98326C2.80453 9.31226 2.81722 9.78476 3.50029 9.99885L6.64049 10.9864L13.9345 6.37168C14.2778 6.14185 14.5899 6.26901 14.3332 6.49885L8.43299 11.8556Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
}
