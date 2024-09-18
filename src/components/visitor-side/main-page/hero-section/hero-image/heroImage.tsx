"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import classes from "./hero-image.module.css";

export default function HeroImage({
  mainImage,
}: {
  mainImage: StaticImageData;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className={classes.imageContainer}
    >
      <Image src={mainImage} fill={true} alt="" />
    </motion.div>
  );
}
