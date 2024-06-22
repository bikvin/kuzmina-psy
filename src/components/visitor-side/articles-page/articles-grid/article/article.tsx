import Link from "next/link";
import classes from "./article.module.css";
import Image from "next/image";

export default function Article({
  articleId,
  imageSrc,
  header,
  subheader,
}: {
  articleId: string;
  imageSrc: string;
  header: string;
  subheader: string;
}) {
  return (
    <Link href={`/articles/${articleId}`}>
      <div className={classes.article}>
        <div className={classes["article-image-container"]}>
          <Image
            className={classes.image}
            fill={true}
            // src="/img/bg/article2.jpg"
            src={imageSrc}
            alt=""
          ></Image>
        </div>
        <h4 className={classes["article-header"]}>{header}</h4>
        <div className={classes.description}>{subheader}</div>
      </div>
    </Link>
  );
}
