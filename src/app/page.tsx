import Header from "@/components/Header";
import { HeroSection } from "@/components/Home";
import HomeSection from "@/components/Home/HomeSection";
import { comics, featuredWorks, shop } from "@/constants/works";

export default function App() {
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
    </div>
  );
}
