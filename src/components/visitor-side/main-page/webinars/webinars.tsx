import classes from "./webinars.module.css";
import Link from "next/link";

export default function Webinars() {
  return (
    <section className={classes.webinars}>
      <div className="wrapper">
        <div className={classes.content}>
          <Link href="webinars" className={classes.webinars}>
            <div className={classes["circle-outer"]}>
              <div className={classes["circle-inner"]}>
                <img src="img/icons/ui/webinar.svg" alt="" />
                <p>Вебинары</p>
              </div>
            </div>
          </Link>

          <Link href="articles" className={classes.articles}>
            <div className={classes["circle-outer"]}>
              <div className={classes["circle-inner"]}>
                <img src="img/icons/ui/article.svg" alt="" />
                <p>Статьи</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
