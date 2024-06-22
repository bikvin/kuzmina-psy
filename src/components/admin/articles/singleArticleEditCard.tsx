import Link from "next/link";
import classes from "./articlesEdit.module.css";

export default function SingleArticleEditCard({
  id,
  header,
  text,
  imageUrl,
  description,
}: {
  id: string;
  header: string;
  text: string;
  imageUrl: string;
  description: string;
}) {
  // const youTubeCodeObj = { __html: youTubeCode };

  return (
    <div className={classes.articlesEditCard}>
      <div className={classes.column}>
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
      <div className={`${classes.column} ${classes.buttonsColumn}`}>
        <Link
          className="button blue smallButton"
          href={`/admin/articles/edit/${id}`}
        >
          Редактировать
        </Link>

        <Link
          className="button red smallButton"
          href={`/admin/articles/delete/${id}`}
        >
          Удалить
        </Link>
      </div>
    </div>
  );
}
