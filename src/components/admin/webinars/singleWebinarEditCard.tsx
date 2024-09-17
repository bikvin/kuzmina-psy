import Link from "next/link";
import classes from "./webinarsEdit.module.css";

export default function SingleWebinarEditCard({
  id,
  vimeoId,
  header,
  description,
}: {
  id: string;
  vimeoId: string;
  header: string;
  description: string;
}) {
  return (
    <div className={classes.webinarsEditCard}>
      <div className={classes.column}>
        <div className={classes["video-wrapper"]}>
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="2024-09-17 16.21.55"
          ></iframe>
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
