"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import classes from "./editMainTextForm.module.css";
import * as actions from "@/actions/settings/mainText/edit";

export default function EditMainTextForm({ text }: { text: string }) {
  const [formState, action] = useFormState(actions.editMainText, {});

  let successMessage = null;
  if (formState.success) {
    successMessage = formState.success.message;
  }

  return (
    <form className={`adminForm ${classes.mainTextForm}`} action={action}>
      <div>
        <textarea name="text" defaultValue={text} rows={7} />
        {formState.errors && (
          <div className="error">{formState.errors?.text?.join(", ")}</div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton successMessage={successMessage} small={true}>
        Сохранить
      </FormButton>
    </form>
  );
}
