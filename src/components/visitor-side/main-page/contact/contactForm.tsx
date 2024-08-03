"use client";
import { useFormState } from "react-dom";

import classes from "./contactForm.module.css";
import * as actions from "@/actions/connectRequest/create";
import FormButton from "@/components/common/formButton";

export default function CreateUserForm() {
  const [formState, action] = useFormState(actions.createConnectRequest, {
    errors: {},
  });

  let successMessage = null;
  if (formState.success) {
    successMessage = formState.success.message;
  }

  return (
    <form className={classes.form} action={action}>
      <div>
        <input name="name" type="text" placeholder="Имя"></input>
        {formState.errors && (
          <div className="error">{formState.errors?.name?.join(", ")}</div>
        )}
      </div>
      <div>
        <input
          name="contacts"
          type="text"
          placeholder="Контакты (телефон, Whatsapp, Telegram или email)"
        ></input>
        {formState.errors && (
          <div className="error">{formState.errors?.contacts?.join(", ")}</div>
        )}
      </div>
      <div>
        <textarea
          name="message"
          rows={7}
          placeholder="Напишите ваш вопрос (необязательно)"
        />
        {formState.errors && (
          <div className="error">{formState.errors?.message?.join(", ")}</div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton
        successMessage={successMessage}
        color="mainPageBlue"
        disabledColor="disabledMainPageBlue"
      >
        Отправить сообщение
      </FormButton>
    </form>
  );
}
