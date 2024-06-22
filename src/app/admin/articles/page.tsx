import TopMenu from "@/components/admin/topMenu/topMenu";
import adminClasses from "@/app/admin/adminClasses.module.css";
import AriclesEditList from "@/components/admin/articles/articlesEditList";
import Link from "next/link";

export default function ArticlesAdminPage() {
  return (
    <>
      <TopMenu page="articles" />

      <div className="wrapper">
        <div className={adminClasses.topBar}>
          <Link
            className="button green smallButton"
            href={`/admin/articles/new`}
          >
            Новая статья
          </Link>
        </div>

        <AriclesEditList />
      </div>
    </>
  );
}
