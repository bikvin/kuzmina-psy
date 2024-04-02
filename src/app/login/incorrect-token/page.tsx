import Link from "next/link";
import classes from "../loginPage.module.css";

export default function IncorrectTokenPage() {
  return (
    <>
      <div className={classes.container}>
        <h1>Неверный токен</h1>
        <p>Токен для восстановления пароля неверный или его срок истек.</p>
        <br></br>
        <p>
          Пожалуйста запросите&nbsp;
          <Link className="link" href="/login/forgot-password">
            восстановление пароля
          </Link>{" "}
          снова.
        </p>
      </div>
    </>
  );
}
