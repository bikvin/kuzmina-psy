import { db } from "@/db";
import TopMenu from "@/components/admin/topMenu/topMenu";
import FormButton from "@/components/common/formButton";
import classes from "./deleteArticlePage.module.css";
import Link from "next/link";
import DeleteArticleForm from "@/components/admin/articles/delete/deleteArticleForm";

export default async function DeleteArticlePage({
  params,
}: {
  params: { articleId: string };
}) {
  const article = await db.article.findUnique({
    where: { id: params.articleId },
  });

  if (!article) {
    throw new Error("Article not found");
  }

  return (
    <>
      <TopMenu page="articles" />
      <div className={`adminFormContainer ${classes.confirmDeleteWindow}`}>
        <h1>
          Вы уверены, что хотите удалить статью:{" "}
          <span className={classes.deleteTitle}>{article.header}</span> ?
        </h1>

        <div className={classes.buttonsWrapper}>
          <div>
            <DeleteArticleForm id={article.id} />
          </div>
          <div>
            <Link
              className={`button gray ${classes.block}`}
              href={"/admin/articles"}
            >
              Отмена
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
