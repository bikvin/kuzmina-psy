import CreateArticleForm from "@/components/admin/articles/create/createArticleForm";

import TopMenu from "@/components/admin/topMenu/topMenu";
// import CreateWebinarForm from "@/components/admin/webinars/create/createWebinarForm";

export default function CreateArticle() {
  return (
    <>
      <TopMenu page="webinar" />
      <div className={`adminFormContainer articleForm`}>
        <h1>Новая статья</h1>

        <CreateArticleForm />
      </div>
    </>
  );
}
