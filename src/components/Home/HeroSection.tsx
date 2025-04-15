/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative">
      <Image
        src="/hero_img.png"
        alt="hero_img"
        layout="responsive"
        width={1920}
        height={1080}
        objectFit="cover"
        priority
      />
    </div>
  );
};
