"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import { RichTextEditor } from "../../../common/richTextEditor/RichTextEditor";
import { useState } from "react";
import * as actions from "@/actions/article/edit";
import DropzoneInput from "@/components/admin/articles/dropzone/dropzoneInput";

export default function EditArticleForm({
  header,
  description,
  text,
  id,
  imageFileName,
}: {
  header: string;
  description: string;
  text: string;
  id: string;
  imageFileName: string;
}) {
  const [formState, action] = useFormState(actions.editArticle, {
    errors: {},
  });

  const [articleValue, setArticleValue] = useState(text);
  const [fileName, setFileName] = useState<string>(imageFileName);

  const handleFileChange = (newFileName: string) => {
    setFileName(newFileName);
    console.log("File changed");
  };

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
        <label htmlFor="description">Описание</label>

        <input
          name="description"
          type="text"
          defaultValue={description}
        ></input>
        {formState.errors && (
          <div className="error">
            {formState.errors?.description?.join(", ")}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="dropzone">Картинка для обложки</label>
        <DropzoneInput
          handleFileChange={handleFileChange}
          dbSavedFileName={fileName}
        />
        {formState.errors && (
          <div className="error">
            {formState.errors?.imageFileName?.join(", ")}
          </div>
        )}
      </div>
      <div>
        <label htmlFor="text">Текст статьи</label>

        <RichTextEditor value={articleValue} setValue={setArticleValue} />
        {formState.errors && (
          <div className="error">{formState.errors?.text?.join(", ")}</div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton>Сохранить</FormButton>
      <input type="hidden" name="text" value={articleValue} />
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="imageFileName" value={fileName} />
    </form>
  );
}
