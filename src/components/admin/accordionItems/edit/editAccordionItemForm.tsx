"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import { RichTextEditor } from "../../../common/richTextEditor/RichTextEditor";
import { useState } from "react";
import * as actions from "@/actions/accordionItems/edit";

export default function EditAccordionItemForm({
  header,
  text,
  id,
}: {
  header: string;
  text: string;
  id: string;
}) {
  const [formState, action] = useFormState(actions.editAccordionItem, {
    errors: {},
  });

  const [itemValue, setItemValue] = useState(text);

  return (
    <form className={`adminForm`} action={action}>
      <div>
        <label htmlFor="header">Заголовок</label>

        <input name="header" type="text" defaultValue={header}></input>
        {formState.errors && (
          <div className="error">{formState.errors?.header?.join(", ")}</div>
        )}
      </div>

      <div>
        <label htmlFor="text">Текст статьи</label>

        <RichTextEditor value={itemValue} setValue={setItemValue} />
        {formState.errors && (
          <div className="error">{formState.errors?.text?.join(", ")}</div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton>Сохранить</FormButton>
      <input type="hidden" name="text" value={itemValue} />
      <input type="hidden" name="id" value={id} />
    </form>
  );
}
