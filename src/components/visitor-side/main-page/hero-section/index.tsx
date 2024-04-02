import classes from "./hero-section.module.css";
import Image from "next/image";
import mainImage from "../../../../../public/img/main.jpg";

export default function HeroSection() {
  return (
    <div className="wrapper">
      <section className={classes["hero-section"]}>
        <div className={classes.left}>
          <div className={classes.imageContainer}>
            <Image src={mainImage} fill={true} alt="" />
          </div>
        </div>
        <div className={classes.right}>
          Приветствую! Меня зовут Анастасия, и я психолог с преданным отношением
          к помощи людям. С уникальным подходом к каждому клиенту и вниманием к
          деталям, я стремлюсь создать поддерживающую и доверительную атмосферу.
          Моя цель – помочь вам разрешить эмоциональные трудности, обрести
          ясность и достичь личных целей. С радостью готова быть вашим
          проводником на пути к психологическому благополучию!
        </div>
      </section>
    </div>
  );
}
