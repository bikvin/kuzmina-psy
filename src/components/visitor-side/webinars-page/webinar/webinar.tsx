import classes from "./webinar.module.css";

interface webinarProps {
  youTubeCode: string;
  header: string;
  description: string;
}

export default function Webinar({
  youTubeCode,
  header,
  description,
}: webinarProps) {
  const youTubeCodeObj = { __html: youTubeCode };

  return (
    <div className={classes.webinar}>
      <div className={classes["video-wrapper"]}>
        <div dangerouslySetInnerHTML={youTubeCodeObj} />

        {/* <iframe
            width="560"
            height="315"
            src={youTubeLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
      </div>
      <h4 className="webinar-header">{header}</h4>
      <div className={classes.description}>{description}</div>
    </div>
  );
}
