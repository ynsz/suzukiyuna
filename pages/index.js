import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import Works from "component/works/works";

export default function Home() {
  return (
    <Container>
      <Meta />

      <Hero
        title="SUZUKI YUNA"
        subtitle="WORKS  2018-2025"
        imageOn
        large
      />

      <Works />
    </Container>
  );
}
