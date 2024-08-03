import { logout } from "@/actions/auth";
import classes from "./topMenu.module.css";
import TopMenuItem from "./topMenuItem";

export default function TopMenu({ page }: { page: string }) {
  return (
    <nav className={classes.navBar}>
      <h3>Admin</h3>
      <ul className={classes.menuItems}>
        <TopMenuItem
          currentPage={page}
          menuItemPage="main"
          menuItemLabel={"Главная"}
          href={"/admin"}
        />
        <TopMenuItem
          currentPage={page}
          menuItemPage="settings"
          menuItemLabel={"Главный текст и Настройки"}
          href={"/admin/settings"}
        />
        <TopMenuItem
          currentPage={page}
          menuItemPage="webinars"
          menuItemLabel={"Вебинары"}
          href={"/admin/webinars"}
        />
        <TopMenuItem
          currentPage={page}
          menuItemPage="articles"
          menuItemLabel={"Статьи"}
          href={"/admin/articles"}
        />
        <TopMenuItem
          currentPage={page}
          menuItemPage="certificates"
          menuItemLabel={"Сертификаты"}
          href={"/admin/certificates"}
        />
        <TopMenuItem
          currentPage={page}
          menuItemPage="accordionItems"
          menuItemLabel={"Подробнее о методе КПТ"}
          href={"/admin/accordionItems"}
        />
        <TopMenuItem
          currentPage={page}
          menuItemPage="user"
          menuItemLabel={"Пользователь"}
          href={"/admin/user/edit"}
        />
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
