import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/summerfes_full.jpg";

export default function Summerfes() {
  return (
    <Container>
      <Meta
        pageTitle="真夏の動画まつり"
        pageDesc="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="真夏の動画まつり"
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
            夏休みにもっとGYAO!の動画を楽しんでもらうための特集。
            <br />
            <br />
            掲載期間：2022年7月〜8月頃（掲載終了）
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
