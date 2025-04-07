/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @rjacobo || @abzaguirre
 */

import React from "react";
import { Label, LabelPrice, SubLabel, Title } from "../Typography";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { THomeSection, TProducts } from "@/models/home";

const HomeSection = ({ layoutClassName, title, products }: THomeSection) => {
  return (
    <div
      className={cn(
        "min-h-[84vh] py-20 px-10 xl:px-20 flex flex-col items-center gap-10",
        layoutClassName
      )}
    >
      <Title className="text-purple">{title}</Title>

      <div className="flex gap-10 w-full justify-center lg:flex-nowrap flex-wrap">
        {products.map((item: TProducts, index: number) => {
          return (
            <div
              key={`${item.alt}-${index}`}
              className="w-[16rem] flex flex-col items-center gap-4"
            >
              <div className="relative w-full h-[23rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Label className="px-1 text-center">
                {item.title.toUpperCase()}
              </Label>
              {item.category ? (
                <SubLabel className="text-center">{item.category}</SubLabel>
              ) : (
                <LabelPrice className="text-center">{item.price}</LabelPrice>
              )}
            </div>
          );
        })}
      </div>

      <SubLabel className="text-center">View all</SubLabel>
    </div>
  );
};

export default HomeSection;
