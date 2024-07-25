import CreateAccordionItemForm from "@/components/admin/accordionItems/create/createAccordionItemForm";

import TopMenu from "@/components/admin/topMenu/topMenu";

export default function CreateAccordionItem() {
  return (
    <>
      <TopMenu page="accordionItem" />
      <div className={`adminFormContainer accordionItemForm`}>
        <h1>Новый пункт о КПТ</h1>

        <CreateAccordionItemForm />
      </div>
    </>
  );
}
