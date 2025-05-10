/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @abzaguirre
 */

import { HeroSection } from "@/components/Home";
import HomeSection from "@/components/Home/HomeSection";
import { comicsItems, featuredWorks, shopItems } from "@/constants";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <HeroSection />
      <HomeSection products={featuredWorks} section="Featured" type="works" />
      <HomeSection
        products={comicsItems}
        section="Stories & Comics"
        layoutClassName="bg-[#141517]"
        type="stories-comics"
      />
      <HomeSection
        products={shopItems}
        section="Shop"
        layoutClassName="bg-[#514983]"
        type="shop"
      />
    </div>
  );
}
