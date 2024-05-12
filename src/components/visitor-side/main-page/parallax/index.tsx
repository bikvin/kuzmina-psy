import classes from "./parallax.module.css";

export default function Parallax({ image }: { image: string }) {
  return <section className={`parallax ${classes[image]}`}></section>;
}
