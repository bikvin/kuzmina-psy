"use client";
import classes from "./parallaxSection.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ParallaxSection({ imageLink }: { imageLink: string }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!sectionRef.current || !innerRef.current) return;

    // console.log(componentRef.current);
    const rect = sectionRef.current.getBoundingClientRect();

    const parallaxOffset = window.innerHeight - rect.y;

    innerRef.current.style.transform = `translateY(${parallaxOffset}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={classes.parallaxContainer}>
      <div ref={innerRef} className={classes.parallaxInner}>
        <Image src={imageLink} alt="" fill={true} />
      </div>
    </section>
  );
}
