import Link from "next/link";
import classes from "./connectRequests.module.css";

export default function SingleArticleEditCard({
  id,
  name,
  contacts,
  message,
  createdAt,
}: {
  id: string;
  name: string;
  contacts: string;
  message: string;
  createdAt: Date;
}) {
  return (
    <div className={classes.articlesEditCard}>
      <div className={classes.column}>
        <h3>{name}</h3>
        <p>Контакты: {contacts}</p>
        <p>Сообщение: {message}</p>
        <p>
          Дата создания: {createdAt.toLocaleDateString("ru-ru")}
          {" – "}
          {createdAt.toLocaleTimeString("ru-ru")}
        </p>
      </div>
      <div className={`${classes.column} ${classes.buttonsColumn}`}>
        <Link
          className="button red smallButton"
          href={`/admin/contactRequests/delete/${id}`}
        >
          Удалить
        </Link>
      </div>
    </div>
  );
}
