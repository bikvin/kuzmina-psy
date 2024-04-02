"use client";
import { useFormState } from "react-dom";

import classes from "./loginForm.module.css";
import * as actions from "@/actions/login/new-password";
import FormButton from "@/components/common/formButton";
import Link from "next/link";

export default function NewPasswordForm(props: { email: string }) {
  const [formState, action] = useFormState(actions.newPassword, {
    errors: {},
    success: null,
  });

  return (
    <form className={classes.form} action={action}>
      <div>
        <label htmlFor="password">Новый пароль</label>

        <input name="password" type="password"></input>
        {formState.errors && (
          <div className="error">{formState.errors?.password?.join(", ")}</div>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword">Повторите пароль</label>

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

      {formState.success && (
        <div>
          <div className="success">{formState.success}</div>{" "}
          <p>
            Теперь можно&nbsp;
            <Link className="link" href="/login">
              залогиниться
            </Link>
          </p>
        </div>
      )}
      <input type="hidden" name="email" value={props.email} />
      <FormButton>Отправить</FormButton>
    </form>
  );
}
