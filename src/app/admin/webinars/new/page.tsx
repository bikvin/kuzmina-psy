import TopMenu from "@/components/admin/topMenu/topMenu";
import CreateWebinarForm from "@/components/admin/webinars/create/createWebinarForm";

export default function CreateWebinar() {
  return (
    <>
      <TopMenu page="webinar" />
      <div className={`adminFormContainer`}>
        <h1>Новый вебинар</h1>
        <CreateWebinarForm />
      </div>
    </>
  );
}
