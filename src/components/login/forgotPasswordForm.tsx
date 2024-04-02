"use client";
import { useFormState } from "react-dom";

import classes from "./loginForm.module.css";
import * as actions from "@/actions/login/forgot-password";
import FormButton from "@/components/common/formButton";

export default function ForgotPasswordForm() {
  const [formState, action] = useFormState(actions.forgotPassword, {
    errors: {},
    success: null,
  });

  return (
    <form className={classes.form} action={action}>
      <div>
        <label htmlFor="email">Почта</label>

        <input name="email" type="text"></input>
        {formState.errors && (
          <div className="error">{formState.errors?.email?.join(", ")}</div>
        )}
      </div>

      {formState.errors && (
        <div className="error">{formState.errors?._form?.join(", ")}</div>
      )}

      {formState.success && <div className="success">{formState.success}</div>}

      <FormButton>Отправить</FormButton>
    </form>
  );
}
