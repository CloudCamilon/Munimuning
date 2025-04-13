"use client";

/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @azaguirre
 */

// import Image from "next/image";
import {
  GalleryPlus,
  Instagram,
  Komikultura,
  LinkedIn,
  MunimuniText,
} from "../../public/icons";
import { headerItems } from "@/constants";
import { NavigationItem } from "./ui/navigation-item";
import { THeaderItem } from "@/models/header";

export default function Footer({ selected }: { selected: THeaderItem }) {
  return (
    <div className="flex flex-col bg-white text-xs md:p-10 xl:p-20 px-6 py-8 sm:text-sm w-full">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex lg:flex-row">
          <div className="lg:mr-24">
            <MunimuniText />
            <div className="flex flex-row mt-4 mb-10">
              <Instagram />
              <LinkedIn />
            </div>
          </div>

          <div className="hidden lg:flex flex-col lg:flex-row sm:text-base gap-3 font-semibold">
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
        <div className="lg:hidden flex flex-col lg:flex-row sm:text-base gap-3 font-semibold">
          {headerItems.map((item, index) => (
            <NavigationItem
              key={index}
              title={item.title}
              selected={item.title === selected}
              link={item.link}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-8 md:mt-0">
          <Komikultura />
          <GalleryPlus />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between  gap-4 text-xs mt-[72px] md:mt-[80px]">
        <div className="flex gap-6 text-[#494949]">
          <p>Terms & conditions</p>
          <p>Privacy policy</p>
        </div>
        <p>©2025 MuniMuning - all rights reserved.</p>
      </div>
    </div>
  );
}
