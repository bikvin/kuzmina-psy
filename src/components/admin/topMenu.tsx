import Link from "next/link";
import { logout } from "@/actions/auth";
import classes from "./topMenu.module.css";

export default function TopMenu({ page }: { page: string }) {
  return (
    <nav className={classes.navBar}>
      <h3>Admin</h3>
      <ul className={classes.menuItems}>
        <li>
          <Link
            className={`link ${classes.topMenuLink} ${
              page === "main" ? classes.active : ""
            }`}
            href="/admin"
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            className={`link ${classes.topMenuLink} ${
              page === "user" ? classes.active : ""
            }`}
            href="/admin/user/edit"
          >
            Пользователь
          </Link>
        </li>
      </ul>
      <div>
        <form action={logout}>
          <button className={`link ${classes.logoutButton}`} type="submit">
            Выйти
          </button>
        </form>
      </div>
    </nav>
  );
}
