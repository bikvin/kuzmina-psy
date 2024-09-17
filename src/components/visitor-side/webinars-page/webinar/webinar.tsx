import classes from "./webinar.module.css";

interface webinarProps {
  vimeoId: string;
  header: string;
  description: string;
}

export default function Webinar({
  vimeoId,
  header,
  description,
}: webinarProps) {
  return (
    <div className={classes.webinar}>
      <div className={classes["video-wrapper"]}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="2024-09-17 16.21.55"
        ></iframe>
      </div>
      <h4 className="webinar-header">{header}</h4>
      <div className={classes.description}>{description}</div>
    </div>
  );
}
