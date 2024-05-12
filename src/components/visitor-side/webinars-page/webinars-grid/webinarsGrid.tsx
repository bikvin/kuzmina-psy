import classes from "./webinarsGrid.module.css";
import Webinar from "../webinar/webinar";
import { webinarsData } from "../webinarsData";
import { db } from "@/db";

export default async function WebinarsGrid() {
  const webinarsData = await db.webinar.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!webinarsData || webinarsData.length === 0) {
    return <div>Вебинары не найдены</div>;
  }

  return (
    <section className={classes["webinars-grid"]}>
      <div className={`wrapper ${classes["webinars-grid-wrapper"]}`}>
        {webinarsData.map((webinar) => (
          <Webinar
            key={webinar.id}
            youTubeCode={webinar.youTubeCode}
            header={webinar.header}
            description={webinar.description}
          />
        ))}
      </div>
    </section>
  );
}
