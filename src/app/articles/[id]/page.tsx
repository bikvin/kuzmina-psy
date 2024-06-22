import Footer from "@/components/visitor-side/footer/footer";
import Header from "@/components/visitor-side/header";
import classes from "./singleArticle.module.css";
import Image from "next/image";
import { db } from "@/db";

export default async function SingleArticle({
  params,
}: {
  params: { id: string };
}) {
  const tempImageUrl = "/img/bg/article1.jpg";

  const article = await db.article.findUnique({ where: { id: params.id } });

  if (!article || !article.text) {
    return <div>Статья не найдена</div>;
  }

  const articleTextObj = { __html: article.text }; // this object is needed for dangerouslySetInnerHTML

  return (
    <>
      <Header />

      <div className={`page-content ${classes["single-article"]}`}>
        <div className={`wrapper ${classes.singleArticleWrapper}`}>
          <div className={classes.imageContainer}>
            {tempImageUrl ? (
              <Image fill={true} src={tempImageUrl} alt="" />
            ) : null}
          </div>
          <div dangerouslySetInnerHTML={articleTextObj} />
        </div>
      </div>
      <Footer />
    </>
  );
}
