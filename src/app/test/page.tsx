"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Test() {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "backInOut",
        }}
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
      ></motion.div>
    </div>
  );
}
