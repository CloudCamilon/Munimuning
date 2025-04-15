/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

"use client";

import React from "react";
import {
  Section,
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
        "min-h-[84vh] py-20 px-10 xl:px-20 flex flex-col items-center gap-10",
        layoutClassName
      )}
    >
      <Section
        className={cn("text-purple", {
          "text-white": type !== "works",
        })}
      >
        {section}
      </Section>

      <div className="flex gap-10 w-full justify-center lg:flex-nowrap flex-wrap">
        {products.map((item: TProducts, index: number) => {
          return (
            <div
              key={`${item.alt}-${index}`}
              className="w-[16.8rem] flex flex-col items-center gap-4"
            >
              <div className="relative w-full h-[23rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
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
