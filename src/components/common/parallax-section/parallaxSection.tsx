"use client";
import classes from "./parallaxSection.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ParallaxSection({ imageLink }: { imageLink: string }) {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      // console.log("rect.y", rect.y);
      // console.log("window.innerHeight ", window.innerHeight);
      // console.log("parallaxOffset", window.innerHeight - rect.y);
      // const parallaxOffset = window.innerHeight - rect.y;
      setParallaxOffset(window.innerHeight - rect.y);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Initial position
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setParallaxOffset(window.innerHeight - rect.y);
    }
  }, []);

  return (
    <section ref={componentRef} className={classes.parallaxContainer}>
      <div
        className={classes.parallaxInner}
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {/* <img src={imageLink} alt="" /> */}
        <Image src={imageLink} alt="" fill={true} />
      </div>
    </section>
  );
}
