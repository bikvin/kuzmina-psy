import SingleWebinarEditCard from "./singleWebinarEditCard";
import classes from "./webinarsEdit.module.css";
import { db } from "@/db";

export default async function WebinarsEdit() {
  const webinarsData = await db.webinar.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // console.log(webinarsData2);

  return (
    <div className={`${classes.webinarsEdit}`}>
      {webinarsData.map((webinar) => (
        <SingleWebinarEditCard
          key={webinar.id}
          id={webinar.id}
          vimeoId={webinar.vimeoId}
          header={webinar.header}
          description={webinar.description}
        />
      ))}
    </div>
  );
}
