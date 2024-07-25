"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import { RichTextEditor } from "../../../common/richTextEditor/RichTextEditor";
import { useState } from "react";
import DropzoneInput from "@/components/admin/articles/dropzone/dropzoneInput";
import * as actions from "@/actions/article/create";

export default function CreateArticleForm() {
  const [formState, action] = useFormState(actions.createArticle, {
    errors: {},
  });

  const [articleValue, setArticleValue] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (newFileName: string) => {
    setFileName(newFileName);
    console.log("File changed");
  };

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

        <input name="description" type="text"></input>
        {formState.errors && (
          <div className="error">
            {formState.errors?.description?.join(", ")}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="dropzone">Картинка для обложки</label>
        <DropzoneInput handleFileChange={handleFileChange} />
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

      <p>{fileName}</p>

      <FormButton>Создать статью</FormButton>
      <input type="hidden" name="text" value={articleValue} />
      <input type="hidden" name="imageFileName" value={fileName} />
    </form>
  );
}
