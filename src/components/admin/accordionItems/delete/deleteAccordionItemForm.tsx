"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions/accordionItems/delete";

export default function DeleteAccordionItemForm(props: { id: string }) {
  const [formState, action] = useFormState(actions.deleteAccordionItem, {
    errors: {},
  });
  return (
    <form action={action}>
      <FormButton color={"red"}>Удалить</FormButton>
      <input type="hidden" name="id" value={props.id} />
      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}
    </form>
  );
}
