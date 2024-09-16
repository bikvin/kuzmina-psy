import classes from "./heroSection.module.css";
import Parallax from "@/components/visitor-side/main-page/parallax";

export default function HeroSection() {
  return (
    <>
      <Parallax imageLink="/img/bg/webinar.jpg" hero={true}>
        <h1>Мои вебинары</h1>
      </Parallax>
    </>
  );
}
