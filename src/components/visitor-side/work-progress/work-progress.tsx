import classes from "./work-progress.module.css";

export default function WorkProgress() {
  return (
    <section className={classes["work-progress"]}>
      <div className="wrapper">
        <h2 className="sectionHeader">Как будет строиться наша работа</h2>

        <div className={classes.content}>
          <div className={classes.stage}>
            <div className={classes.label}>
              <h4 className="sectionSubHeader">
                Бесплатный <span className="nowrap"> звонок–знакомство</span>
              </h4>
              <div className={classes.comment}>20 мин.</div>
            </div>

            <ul>
              <li>Мы познакомимся</li>
              <li>Вы расскажете мне о том, с чем хотите работать</li>
              <li>Я познакомлю вас с КПТ-подходом и с тем, как я работаю</li>
            </ul>
          </div>
          <div className={classes.stage}>
            <div className={classes.label}>
              <h4 className="sectionSubHeader">
                <span className={classes.number}>1</span> этап
              </h4>
              <div className={classes.comment}>1–2 консультации</div>
            </div>

            <ul>
              <li>Сбор анамнеза</li>
              <li>Прояснение и постановка целей терапии</li>
              <li>Тестирование (перед 1 сессией)</li>
              <li>Обучение навыкам</li>
            </ul>
          </div>
          <div className={classes.stage}>
            <div className={classes.label}>
              <h4 className="sectionSubHeader">
                <span className={classes.number}>2</span>
                <span className={classes["stage-label"]}> этап</span>
              </h4>
              <div className={classes.comment}>Работа над вашим запросом</div>
            </div>

            <ul>
              <li>
                Работа на сессиях (с вашими мыслями, эмоциями, поведением)
              </li>
              <li>Домашние задания для более эффективного результата</li>
              <li>Библиотерапия</li>
            </ul>
          </div>
          <div className={classes.stage}>
            <div className={classes.label}>
              <h4 className="sectionSubHeader">
                <span className={classes.number}>3</span> этап
              </h4>
              <div className={classes.comment}>Заключительный</div>
            </div>

            <ul>
              <li>
                Проведение завершающей сессии с подведением итогов и
                составлением плана самопомощи при необходимости
              </li>
              <li>Возможны буферные встречи 1–2 раза в месяц</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
