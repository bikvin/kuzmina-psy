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
          <div className="button green smallButton">
            <Link href={`/admin/webinars/new`}>Новый вебинар</Link>
          </div>
        </div>

        <WebinarsEdit />
      </div>
    </>
  );
}
