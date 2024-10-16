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
        d="M11.5857 8.72385L17.7902 1.66666H16.3199L10.9325 7.79432L6.62964 1.66666H1.66675L8.17358 10.9328L1.66675 18.3333H3.13711L8.82635 11.8623L13.3705 18.3333H18.3334L11.5853 8.72385H11.5857ZM9.57182 11.0144L8.91254 10.0917L3.6669 2.74972H5.92529L10.1586 8.67494L10.8179 9.59764L16.3206 17.2995H14.0622L9.57182 11.0148V11.0144Z"
        fill="#97A1C0"
      />
    </svg>
  );
}
