import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/fammuu_full.jpg";
import mp4 from "images/fammuu_animation.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Fammuu() {
  return (
    <Container>
      <Meta pageTitle="fammuu" pageDesc="WEB DESIGN, UI/UX DESIGN" />

      <Hero title="fammuu" subtitle="WEB DESIGN, UI/UX DESIGN" />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://fammuu.com/">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              fammuu
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            アーティスト向けファンクラブ作成サービスのリリースに伴い、LPを作成。
            <br />
            <br />
            掲載期間：2021年〜
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：Webデザイン、UI/UXデザイン、映像制作
            <br />
            使用ツール・技術：Figuma/Photoshop/Illustrator/AfterEffect
          </p>
        </section>
        <h3>デザイン</h3>
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <video
            autoPlay
            muted
            loop
            controls
            style={{
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
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
