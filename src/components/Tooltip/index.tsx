import { isMobile } from "@/utils/devices";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode, useState } from "react";

interface TooltipProps {
  trigger: ReactNode;
  content: ReactNode;
}

export default function Tooltip({ trigger, content }: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        delayDuration={isMobile() ? 0 : 200}
      >
        <TooltipPrimitive.Trigger
          onClick={() => {
            setOpen(!open);
          }}
          asChild
        >
          {trigger}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={isMobile() ? "top" : "bottom"}
            align="start"
            sideOffset={5}
            className="bg-primary text-black px-3 py-2 rounded-lg shadow-lg text-md"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-gray-800" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
