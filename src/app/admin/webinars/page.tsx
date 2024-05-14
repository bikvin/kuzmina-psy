import TopMenu from "@/components/admin/topMenu/topMenu";
import classes from "./webinarsEdit.module.css";
import WebinarsEdit from "@/components/admin/webinars/webinarsEdit";
import Link from "next/link";

export default function WebinarsAdminPage() {
  return (
    <>
      <TopMenu page="webinars" />

      <div className="wrapper">
        <div className={classes.topBar}>
          <Link
            className="button green smallButton"
            href={`/admin/webinars/new`}
          >
            Новый вебинар
          </Link>
        </div>

        <WebinarsEdit />
      </div>
    </>
  );
}
