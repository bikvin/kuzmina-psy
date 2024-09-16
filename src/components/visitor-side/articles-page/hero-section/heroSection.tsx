import Parallax from "@/components/visitor-side/main-page/parallax";

export default function HeroSection() {
  return (
    <Parallax imageLink="/img/bg/article.jpg" hero={true}>
      <h1>Мои статьи</h1>
    </Parallax>
  );
}
