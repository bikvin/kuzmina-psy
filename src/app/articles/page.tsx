import Footer from "@/components/visitor-side/footer/footer";
import Header from "@/components/visitor-side/header";
import HeroSection from "@/components/visitor-side/articles-page/hero-section/heroSection";
import ArticlesGrid from "@/components/visitor-side/articles-page/articles-grid/atrticlesGrid";
import { data } from "./data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Статьи - Психолог Анастасия Кузьмина",
};

export default function Articles() {
  // console.log(data);

  return (
    <>
      <Header />
      <div className="page-content">
        <HeroSection />

        <ArticlesGrid />
      </div>
      <Footer />
    </>
  );
}
