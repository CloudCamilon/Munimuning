/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

"use client";

import Image from "next/legacy/image";
import {
  ButtonLabelLarge,
  ButtonLabelSmall,
  Description,
  SectionLabel,
  Title,
} from "../Typography";
import { TProduct } from "@/models/home";
import { TPageSection } from "@/models/pageSection";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const PageSection = ({
  items,
  title,
  hasNavBtn,
  navBtnItems,
  layoutClassName,
}: TPageSection) => {
  const router = useRouter();

  const fontVariant = {
    "text-white": title !== "WORKS",
  };

  const handleRoutePage = useCallback(
    (item: TProduct) => {
      const titleToPath: Record<string, string> = {
        "Stories & Comics": "stories-comics",
        Works: "works",
        Shop: "shop",
      };

      const path = titleToPath[title] || "";

      if (path && item.id) {
        router.push(`/${path}/view/${item.id}`);
      }
    },
    [title, router]
  );

  return (
    <div
      className={cn(
        "flex justify-start md:justify-center items-center flex-col lg:p-20 lg:gap-20 md:gap-10 md:p-10 px-6 py-8 gap-8",
        layoutClassName
      )}
    >
      <SectionLabel className="text-purple">{title}</SectionLabel>
      <div className="flex w-full lg:flex-nowrap flex-wrap-reverse gap-6 lg:gap-10 justify-center">
        <div className="flex lg:gap-10 gap-6 w-full justify-center md:flex-nowrap flex-wrap">
          {items.map((item: TProduct, index: number) => {
            return (
              <div
                key={`${item.alt}-${index}`}
                className={cn(
                  "w-[7.563rem] md:w-[10.25rem] lg:w-[16.875rem] flex flex-col items-center gap-4",
                  {
                    "cursor-pointer group": item.hasView,
                  }
                )}
                onClick={() => item.hasView && handleRoutePage(item)}
              >
                <div className="relative w-full h-[8.688rem] md:h-[14.122rem] lg:h-[23.25rem]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className={cn("rounded-lg", item.className)}
                  />
                </div>
                <Title
                  className={cn(
                    "px-1 text-center group-hover:cursor-pointer",
                    fontVariant
                  )}
                >
                  {item.title.toUpperCase()}
                </Title>
                <Description
                  className={cn(
                    "text-center group-hover:cursor-pointer",
                    fontVariant
                  )}
                >
                  {item.category || item.price || item.version}
                </Description>
                {item.isComingSoon && (
                  <div className="border-2 border-[#9E6CFF] p-4 rounded-4xl w-full text-center flex justify-center items-center">
                    <ButtonLabelSmall className="text-center group-hover:cursor-pointer">
                      Digital purchase coming soon
                    </ButtonLabelSmall>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {hasNavBtn && (
          <div className="flex flex-col w-full lg:w-[20%] md:w-[50%] justify-center lg:justify-start">
            {navBtnItems?.map((item, index) => {
              return (
                <ButtonLabelLarge
                  key={item}
                  className={cn(
                    "p-4 border-b-1 w-full flex justify-center border-b-purple cursor-pointer",
                    {
                      "border-b-0": index === navBtnItems.length - 1,
                    }
                  )}
                >
                  {item}
                </ButtonLabelLarge>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default PageSection;
