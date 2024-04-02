import classes from "./prices.module.css";

export default function Prices() {
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
            <div className={classes.price}>4 000 руб.</div>
          </div>
          <div className={classes.service}>
            <h4 className="sectionSubHeader">5 консультаций:</h4>
            <div className={classes.comment}>только для новых клиентов</div>
            <div className={classes.price}>17 500 руб.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
