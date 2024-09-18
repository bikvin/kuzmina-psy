"use client";
import React from "react";
import { motion } from "framer-motion";
import FormButton from "@/components/common/formButton";
import classes from "../hero-section.module.css";
import { strict } from "assert";
import Link from "next/link";

export default function HeroText({ mainText }: { mainText: string }) {
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
    >
      {mainText}
      <div className={classes.buttonWrapper}>
        <Link href="#contact">
          <FormButton color="mainPageBlue">Напишите мне</FormButton>
        </Link>
      </div>
    </motion.div>
  );
}
