import LoginForm from "@/components/login/loginForm";
import classes from "./loginPage.module.css";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className={classes.container}>
        <h1>Войти</h1>
        <LoginForm />
        <Link className="link" href={"/login/forgot-password"}>
          Забыли пароль?
        </Link>
      </div>
    </>
  );
}
