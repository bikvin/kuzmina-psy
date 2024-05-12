"use client";

import classes from "./slider.module.css";
import { SyntheticEvent, useRef, useState } from "react";

export default function Slider() {
  const [rectClasses, setRectClasses] = useState("");

  const fadeRef = useRef<HTMLDivElement>(null);

  const [sliderItems, setSliderItems] = useState([
    { position: 1, filename: "cert1.jpg", large: false },
    { position: 2, filename: "cert2.jpg", large: false },
    { position: 3, filename: "cert3.jpg", large: false },
    { position: 4, filename: "cert4.jpg", large: false },
    { position: 5, filename: "cert5.jpg", large: false },
    { position: 6, filename: "cert6.jpg", large: false },
    { position: 7, filename: "diploma1.jpg", large: false },
    { position: 8, filename: "diploma2.jpg", large: false },
    { position: 9, filename: "cert7.jpg", large: false },
    { position: 10, filename: "cert8.jpg", large: false },
    { position: 11, filename: "cert9.jpg", large: false },
    { position: 12, filename: "cert10.jpg", large: false },
    { position: 13, filename: "cert11.jpg", large: false },
    { position: 14, filename: "cert12.jpg", large: false },
    { position: 15, filename: "cert13.jpg", large: false },
    { position: 16, filename: "cert14.jpg", large: false },
    { position: 17, filename: "cert15.jpg", large: false },
    { position: 18, filename: "cert16.jpg", large: false },
    { position: 19, filename: "cert17.jpg", large: false },
    { position: 20, filename: "cert18.jpg", large: false },
    { position: 21, filename: "cert19.jpg", large: false },
    { position: 22, filename: "cert20.jpg", large: false },
    { position: 23, filename: "cert21.jpg", large: false },
    { position: 24, filename: "cert22.jpg", large: false },
    { position: 25, filename: "cert23.jpg", large: false },
    { position: 26, filename: "cert24.jpg", large: false },
    { position: 27, filename: "cert25.jpg", large: false },
    { position: 28, filename: "cert26.jpg", large: false },
  ]);

  const getTranslateString = (position: Number) => {
    return {
      transform: `translate(${100 * (+position - 3)}%, 0px)`,
    };
  };

  const leftHandler = () => {
    const newSliderItems = sliderItems.map((item) => {
      if (item.position > 1) {
        item.position--;
        return item;
      } else {
        item.position = sliderItems.length;
        return item;
      }
    });

    setSliderItems(newSliderItems);
  };

  const rightHandler = () => {
    console.log("Right button clicked");

    const newSliderItems = sliderItems.map((item) => {
      if (item.position < sliderItems.length) {
        item.position++;
        return item;
      } else {
        item.position = 1;
        return item;
      }
    });

    setSliderItems(newSliderItems);
  };

  const itemClickHandler = (e: SyntheticEvent, position: Number) => {
    const newSliderItems = sliderItems.map((item) => {
      if (item.position === position) {
        item.large = !item.large;
        return item;
      } else {
        return item;
      }
    });

    setSliderItems(newSliderItems);

    if (fadeRef.current) {
      fadeRef.current.classList.toggle(classes["fade-shown"]);
    }
  };

  return (
    <section className={classes.slider}>
      <h2 className="sectionHeader">Мои дипломы и сертификаты</h2>
      <div className={classes["slider-body"]}>
        <img
          className={`${classes.btn} ${classes["btn-left"]}`}
          src="/img/icons/ui/arrow.svg"
          alt=""
          onClick={leftHandler}
        />

        <div className={classes["slider-viewport"]}>
          {sliderItems.map((sliderItem) => {
            const smallPositions = [3, 5];
            const animatedPositions = [2, 3, 4, 5];
            const isSmall = smallPositions.includes(sliderItem.position);
            const isAnimated = animatedPositions.includes(sliderItem.position);
            let classNames = classes["slider-item"];
            if (isSmall) {
              classNames = classNames + " " + classes["small-slider-item"];
            }

            if (!isAnimated) {
              classNames = classNames + " " + classes["no-transition"];
            }

            let translateStyle: { transform: string } | {} = {};
            if (sliderItem.large) {
              classNames = classNames + " " + classes["large-slider-item"];
            } else {
              translateStyle = getTranslateString(sliderItem.position);
            }

            return (
              <div
                key={sliderItem.filename}
                className={classNames}
                style={translateStyle}
                // onClick={(evt) => itemClickHandler(evt)}
                onClick={(e) => itemClickHandler(e, sliderItem.position)}
              >
                <img src={`/img/certificates/${sliderItem.filename}`} alt="" />
              </div>
            );
          })}
        </div>
        <img
          className={`${classes.btn} ${classes["btn-right"]}`}
          src="/img/icons/ui/arrow.svg"
          alt=""
          onClick={rightHandler}
        />
      </div>
      <div ref={fadeRef} className={`${classes.fade}`}></div>
    </section>
  );
}
