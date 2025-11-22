import { AddIcon, HomeIcon, MenuIcon } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

interface HeaderNavigationItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export function Header() {
  const navigationList: HeaderNavigationItem[] = [
    { name: "Home", href: "/", icon: <HomeIcon color="gray" /> },
    { name: "曲を追加", href: "/post", icon: <AddIcon color="gray" /> },
  ];

  return (
    <header className="py-2 px-4">
      <div className="flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#333] cursor-pointer duration-300 hover:opacity-85">
            <span className="w-[24px] h-[24px]">
              <MenuIcon color="gray" />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navigationList.map((nav, index) => (
              <DropdownMenuItem key={`header-nav-${index}`}>
                <Link to={nav.href} className="flex items-center gap-2">
                  <span className="w-[24px] h-[24px] flex items-center justify-center rounded-full bg-[#333]">
                    {nav.icon}
                  </span>
                  {nav.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
