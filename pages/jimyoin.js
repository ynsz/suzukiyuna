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
        pageDesc="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT, ILLUSTRATION"
      />

      <Hero
        title="慈妙院動物霊園"
        subtitle="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT, ILLUSTRATION"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <h3>作品説明</h3>
          <p>
            愛知県にあるペット霊園のサイト。
            <br />
            デザインからGatsbyJSでの開発、イラスト制作を行なった。
            <br />
            <br />
            掲載期間：これから
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：イラストレーション、Webデザイン、UI/UXデザイン、コーディング、フロントエンド
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/CSS/JavaScript/React/GatsbyJS/Netlify
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
