import AccordionItem from "./accordionItem";
import classes from "./accordion.module.css";
import { accordionData } from "./accordionData";

export default function Accordion() {
  return (
    <section className={classes["accordion-section"]}>
      <h2 className="sectionHeader">Подробнее о методе КПТ</h2>
      <div className={`wrapper ${classes.accordionSectionWrapper}`}>
        {accordionData.map((item) => (
          <AccordionItem
            key={item.header}
            header={item.header}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
}
