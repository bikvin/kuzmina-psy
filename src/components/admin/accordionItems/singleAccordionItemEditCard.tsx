import Link from "next/link";
import classes from "./accordionItemsEdit.module.css";

export default function SingleAccordionItemEditCard({
  id,
  header,
  text,
}: {
  id: string;
  header: string;
  text: string;
}) {
  const textObj = { __html: text.substring(0, 200) + "..." }; // this object is needed for dangerouslySetInnerHTML. We keep only first 100 characters

  return (
    <div className={classes.EditCard}>
      <div className={classes.column}>
        <h3>{header}</h3>

        <div dangerouslySetInnerHTML={textObj}></div>
      </div>
      <div className={`${classes.column} ${classes.buttonsColumn}`}>
        <Link
          className="button blue smallButton"
          href={`/admin/accordionItems/edit/${id}`}
        >
          Редактировать
        </Link>

        <Link
          className="button red smallButton"
          href={`/admin/accordionItems/delete/${id}`}
        >
          Удалить
        </Link>
      </div>
    </div>
  );
}
