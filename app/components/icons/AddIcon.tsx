import { cn } from "@/lib/utils";
import type { IconProps } from "./type";
import { IconColorVariants } from "./type";

export function AddIcon({ color, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 -960 960 960"
      fill="none"
      className={cn(IconColorVariants({ color }), props.className)}
    >
      <path
        d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
        fill="currentColor"
      />
    </svg>
  );
}
