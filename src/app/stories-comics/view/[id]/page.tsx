"use client";

import { ButtonLabelLarge, Description, Title } from "@/components/Typography";
import { comicsItems } from "@/constants";
import Image from "next/legacy/image";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";

const ViewStoriesAndComics = () => {
  const { id } = useParams();

  const productDetail = useMemo(
    () => comicsItems.find((item) => item.id === id),
    [id]
  );

  if (!productDetail) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <p className="text-xl">Product not found</p>
      </div>
    );
  }

  return (
    <div className="flex w-screen justify-center">
      <div className="xl:w-1/2 lg:p-20 lg:gap-10 py-8 px-6 w-screen gap-10 flex flex-col">
        {/* Product Information */}
        <div className="flex gap-10 flex-wrap md:flex-nowrap">
          <div className="w-[21.56rem] relative h-[29.70rem] rounded-lg">
            <Image
              src={productDetail?.src ?? ""}
              alt={productDetail?.title ?? ""}
              layout="fill"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 md:w-1/2  w-screen">
            <Title>{productDetail?.title}</Title>
            <Description>{productDetail?.year}</Description>
            <Description>{productDetail?.description}</Description>
            {productDetail?.isComingSoon && (
              <div className="border-2 border-[#9E6CFF] p-4 rounded-4xl w-full text-center flex justify-center items-center">
                <ButtonLabelLarge className="text-center text-black">
                  Digital purchase coming soon
                </ButtonLabelLarge>
              </div>
            )}
          </div>
        </div>
        {/* Gallery */}
        <div className="flex gap-6">
          {productDetail?.gallery?.map((item) => {
            return (
              <div
                key={item}
                className="w-[10.25rem] relative h-[14rem] rounded-lg"
              >
                <Image
                  src={item}
                  alt={item}
                  layout="fill"
                  priority
                  className="rounded-lg object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewStoriesAndComics;
