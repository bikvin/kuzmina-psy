"use client";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/formButton";
import classes from "./loginForm.module.css";
import { login } from "@/actions/auth";

export default function LoginForm() {
  const [errorMessage, action] = useFormState(login, undefined);

  return (
    <form className={classes.form} action={action}>
      <div>
        <label htmlFor="email">Почта</label>

        <input name="email" type="text"></input>
      </div>
      <div>
        <label htmlFor="password">Пароль</label>

        <input name="password" type="password"></input>
      </div>

      {errorMessage && <div className="error">{errorMessage}</div>}

      {/* <button className="button blue" type="submit">
        Войти
      </button> */}
      <FormButton>Войти</FormButton>
    </form>
  );
}
