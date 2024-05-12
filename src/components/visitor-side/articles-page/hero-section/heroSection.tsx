import classes from "./heroSection.module.css";

export default function HeroSection() {
  return (
    <section className={`parallax ${classes["article-hero"]}`}>
      <h1>Мои статьи</h1>
    </section>
  );
}
