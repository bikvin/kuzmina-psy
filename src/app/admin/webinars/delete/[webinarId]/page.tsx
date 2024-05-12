import { db } from "@/db";
import TopMenu from "@/components/admin/topMenu/topMenu";
import FormButton from "@/components/common/formButton";
import classes from "./deleteWebinarPage.module.css";
import Link from "next/link";
import DeleteWebinarForm from "@/components/admin/webinars/delete/deleteWebinarForm";

export default async function DeleteWebinarPage({
  params,
}: {
  params: { webinarId: string };
}) {
  const webinar = await db.webinar.findUnique({
    where: { id: params.webinarId },
  });

  if (!webinar) {
    throw new Error("Webinar not found");
  }

  return (
    <>
      <TopMenu page="webinars" />
      <div className={`adminFormContainer ${classes.confirmDeleteWindow}`}>
        <h1>
          Вы уверены, что хотите удалить вебинар:{" "}
          <span className={classes.deleteTitle}>{webinar.header}</span> ?
        </h1>

        <div className={classes.buttonsWrapper}>
          <div>
            <DeleteWebinarForm id={webinar.id} />
          </div>
          <div>
            <Link
              className={`button gray ${classes.block}`}
              href={"/admin/webinars"}
            >
              Отмена
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
