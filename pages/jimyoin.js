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
            もっとドラマが見たくなるような情報を掲載した季節ドラマの特集。
            <br />
            掲載期間：2022年3月〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：ビジュアルデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
          </p>
          <h4>課題</h4>
          <p></p>
          <h4>仮説</h4>
          <p></p>
          <h4>根拠</h4>
          <p></p>
          <h4>施策</h4>
          <p></p>
          <h4>結果</h4>
          <p></p>
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
        <div>
          <p>デザインからGatsbyJSでの開発、イラスト制作を行なった。</p>
          <p>掲載期間：これから</p>
        </div>
      </PostBody>
    </Container>
  );
}
