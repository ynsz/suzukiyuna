import Container from "component/container/container";
import Logo from "../logo/logo";
import Social from "component/social/social";
import css from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.flexContainer}>
          <Logo />
          <Social iconSize="24px" />
        </div>
      </Container>
    </footer>
  );
}
