import HowWeWork from "./_components/HowWeWork";
import Faq from "@/app/(routes)/faq/_components/Faq";
import HomeComponents from "./_components/HomeComponents";
import FeaturedProfile from "@/components/FeaturedProfile";
import OurImpact from "@/app/(routes)/_components/OurImpact";
import Contact from "@/app/(routes)/contact/_components/Contact";
import ParallaxDemo from "@/app/(routes)/_components/ParallaxDemo";

export default function Home() {
  return (
    <div>
      <HomeComponents />
      <FeaturedProfile />
      <HowWeWork />
      <OurImpact />
      <ParallaxDemo />
      <Faq />
      <Contact />
    </div>
  );
}
