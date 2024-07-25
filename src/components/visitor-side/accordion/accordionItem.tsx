"use client";

import { useState, useRef } from "react";
import classes from "./accordion.module.css";
import parse from "html-react-parser";

export default function AccordionItem({
  header,
  content,
  number,
}: {
  header: string;
  content: string;
  number: number;
}) {
  const [active, setActive] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const panelRef = useRef<HTMLDivElement>(null);

  const toggleActive = () => {
    // console.log("Toggle active");
    if (panelRef.current?.scrollHeight) {
      if (scrollHeight === 0) {
        setScrollHeight(panelRef.current?.scrollHeight);
      } else {
        setScrollHeight(0);
      }
    }

    setActive((active) => !active);
  };

  return (
    <>
      <button onClick={toggleActive} className={active ? classes.active : ""}>
        {`${number}. ${header}`}
      </button>
      <div
        ref={panelRef}
        className={classes.panel}
        style={{ maxHeight: scrollHeight }}
      >
        {parse(content)}
      </div>
    </>
  );
}
