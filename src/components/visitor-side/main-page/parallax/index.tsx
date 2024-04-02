import classes from "./parallax.module.css";

export default function Parallax({ image }: { image: string }) {
  return (
    <section className={`${classes.parallax} ${classes[image]}`}></section>
  );
}
