import Footer from "@/components/visitor-side/footer/footer";
import Header from "@/components/visitor-side/header";
import classes from "./singleArticle.module.css";
import Image from "next/image";

import { data } from "../data";

export default function SingleArticle({ params }: { params: { id: string } }) {
  const articleObj: { id: number; text: string; imageUrl: string } | undefined =
    data.find((item) => item.id === +params.id);

  if (!articleObj?.text) {
    return <div>Статья не найдена</div>;
  }

  const articleTextObj = { __html: articleObj.text }; // this object is needed for dangerouslySetInnerHTML

  return (
    <>
      <Header />

      <div className={`page-content ${classes["single-article"]}`}>
        <div className={`wrapper ${classes.singleArticleWrapper}`}>
          <div className={classes.imageContainer}>
            {articleObj.imageUrl ? (
              <Image fill={true} src={articleObj.imageUrl} alt="" />
            ) : null}
          </div>
          <div dangerouslySetInnerHTML={articleTextObj} />
        </div>
      </div>
      <Footer />
    </>
  );
}
