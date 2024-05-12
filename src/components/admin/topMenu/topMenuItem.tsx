import Link from "next/link";
import classes from "./topMenu.module.css";

export default function TopMenuItem({
  currentPage,
  menuItemPage,
  menuItemLabel,
  href,
}: {
  currentPage: string;
  menuItemPage: string;
  menuItemLabel: string;
  href: string;
}) {
  return (
    <li>
      <Link
        className={`link ${classes.topMenuLink} ${
          currentPage === menuItemPage ? classes.active : ""
        }`}
        href={href}
      >
        {menuItemLabel}
      </Link>
    </li>
  );
}
