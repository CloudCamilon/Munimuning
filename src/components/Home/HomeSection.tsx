/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

"use client";

import React from "react";
import {
  SectionLabel,
  Description,
  Title,
  ButtonLabelLarge,
  ButtonLabelSmall,
} from "../Typography";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { THomeSection, TProducts } from "@/models/home";
import { useRouter } from "next/navigation";

const HomeSection = ({
  layoutClassName,
  section,
  products,
  type,
}: THomeSection) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex  items-center flex-col lg:p-20 lg:gap-20 md:gap-10 md:p-10 px-6 py-8 gap-8",
        layoutClassName
      )}
    >
      <SectionLabel
        className={cn("text-purple", {
          "text-white": type !== "works",
        })}
      >
        {section}
      </SectionLabel>

      <div className="flex w-full lg:flex-nowrap gap-6 lg:gap-10 justify-start md:justify-center">
        {products.map((item: TProducts, index: number) => {
          return (
            <div
              key={`${item.alt}-${index}`}
              className="w-[7.563rem] md:w-[10.25rem] lg:w-[16.875rem] flex flex-col items-center gap-4"
            >
              <div className="relative w-full h-[8.688rem] md:h-[14.122rem] lg:h-[23.25rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <Title
                className={cn("px-1 text-center", {
                  "text-white": type !== "works",
                })}
              >
                {item.title.toUpperCase()}
              </Title>
              {item.category ? (
                <Description
                  className={cn("text-center", {
                    "text-white": type !== "works",
                  })}
                >
                  {item.category}
                </Description>
              ) : (
                <Description
                  className={cn("text-center", {
                    "text-white": type !== "works",
                  })}
                >
                  {item.price}
                </Description>
              )}

              {item.isComingSoon && (
                <div className="border-2 border-[#9E6CFF] p-4 rounded-4xl w-full text-center flex justify-center items-center">
                  <ButtonLabelSmall className="text-center">
                    Digital purchase coming soon
                  </ButtonLabelSmall>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <ButtonLabelLarge
        className={cn("text-center", {
          "text-white": type !== "works",
        })}
        onClick={() => router.push(`/${type}`)}
      >
        View all
      </ButtonLabelLarge>
    </div>
  );
};

export default HomeSection;
