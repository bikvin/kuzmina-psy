import Header from "@/components/visitor-side/header";
import HeroSection from "@/components/visitor-side/main-page/hero-section";
import Parallax from "@/components/visitor-side/main-page/parallax";
import Prices from "@/components/visitor-side/main-page/prices/prices";
import WhatIWorkWith from "@/components/visitor-side/main-page/what-i-work-with";
import WorkProgress from "@/components/visitor-side/main-page/work-progress/work-progress";
import Slider from "@/components/visitor-side/main-page/slider/slider";
import Webinars from "@/components/visitor-side/main-page/webinars/webinars";
import Accordion from "@/components/visitor-side/accordion/accordion";
import Footer from "@/components/visitor-side/footer/footer";

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
