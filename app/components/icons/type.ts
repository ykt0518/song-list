import { cva } from "class-variance-authority";

export type IconVariantsProps = {
  color: "white" | "black" | "gray";
};

export const IconColorVariants = cva("w-full h-full", {
  variants: {
    color: {
      white: "text-white",
      black: "text-[#333]",
      gray: "text-gray-100",
    },
  },
});

export type IconProps = React.SVGProps<SVGSVGElement> & IconVariantsProps;
