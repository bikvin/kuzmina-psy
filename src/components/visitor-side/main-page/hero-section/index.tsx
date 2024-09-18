import classes from "./hero-section.module.css";
import Image from "next/image";
import mainImage from "../../../../../public/img/main.jpg";
import { db } from "@/db";
import FormButton from "@/components/common/formButton";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroImage from "./hero-image/heroImage";
import HeroText from "./hero-text/hero-text";

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
          <HeroImage mainImage={mainImage} />
        </div>
        <div className={classes.right}>
          {/* <div>
            {mainText}
            <div className={classes.buttonWrapper}>
              <Link href="#contact">
                <FormButton color="mainPageBlue">Напишите мне</FormButton>
              </Link>
            </div>
          </div> */}
          <HeroText mainText={mainText} />
        </div>
      </section>
    </div>
  );
}
