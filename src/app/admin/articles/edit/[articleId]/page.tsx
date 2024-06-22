import TopMenu from "@/components/admin/topMenu/topMenu";
import EditArticleForm from "@/components/admin/articles/edit/editArticleForm";
import { db } from "@/db";

export default async function editArticle({
  params,
}: {
  params: { articleId: string };
}) {
  const articleId = params.articleId;

  const article = await db.article.findUnique({ where: { id: articleId } });

  if (!article) {
    throw new Error("Atticle not found");
  }

  return (
    <>
      <TopMenu page="webinar" />

      <div className={`adminFormContainer`}>
        <h1>Редактировать статью</h1>
        <EditArticleForm
          header={article.header}
          description={article.description}
          text={article.text}
          id={article.id}
          imageFileName={article.imageFileName}
        />
      </div>
    </>
  );
}
