import { db } from "@/db";
import TopMenu from "@/components/admin/topMenu/topMenu";
import FormButton from "@/components/common/formButton";
import classes from "./deleteAccordionItemPage.module.css";
import Link from "next/link";
import DeleteAccordionItemForm from "@/components/admin/accordionItems/delete/deleteAccordionItemForm";

export default async function DeleteAccordionItemPage({
  params,
}: {
  params: { itemId: string };
}) {
  const item = await db.accordionItem.findUnique({
    where: { id: params.itemId },
  });

  if (!item) {
    throw new Error("Accordion item not found");
  }

  return (
    <>
      <TopMenu page="articles" />
      <div className={`adminFormContainer ${classes.confirmDeleteWindow}`}>
        <h1>
          Вы уверены, что хотите удалить пункт:{" "}
          <span className={classes.deleteTitle}>{item.header}</span> ?
        </h1>

        <div className={classes.buttonsWrapper}>
          <div>
            <DeleteAccordionItemForm id={item.id} />
          </div>
          <div>
            <Link
              className={`button gray ${classes.block}`}
              href={"/admin/accordionItems"}
            >
              Отмена
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
