import SingleArticleEditCard from "./connectRequestCard";
import classes from "./connectRequests.module.css";
import { db } from "@/db";
import { data } from "@/app/articles/data";

export default async function ConnectRequestsList() {
  const connectRequestsData = await db.connectRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className={`${classes.articlesEdit}`}>
      {connectRequestsData.map((request) => (
        <SingleArticleEditCard
          key={request.id}
          id={request.id}
          name={request.name}
          contacts={request.contacts}
          message={request.message}
          createdAt={request.createdAt}
        />
      ))}
    </div>
  );
}
