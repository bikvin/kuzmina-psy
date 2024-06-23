import Article from "./article/article";
import classes from "./articlesGrid.module.css";
import { db } from "@/db";

export default async function ArticlesGrid() {
  const articlesData = await db.article.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  // const tempImageUrl = "/img/bg/article1.jpg";

  if (!articlesData || articlesData.length === 0) {
    return <div>Статьи не найдены</div>;
  }

  // console.log(articlesData);
  return (
    <div className="wrapper">
      <section className={classes["article-grid"]}>
        {articlesData.map((article) => (
          <Article
            key={article.id}
            articleId={article.id}
            imageSrc={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_PROTOCOL}://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_LINK}/${article.imageFileName}`}
            header={article.header}
            subheader={article.description}
          />
        ))}
      </section>
    </div>
  );
}
