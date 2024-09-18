import classes from "./prices.module.css";
import { db } from "@/db";
import PricesText from "./prices-text";

export default async function Prices() {
  let data;
  let oneConsultationPrice = "";
  let fiveConsultationsPrice = "";

  try {
    const data = await db.settings.findMany({
      where: {
        OR: [
          { field: "oneConsultationPrice" },
          { field: "fiveConsultationsPrice" },
        ],
      },
    });

    if (data) {
      const oneConsultationPriceObj = data.find(
        (element) => element.field === "oneConsultationPrice"
      );
      const fiveConsultationsPriceObj = data.find(
        (element) => element.field === "fiveConsultationsPrice"
      );

      if (oneConsultationPriceObj && oneConsultationPriceObj.value) {
        oneConsultationPrice = oneConsultationPriceObj.value;
      }
      if (fiveConsultationsPriceObj && fiveConsultationsPriceObj.value) {
        fiveConsultationsPrice = fiveConsultationsPriceObj.value;
      }
    }
  } catch (err) {
    console.log(err);
    oneConsultationPrice = "Ошибка загрузки данных. Попробуйте позднее.";
    fiveConsultationsPrice = "Ошибка загрузки данных. Попробуйте позднее.";
  }

  function formatNumberWithSpaces(number: number) {
    return number.toLocaleString("en-US").replace(/,/g, " ");
  }

  return (
    <section className={classes.prices}>
      <PricesText
        oneConsultationPrice={oneConsultationPrice}
        fiveConsultationsPrice={fiveConsultationsPrice}
      />
    </section>
  );
}
