import classes from "./what-i-work-with.module.css";
import Image from "next/image";

export default function WhatIWorkWith() {
  return (
    <section className={classes["what-i-work-with"]}>
      <div className="wrapper">
        <h2 className="sectionHeader">Запросы, с которыми я работаю</h2>
        <div className={classes.content}>
          <div>
            <h4 className="sectionSubHeader">Отношения</h4>
            <div className={`${classes.request} ${classes.relationships}`}>
              <ul>
                <li>с партнером</li>
                <li>с детьми</li>
                <li>с родителями</li>
                <li>с коллегами</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="sectionSubHeader">Эмоции</h4>
            <div className={`${classes.request} ${classes.emotions}`}>
              <ul>
                <li>ревность</li>
                <li>страх</li>
                <li>стыд</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="sectionSubHeader">Острые состояния</h4>
            <div className={`${classes.request} ${classes.conditions}`}>
              <ul>
                <li>депрессия</li>
                <li>тревога</li>
                <li>панические атаки</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="sectionSubHeader">Самооценка</h4>
            <div
              className={`${classes.request}` + " " + classes["self-esteem"]}
            >
              <ul>
                <li>ассертивное поведение</li>
                <li>неуверенность</li>
                <li>аутоагрессия</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="sectionSubHeader">Зависимости</h4>
            <div className={`${classes.request} ${classes.addictions}`}>
              <ul>
                <li>расстройства пищевого поведения</li>
                <li>курение</li>
                <li>алкоголь</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="sectionSubHeader">Расстройства личности</h4>

            <div className={`${classes.request} ${classes.disorders}`}>
              <ul>
                <li>ПРЛ</li>
                <li>ТРЛ</li>
                <li>НРЛ</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
