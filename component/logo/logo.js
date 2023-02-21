import Link from "next/link";
import css from "./logo.module.scss";

export default function Logo({ boxOn = false }) {
  return (
    <Link className={boxOn ? css.box : css.basic} href="/">
      SUZUKI YUNA
    </Link>
  );
}
