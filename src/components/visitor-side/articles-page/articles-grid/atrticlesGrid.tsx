import Article from "./article/article";
import classes from "./articlesGrid.module.css";

export default function ArticlesGrid({
  articlesData,
}: {
  articlesData: {
    id: number;
    header: string;
    subheader: string;
    imageUrl: string;
  }[];
}) {
  // console.log(articlesData);
  return (
    <div className="wrapper">
      <section className={classes["article-grid"]}>
        {articlesData.map((article) => (
          <Article
            key={article.id}
            articleId={article.id}
            imageSrc={article.imageUrl}
            header={article.header}
            subheader={article.subheader}
          />
        ))}
      </section>
    </div>
  );
}
