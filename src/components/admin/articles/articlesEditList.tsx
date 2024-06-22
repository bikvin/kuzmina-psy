import SingleArticleEditCard from "./singleArticleEditCard";
import classes from "./articlesEdit.module.css";
import { db } from "@/db";
import { data } from "@/app/articles/data";

export default async function ArticlesEditList() {
  const tempImageUrl = "/img/bg/article1.jpg";

  const articlesData = await db.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className={`${classes.articlesEdit}`}>
      {articlesData.map((article) => (
        <SingleArticleEditCard
          key={article.id}
          id={article.id}
          header={article.header}
          description={article.description}
          text={article.text}
        />
      ))}
    </div>
  );
}
