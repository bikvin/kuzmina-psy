"use client";
import { useFormState } from "react-dom";

import classes from "./userForm.module.css";
import * as actions from "@/actions/user/edit";
import FormButton from "@/components/common/formButton";

export default function EditUserForm(props: {
  username: string;
  email: string;
  id: string;
}) {
  const [formState, action] = useFormState(actions.editUser, {
    errors: {},
  });

  return (
    <form className={classes.form} action={action}>
      <div>
        <label htmlFor="name">Имя</label>

        <input name="name" type="text" defaultValue={props.username}></input>
        {formState.errors && (
          <div className="error">{formState.errors?.name?.join(", ")}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Почта</label>

        <input name="email" type="text" defaultValue={props.email}></input>
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

      {formState.errors && (
        <div className="error">{formState.errors?.id?.join(", ")}</div>
      )}

      <FormButton>Сохранить</FormButton>
      <input type="hidden" name="id" value={props.id} />
    </form>
  );
}
