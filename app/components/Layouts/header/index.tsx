import { MenuIcon } from "@/components/icons";
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
}

export function Header() {
  const navigationList: HeaderNavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "曲を追加", href: "/post" },
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
                <Link to={nav.href}>{nav.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
