import { Footer } from "@/components/Layouts/footer";
import { Header } from "@/components/Layouts/header";

type LayoutProps = {
  // isAuthenticated: boolean;
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow grid">{children}</div>
      <Footer />
    </div>
  );
}
