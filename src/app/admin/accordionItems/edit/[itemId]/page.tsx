import TopMenu from "@/components/admin/topMenu/topMenu";
import EditAccordionItemForm from "@/components/admin/accordionItems/edit/editAccordionItemForm";
import { db } from "@/db";

export default async function editAccordionItem({
  params,
}: {
  params: { itemId: string };
}) {
  const itemId = params.itemId;

  const item = await db.accordionItem.findUnique({ where: { id: itemId } });

  if (!item) {
    throw new Error("Atticle not found");
  }

  return (
    <>
      <TopMenu page="webinar" />

      <div className={`adminFormContainer`}>
        <h1>Редактировать статью</h1>
        <EditAccordionItemForm
          header={item.header}
          text={item.text}
          id={item.id}
        />
      </div>
    </>
  );
}
