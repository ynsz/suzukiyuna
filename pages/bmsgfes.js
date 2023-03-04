import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/bmsgfes_full.jpg";

export default function Bmsgfes() {
  return (
    <Container>
      <Meta
        pageTitle="BMSG FES'22"
        pageDesc="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="BMSG FES'22"
        subtitle="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <h3>作品説明</h3>
          <p>
            SKY-HI主宰のレーベル「BMSG」がイベントを開催することに伴い、ライブの模様やコメント映像を配信。
            <br />
            掲載期間：2022年9月〜10月頃
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：Webデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
          </p>
        </section>
        <h3>デザイン</h3>
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
      </PostBody>
    </Container>
  );
}
