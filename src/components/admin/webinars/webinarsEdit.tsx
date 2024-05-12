import { webinarsData2 } from "../../visitor-side/webinars-page/webinarsData";
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
          youTubeCode={webinar.youTubeCode}
          header={webinar.header}
          description={webinar.description}
        />
      ))}
    </div>
  );
}
