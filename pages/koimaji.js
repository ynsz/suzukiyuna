import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/koimaji_full.jpg";

export default function Koimaji() {
  return (
    <Container>
      <Meta
        pageTitle="恋なんて、本気でやってどうするの？"
        pageDesc="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT"
      />
      <Hero
        title="恋なんて、本気でやってどうするの？"
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
            GYAO!独占チェインストーリーと最新話を配信するため、告知ページを制作。
            <br />
            <br />
            掲載期間：2022年4月〜7月頃（掲載終了）
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
