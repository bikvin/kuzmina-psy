import Header from "@/components/visitor-side/header";
import HeroSection from "@/components/visitor-side/main-page/hero-section";
import Parallax from "@/components/visitor-side/main-page/parallax";
import Prices from "@/components/visitor-side/main-page/prices/prices";
import WhatIWorkWith from "@/components/visitor-side/main-page/what-i-work-with";
import WorkProgress from "@/components/visitor-side/work-progress/work-progress";
import Slider from "@/components/visitor-side/slider/slider";
import Webinars from "@/components/visitor-side/webinars/webinars";
import Accordion from "@/components/accordion/accordion";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="page-content">
        <HeroSection />
        <WhatIWorkWith />
        <Parallax image="face" />
        <Prices />
        <Parallax image="exit" />
        <WorkProgress />
        <Parallax image="exit2" />
        <Slider />
        <Parallax image="sofa" />
        <Webinars />
        <Parallax image="webinar2" />
        <Accordion />
        <Footer />
      </div>
    </>
  );
}
