"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import * as actions from "@/actions/webinar/edit";

export default function EditWebinarForm(props: {
  header: string;
  description: string;
  youTubeCode: string;
  id: string;
}) {
  const [formState, action] = useFormState(actions.editWebinar, {
    errors: {},
  });

  return (
    <form className={`adminForm`} action={action}>
      <div>
        <label htmlFor="header">Заголовок</label>

        <input name="header" type="text" defaultValue={props.header}></input>
        {formState.errors && (
          <div className="error">{formState.errors?.header?.join(", ")}</div>
        )}
      </div>
      <div>
        <label htmlFor="description">Описание</label>

        <textarea
          name="description"
          rows={3}
          cols={50}
          defaultValue={props.description}
        ></textarea>
        {formState.errors && (
          <div className="error">
            {formState.errors?.description?.join(", ")}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="youTubeCode">iframe код с YouTube</label>

        <textarea
          name="youTubeCode"
          rows={3}
          cols={50}
          defaultValue={props.youTubeCode}
        ></textarea>
        {formState.errors && (
          <div className="error">
            {formState.errors?.youTubeCode?.join(", ")}
          </div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      {formState.errors && (
        <div className="error">{formState.errors?.id?.join(", ")}</div>
      )}

      <FormButton>Сохранить</FormButton>
      <input type="hidden" name="id" value={props.id} />
    </form>
  );
}
