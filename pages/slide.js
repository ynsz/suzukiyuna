import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/slide1.jpg";
import ImgFull2 from "images/slide2.jpg";
import ImgFull3 from "images/slide3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function slide() {
  return (
    <Container>
      <Meta
        pageTitle="Shadowverse EVOLVE カルテットバトル説明スライド"
        pageDesc="SLIDE DESIGN"
      />

      <Hero
        title="Shadowverse EVOLVE カルテットバトル説明スライド"
        subtitle="SLIDE DESIGN"
      />
      <PostBody>
        <div>
          <section
            style={{
              margin: "0 auto 40px",
            }}
          >
            <h3>作品説明</h3>
            <p>
              カードゲーム「Shadowverse EVOLVE」オフラインイベントで使用されたゲームのルール説明スライドをデザイン。
              <br />
              <br />
              掲載期間：2023年10月
              <br />
              制作期間：2営業日
              <br />
              担当領域：スライドデザイン
              <br />
              使用ツール・技術：Photoshop
            </p>
          </section>
        </div>
        <h3>デザイン</h3>
        <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
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
        <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull2}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull3}
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
