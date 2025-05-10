"use client";

/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @azaguirre
 */

import { useState } from "react";
import Image from "next/legacy/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { headerItems } from "@/constants";
import { NavigationItem } from "./ui/navigation-item";
import { usePathname } from "next/navigation";
import { THeaderItem } from "@/models/header";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const pathName = usePathname();

  const headerLink: Record<string, THeaderItem> = {
    "/": "Home",
    "/works": "Works",
    "/stories-comics": "Stories & Comics",
    "/shop": "Shop",
    "/about": "About",
  };

  const selected = headerLink[pathName];

  return (
    <div className="relative">
      <DropdownMenu>
        <div className="flex sticky bg-[#FFF] py-5 justify-between z-50 top-0 w-page md:h-[110px] lg:h-[142px] px-6 md:px-10 lg:px-20 items-center">
          <div className="flex">
            <Image
              src={"/munimuning.svg"}
              alt={"Munimuning Logo"}
              width={170}
              height={32}
            />
          </div>
          <DropdownMenuTrigger>
            <div className="md:hidden w-full flex justify-end">
              <Image
                className="md:hidden hover:cursor-pointer"
                src={"/menu.svg"}
                alt={"Menu Logo"}
                width={24}
                height={24}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          </DropdownMenuTrigger>

          <div className="hidden md:flex flex-wrap flex-row gap-6">
            {headerItems.map((item, index) => (
              <NavigationItem
                key={index}
                title={item.title}
                selected={item.title === selected}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <DropdownMenuContent className="w-screen mt-7.5 text-center border-0 rounded-none">
          {headerItems.map((item, index) => (
            <DropdownMenuItem
              className="text-center justify-center"
              key={index}
            >
              <NavigationItem
                key={index}
                title={item.title}
                selected={item.title === selected}
                link={item.link}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Header;
