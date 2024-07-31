import classes from "./hero-section.module.css";
import Image from "next/image";
import mainImage from "../../../../../public/img/main.jpg";
import { db } from "@/db";
export default async function HeroSection() {
  let mainText = "";

  try {
    const mainTextObj = await db.settings.findUnique({
      where: { field: "mainText" },
    });
    if (mainTextObj && mainTextObj.value) {
      mainText = mainTextObj?.value;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="wrapper">
      <section className={classes["hero-section"]}>
        <div className={classes.left}>
          <div className={classes.imageContainer}>
            <Image src={mainImage} fill={true} alt="" />
          </div>
        </div>
        <div className={classes.right}>{mainText}</div>
      </section>
    </div>
  );
}
