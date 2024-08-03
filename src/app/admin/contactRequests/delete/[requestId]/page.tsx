import { db } from "@/db";
import TopMenu from "@/components/admin/topMenu/topMenu";
import FormButton from "@/components/common/formButton";
import classes from "./deleteContactRequestPage.module.css";
import Link from "next/link";

import DeleteContactRequestForm from "@/components/admin/connectRequests/delete/deleteContactRequestForm";

export default async function DeleteContactRequestPage({
  params,
}: {
  params: { requestId: string };
}) {
  const request = await db.connectRequest.findUnique({
    where: { id: params.requestId },
  });

  if (!request) {
    throw new Error("Request not found");
  }

  return (
    <>
      <TopMenu page="main" />
      <div className={`adminFormContainer ${classes.confirmDeleteWindow}`}>
        <h1>
          Вы уверены, что хотите удалить запрос от клиента:{" "}
          <span className={classes.deleteTitle}>{request.name}</span> ?
        </h1>

        <div className={classes.buttonsWrapper}>
          <div>
            <DeleteContactRequestForm id={request.id} />
          </div>
          <div>
            <Link className={`button gray ${classes.block}`} href={"/admin"}>
              Отмена
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
