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
  // const tempImageUrl = "/img/bg/article1.jpg";

  const article = await db.article.findUnique({ where: { id: params.id } });

  if (!article || !article.text) {
    return <div>Статья не найдена</div>;
  }

  const imageSrc = `${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_PROTOCOL}://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_LINK}/${article.imageFileName}`;

  const articleTextObj = { __html: article.text }; // this object is needed for dangerouslySetInnerHTML

  return (
    <>
      <Header />

      <div className={`page-content ${classes["single-article"]}`}>
        <div className={`wrapper ${classes.singleArticleWrapper}`}>
          <div className={classes.imageContainer}>
            {imageSrc ? <Image fill={true} src={imageSrc} alt="" /> : null}
          </div>
          <div dangerouslySetInnerHTML={articleTextObj} />
        </div>
      </div>
      <Footer />
    </>
  );
}
