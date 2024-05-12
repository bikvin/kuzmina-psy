import Footer from "@/components/visitor-side/footer/footer";
import Header from "@/components/visitor-side/header";
import HeroSection from "@/components/visitor-side/webinars-page/hero-section/heroSection";
import WebinarsGrid from "@/components/visitor-side/webinars-page/webinars-grid/webinarsGrid";

export default function Webinars() {
  return (
    <>
      <Header />
      <div className="page-content">
        <HeroSection />
        <WebinarsGrid />
      </div>
      <Footer />
    </>
  );
}
