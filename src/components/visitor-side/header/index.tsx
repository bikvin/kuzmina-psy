import classes from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className="wrapper">
        <nav className={classes["top-menu-desktop"]}>
          <Link className={classes.logo} href="./">
            <h2>Психолог Анастасия Кузьмина</h2>
          </Link>
          <ul>
            <li className={classes.whatsapp}>
              <Link href="https://wa.me/79261601876"></Link>
            </li>
            <li className={classes.telegram}>
              <Link href="https://t.me/kuzmina_psy"></Link>
            </li>
            <li className={classes["telegram-channel"]}>
              <Link href="https://t.me/kuzmina_psy_cbt"></Link>
            </li>
            <li className={classes.instagram}>
              <Link href="https://www.instagram.com/kuzmina_psy_cbt/"></Link>
            </li>
            <li>+7-926-160-18-78</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
