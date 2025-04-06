"use client";

/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @azaguirre
 */

import Link from "next/link";
import { JSX, useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HeaderItem = "Home" | "Works" | "Stories & Comics" | "Shop" | "About";

const HeaderItems = [
  { title: "Home", link: "/" },
  { title: "Works", link: "/" },
  { title: "Stories & Comics", link: "/" },
  { title: "Shop", link: "/" },
  { title: "About", link: "/" },
];

const HeaderItem = ({
  title,
  selected,
  link,
}: {
  title: string;
  selected?: boolean;
  link: string;
}): JSX.Element => {
  return (
    <Link href={link}>
      <div
        className={`
          font-semibold
         text-black
           text-sm
           ${selected ? "font-bold underline" : "font-normal"} cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  );
};

export default function Header({ selected }: { selected: HeaderItem }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  return (
    <div className="relative">
      <DropdownMenu>
        <div className="flex sticky bg-[#FFF] py-5 justify-between z-50 top-0 w-page md:h-[110px] lg:h-[142px] px-6 md:px-10 lg:px-20 items-center">
          <div className="flex">
            <Image
              src={"./munimuning.svg"}
              alt={"Munimuning Logo"}
              width={170}
              height={32}
            />
          </div>
          <DropdownMenuTrigger>
            <div className=" md:hidden w-full flex justify-end">
              <Image
                className="md:hidden"
                src={"./menu.svg"}
                alt={"Menu Logo"}
                width={24}
                height={24}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          </DropdownMenuTrigger>

          <div className="hidden md:flex flex-wrap flex-row gap-6">
            {HeaderItems.map((item, index) => (
              <HeaderItem
                key={index}
                title={item.title}
                selected={item.title === selected}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <DropdownMenuContent className="w-screen mt-7.5 text-center border-0 rounded-none">
          {HeaderItems.map((item, index) => (
            <DropdownMenuItem
              className="text-center justify-center"
              key={index}
            >
              <HeaderItem
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
