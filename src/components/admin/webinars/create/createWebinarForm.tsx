"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions/webinar/create";

export default function CreateWebinarForm() {
  const [formState, action] = useFormState(actions.createWebinar, {
    errors: {},
  });

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
        <label htmlFor="description">Описание</label>

        <textarea name="description" rows={3} cols={50}></textarea>
        {formState.errors && (
          <div className="error">
            {formState.errors?.description?.join(", ")}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="youTubeCode">iframe код с YouTube</label>

        <textarea name="youTubeCode" rows={3} cols={50}></textarea>
        {formState.errors && (
          <div className="error">
            {formState.errors?.youTubeLink?.join(", ")}
          </div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton>Создать вебинар</FormButton>
    </form>
  );
}
