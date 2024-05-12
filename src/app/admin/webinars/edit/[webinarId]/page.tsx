import TopMenu from "@/components/admin/topMenu/topMenu";
import EditWebinarForm from "@/components/admin/webinars/edit/editWebinarForm";
import { db } from "@/db";

export default async function editWebinar({
  params,
}: {
  params: { webinarId: string };
}) {
  const webinarId = params.webinarId;

  const webinar = await db.webinar.findUnique({ where: { id: webinarId } });

  if (!webinar) {
    throw new Error("Webinar not found");
  }

  return (
    <>
      <TopMenu page="webinar" />

      <div className={`adminFormContainer`}>
        <h1>Редактировать вебинар</h1>
        <EditWebinarForm
          header={webinar.header}
          description={webinar.description}
          youTubeCode={webinar.youTubeCode}
          id={webinar.id}
        />
      </div>
    </>
  );
}
