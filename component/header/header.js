import Container from "component/container/container";
import Logo from "../logo/logo";
import Nav from "component/nav/nav";
import css from "./header.module.scss";

export default function Header() {
  return (
    <header large>
      <Container large>
        <div className={css.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
