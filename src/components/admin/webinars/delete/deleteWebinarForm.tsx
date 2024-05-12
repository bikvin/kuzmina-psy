"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions/webinar/delete";

export default function DeleteWebinarForm(props: { id: string }) {
  const [formState, action] = useFormState(actions.deleteWebinar, {
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
