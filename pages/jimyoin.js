import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/jimyoin_full.jpg";

export default function Ikioi() {
  return (
    <Container>
      <Meta
        pageTitle="慈妙院動物霊園"
        pageDesc="WEB DESIGN, WEB DEVELOPMENT, ILLUSTRATION"
      />

      <Hero
        title="慈妙院動物霊園"
        subtitle="WEB DESIGN, WEB DEVELOPMENT, ILLUSTRATION"
      />
      <PostBody>
        <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Image
            src={ImgFull}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <div>
          <p>
            デザインからNext.jsでの開発、microCMSでの繋ぎ込みまで一貫して制作。
          </p>
          <p>掲載期間：2023年1月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
