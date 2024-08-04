import Footer from "@/components/visitor-side/footer/footer";
import Header from "@/components/visitor-side/header";
import HeroSection from "@/components/visitor-side/webinars-page/hero-section/heroSection";
import WebinarsGrid from "@/components/visitor-side/webinars-page/webinars-grid/webinarsGrid";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вебинары - Психолог Анастасия Кузьмина",
};

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
