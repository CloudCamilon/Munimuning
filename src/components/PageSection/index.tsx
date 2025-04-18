/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import Image from "next/image";
import {
  ButtonLabelLarge,
  ButtonLabelSmall,
  Description,
  SectionLabel,
  Title,
} from "../Typography";
import { TProducts } from "@/models/home";
import { TPageSection } from "@/models/pageSection";
import { cn } from "@/lib/utils";

// TODO: revisit the layout after finalizing it and if it's still the same with HomeSection delete this.
const PageSection = ({
  items,
  title,
  hasNavBtn,
  navBtnItems,
  layoutClassName,
}: TPageSection) => {
  const fontVariant = {
    "text-white": title !== "WORKS",
  };

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
          {items.map((item: TProducts, index: number) => {
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
                    className={cn("rounded-lg", item.className)}
                  />
                </div>
                <Title className={cn("px-1 text-center", fontVariant)}>
                  {item.title.toUpperCase()}
                </Title>
                <Description className={cn("text-center", fontVariant)}>
                  {item.category || item.price || item.version}
                </Description>
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
        {hasNavBtn && (
          <div className="flex flex-col w-full lg:w-[20%] md:w-[50%] justify-center lg:justify-start">
            {navBtnItems?.map((item, index) => {
              return (
                <ButtonLabelLarge
                  key={item}
                  className={cn(
                    "p-4 border-b-1 w-full flex justify-center border-b-purple",
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
