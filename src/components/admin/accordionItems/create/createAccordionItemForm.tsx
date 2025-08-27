"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import { RichTextEditor } from "@/components/common/richTextEditor/RichTextEditor";
import { useState } from "react";
import * as actions from "@/actions/accordionItems/create";

export default function CreateAccordionItemForm() {
  const [formState, action] = useFormState(actions.createAccordionItem, {
    errors: {},
  });

  const [accordionItemValue, setAccordionItemValue] = useState<string>("");

  return (
    <form className={`adminForm`} action={action}>
      <div>
        <label htmlFor="header">Заголовок</label>

        <input name="header" type="text"></input>
        {formState.errors && (
          <div className="error">{formState.errors?.header?.join(", ")}</div>
        )}
      </div>

      <div>
        <label htmlFor="text">Текст</label>

        <RichTextEditor
          value={accordionItemValue}
          setValue={setAccordionItemValue}
        />
        {formState.errors && (
          <div className="error">{formState.errors?.text?.join(", ")}</div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton>Создать пункт о КПТ</FormButton>
      <input type="hidden" name="text" value={accordionItemValue} />
    </form>
  );
}
