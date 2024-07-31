import classes from "./prices.module.css";
import { db } from "@/db";

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
      <div className="wrapper">
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
      </div>
    </section>
  );
}
