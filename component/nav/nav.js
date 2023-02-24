import Link from "next/link";
import css from "./nav.module.scss";

export default function Nav() {
  return (
    <nav>
      <ul className={css.list}>
        <li>
          <Link href="/">Works</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
