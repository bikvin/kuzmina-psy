"use client";
import { useFormState } from "react-dom";

import classes from "./userForm.module.css";
import * as actions from "@/actions/user/create";
import FormButton from "@/components/common/formButton";

export default function ContactForm() {
  const [formState, action] = useFormState(actions.createUser, {
    errors: {},
  });

  return (
    <form className={classes.form} action={action}>
      <div>
        <label htmlFor="name">Имя</label>

        <input name="name" type="text"></input>
        {formState.errors && (
          <div className="error">{formState.errors?.name?.join(", ")}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Почта</label>

        <input name="email" type="text"></input>
        {formState.errors && (
          <div className="error">{formState.errors?.email?.join(", ")}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Новый пароль</label>

        <input name="password" type="password"></input>
        {formState.errors && (
          <div className="error">{formState.errors?.password?.join(", ")}</div>
        )}
      </div>
      <div>
        <label htmlFor="repeatPassword">Повторите новый пароль</label>

        <input name="repeatPassword" type="password"></input>
        {formState.errors && (
          <div className="error">
            {formState.errors?.repeatPassword?.join(", ")}
          </div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      <FormButton>Создать первого и единственного пользователя</FormButton>
    </form>
  );
}
