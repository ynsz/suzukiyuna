import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/bmsgfes_full.jpg";

export default function Bmsgfes() {
  return (
    <Container>
      <Meta pageTitle="BMSG FES'22" pageDesc="WEB DESIGN, WEB DEVELOPMENT" />

      <Hero title="BMSG FES'22" subtitle="WEB DESIGN, WEB DEVELOPMENT" />
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
            SKY-HI主宰のレーベル「BMSG」がBMSG史上最大規模のイベントを開催することに伴い、GYAO!ではライブの模様やコメント映像を無料配信。
            <br />
            特集ページと、それに合わせたズバトクキャンペーンページの画像やバナーも作成した。
            <br />
            今時の男性アイドルらしいおしゃれなクールさを意識。
          </p>
          <p>掲載期間：2022年9月〜10月頃</p>
        </div>
      </PostBody>
    </Container>
  );
}
