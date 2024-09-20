"use client";
import React from "react";
import { motion } from "framer-motion";
import classes from "./prices.module.css";

export default function PricesText({
  oneConsultationPrice,
  fiveConsultationsPrice,
}: {
  oneConsultationPrice: string;
  fiveConsultationsPrice: string;
}) {
  function formatNumberWithSpaces(number: number) {
    return number.toLocaleString("en-US").replace(/,/g, " ");
  }

  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "backInOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="sectionHeader">Услуги и стоимость</h2>
      <div className={classes.content}>
        <div className={classes.service}>
          <h4 className="sectionSubHeader">Консультация–знакомство:</h4>
          <div className={classes.comment}>20 мин. онлайн</div>
          <div className={classes.price}>Бесплатно</div>
        </div>
        <div className={classes.service}>
          <h4 className="sectionSubHeader">Консультация:</h4>
          <div className={classes.comment}>50 мин. онлайн/очно Москва</div>
          <div className={classes.price}>
            {formatNumberWithSpaces(+oneConsultationPrice)} руб.
          </div>
        </div>
        <div className={classes.service}>
          <h4 className="sectionSubHeader">5 консультаций:</h4>
          <div className={classes.comment}>только для новых клиентов</div>
          <div className={classes.price}>
            {formatNumberWithSpaces(+fiveConsultationsPrice)} руб.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
