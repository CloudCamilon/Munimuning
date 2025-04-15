/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */
import React from "react";

import {
  ButtonLabelLarge,
  Description,
  SectionLabel,
  Title,
} from "@/components/Typography";
import { featuredWorks } from "@/constants";
import { TProducts } from "@/models/home";
import Image from "next/image";

const Works = () => {
  return (
    <div className="flex justify-start md:justify-center items-center flex-col lg:p-20 lg:gap-20 md:gap-10 md:p-10 px-6 py-8 gap-8">
      <SectionLabel className="text-purple">WORKS</SectionLabel>
      <div className="flex w-full lg:flex-nowrap flex-wrap-reverse gap-6 lg:gap-10 justify-center">
        <div className="flex lg:gap-10 gap-6 w-full justify-center md:flex-nowrap flex-wrap">
          {featuredWorks.map((item: TProducts, index: number) => {
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
                <Title className="px-1 text-center">
                  {item.title.toUpperCase()}
                </Title>
                <Description className="text-center">
                  {item.category}
                </Description>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-full lg:w-[20%] md:w-[50%] justify-center lg:justify-start">
          <ButtonLabelLarge className="p-4 border-b-1 w-full flex justify-center border-b-purple">
            Illustration & Design
          </ButtonLabelLarge>
          <ButtonLabelLarge className="p-4 border-b-1 w-full flex justify-center border-b-purple">
            Stories & Comics
          </ButtonLabelLarge>
          <ButtonLabelLarge className="p-4 w-full flex justify-center">
            Fine Art
          </ButtonLabelLarge>
        </div>
      </div>
    </div>
  );
};

export default Works;
