/**
 * Property of B+ Studio.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the B+ Studio Product Engineering Team
 * authors: @vcamilon || @rjacobo || @abzaguirre
 */

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroSection } from "@/components/Home";
import HomeSection from "@/components/Home/HomeSection";
import { comics, featuredWorks, shop } from "@/constants";

export default function Home() {
  return (
    <div className="bg-[#0F0F0F]">
      <Header selected={"Home"} />
      <HeroSection />
      <HomeSection products={featuredWorks} title="FEATURED" />
      <HomeSection
        products={comics}
        title="STORIED & COMICS"
        layoutClassName="bg-[#494949]"
      />
      <HomeSection products={shop} title="STORIED & COMICS" />
      <Footer selected={"Home"} />
    </div>
  );
}
