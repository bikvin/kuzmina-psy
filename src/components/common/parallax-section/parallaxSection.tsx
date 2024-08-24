"use client";
import classes from "./parallaxSection.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ParallaxSection({
  imageLink,
  height,
}: {
  imageLink: string;
  height?: number;
}) {
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
    const onScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", onScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      style={{ height: height }}
      ref={sectionRef}
      className={classes.parallaxContainer}
    >
      <div ref={innerRef} className={classes.parallaxInner}>
        <Image src={imageLink} alt="" fill={true} />
      </div>
    </section>
  );
}
