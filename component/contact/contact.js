// import Social from "component/social";
import css from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={css.stack}>
      <h3 className={css.heading}>Contact</h3>
      {/* <Social iconSize="30px" /> */}
      <address className={css.address}>
        <a href="mailto:suzuki.yuna.0801@gmail.com">
          suzuki.yuna.0801@gmail.com
        </a>
      </address>
    </div>
  );
}
