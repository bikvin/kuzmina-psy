import classes from "./newUser.module.css";
import CreateUserForm from "@/components/admin/user/createUserForm";

export default function UserCreatePage() {
  return (
    <>
      <div className={`adminFormContainer`}>
        <h1>Создать пользователя</h1>
        <CreateUserForm />
      </div>
    </>
  );
}
