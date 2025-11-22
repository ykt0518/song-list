import { cn } from "@/lib/utils";
import type { IconProps } from "./type";
import { IconColorVariants } from "./type";

export function MenuIcon({ color, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 -960 960 960"
      fill="none"
      className={cn(IconColorVariants({ color }), props.className)}
    >
      <path
        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
        fill="currentColor"
      />
    </svg>
  );
}
