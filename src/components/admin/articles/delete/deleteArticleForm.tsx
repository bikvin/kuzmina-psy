"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions/article/delete";

export default function DeleteArticleForm(props: { id: string }) {
  const [formState, action] = useFormState(actions.deleteArticle, {
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
