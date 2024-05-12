import classes from "./editUserPage.module.css";
import { db } from "@/db";
import EditUserForm from "@/components/admin/user/editUserForm";
import TopMenu from "@/components/admin/topMenu/topMenu";

export default async function editUser() {
  const user = await db.user.findFirst();

  if (!user) {
    throw new Error("User not found");
  }

  return (
    <>
      <TopMenu page="user" />
      <div className={`adminFormContainer`}>
        <h1>Редактировать пользователя</h1>
        <EditUserForm username={user.name} email={user.email} id={user.id} />
      </div>
    </>
  );
}
