import classes from "./newUser.module.css";
import CreateUserForm from "@/components/user/createUserForm";

export default function UserCreatePage() {
  return (
    <>
      <div className={classes.container}>
        <h1>Создать пользователя</h1>
        <CreateUserForm />
      </div>
    </>
  );
}
