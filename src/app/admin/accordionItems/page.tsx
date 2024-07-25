import TopMenu from "@/components/admin/topMenu/topMenu";
import adminClasses from "@/app/admin/adminClasses.module.css";
import Link from "next/link";
import AccordionItemsEditList from "@/components/admin/accordionItems/accordionItemsEditList";

export default function AccordionItemsAdminPage() {
  return (
    <>
      <TopMenu page="accordionItems" />

      <div className="wrapper">
        <div className={adminClasses.topBar}>
          <Link
            className="button green smallButton"
            href={`/admin/accordionItems/new`}
          >
            Новый пункт
          </Link>
        </div>

        <AccordionItemsEditList />
      </div>
    </>
  );
}
