import classes from "./editUser.module.css";
import { db } from "@/db";
import EditUserForm from "@/components/user/editUserForm";

export default async function editUser() {
  const user = await db.user.findFirst();

  console.log(user);

  if (!user) {
    throw new Error("User not found");
  }

  return (
    <>
      <div className={classes.container}>
        <h1>Редактировать пользователя</h1>
        <EditUserForm username={user.name} email={user.email} />
      </div>
    </>
  );
}
