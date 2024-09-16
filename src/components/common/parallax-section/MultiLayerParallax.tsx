"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax({
  imageLink,
  backgroundPosition = "50%,50%",
  height = 400,
}: {
  imageLink: string;
  backgroundPosition?: string;
  height?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // ["start of the element, start of the viewport","end of the element, end of the viewport"]
  });

  const backgroundY = useTransform(() => {
    const output = `calc(${scrollYProgress.get() * 100}vh + ${
      height * scrollYProgress.get()
    }px)`;
    return output;
  });

  // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full  overflow-hidden relative grid place-items-center"
      style={{ height: height }}
    >
      <motion.div
        className="absolute w-full h-[100vh] top-[-100vh] left-0 z-0"
        style={{
          backgroundImage: `url(${imageLink})`, /// /image-full.png
          backgroundPosition: backgroundPosition,

          backgroundSize: "cover",
          y: backgroundY,
        }}
      ></motion.div>
    </div>
  );
}
