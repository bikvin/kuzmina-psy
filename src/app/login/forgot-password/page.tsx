import ForgotPasswordForm from "@/components/login/forgotPasswordForm";
import classes from "../loginPage.module.css";

export default function ForgotPasswordPage() {
  return (
    <>
      <div className={classes.container}>
        <h1>
          Укажите вашу почту, и мы отправим вам письмо для восстановления пароля
        </h1>
        <ForgotPasswordForm />
      </div>
    </>
  );
}
