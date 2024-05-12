import classes from "./heroSection.module.css";

export default function HeroSection() {
  return (
    <section className={`parallax ${classes["webinar-hero"]}`}>
      <h1>Мои вебинары</h1>
    </section>
  );
}
