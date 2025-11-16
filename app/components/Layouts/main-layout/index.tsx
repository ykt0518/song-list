import { cva } from "class-variance-authority";

type MainLayoutProps = {
  bgColor: "white" | "gray";
  children: React.ReactNode;
};

const bgColorVariants = cva("min-h-[100vh] h-full", {
  variants: {
    bgColor: {
      white: "bg-white",
      gray: "bg-gray-100",
    },
  },
});

export function MainLayout({ bgColor, children }: MainLayoutProps) {
  return <main className={bgColorVariants({ bgColor })}>{children}</main>;
}
