import Link from "next/link";
import classes from "./webinarsEdit.module.css";

export default function SingleWebinarEditCard({
  id,
  youTubeCode,
  header,
  description,
}: {
  id: string;
  youTubeCode: string;
  header: string;
  description: string;
}) {
  const youTubeCodeObj = { __html: youTubeCode };

  return (
    <div className={classes.webinarsEditCard}>
      <div className={classes.column}>
        <div className={classes["video-wrapper"]}>
          <div dangerouslySetInnerHTML={youTubeCodeObj} />
        </div>
      </div>

      <div className={classes.column}>
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
      <div className={`${classes.column} ${classes.buttonsColumn}`}>
        <Link
          className="button blue smallButton"
          href={`/admin/webinars/edit/${id}`}
        >
          Редактировать
        </Link>

        <Link
          className="button red smallButton"
          href={`/admin/webinars/delete/${id}`}
        >
          Удалить
        </Link>
      </div>
    </div>
  );
}
