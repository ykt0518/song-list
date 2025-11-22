import { cn } from "@/lib/utils";
import type { IconProps } from "./type";
import { IconColorVariants } from "./type";

export function HomeIcon({ color, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 -960 960 960"
      fill="none"
      className={cn(IconColorVariants({ color }), props.className)}
    >
      <path
        d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
        fill="currentColor"
      />
    </svg>
  );
}
