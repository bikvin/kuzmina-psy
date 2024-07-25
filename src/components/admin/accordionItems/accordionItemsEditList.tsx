import SingleAccordionItemEditCard from "./singleAccordionItemEditCard";
import classes from "./accordionItemsEdit.module.css";
import { db } from "@/db";

export default async function AccordionItemsEditList() {
  const itemsData = await db.accordionItem.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className={`${classes.Edit}`}>
      {itemsData.map((item) => (
        <SingleAccordionItemEditCard
          key={item.id}
          id={item.id}
          header={item.header}
          text={item.text}
        />
      ))}
    </div>
  );
}
