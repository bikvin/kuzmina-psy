import AccordionItem from "./accordionItem";
import classes from "./accordion.module.css";
import { db } from "@/db";

export default async function Accordion() {
  let itemsData: { id: string; header: string; text: string }[];
  itemsData = [];

  try {
    itemsData = await db.accordionItem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (err) {
    console.log(err);
  }

  return (
    <section className={classes["accordion-section"]}>
      <h2 className="sectionHeader">Подробнее о методе КПТ</h2>
      <div className={`wrapper ${classes.accordionSectionWrapper}`}>
        {itemsData.map((item, index) => (
          <AccordionItem
            key={item.header}
            header={item.header}
            content={item.text}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
