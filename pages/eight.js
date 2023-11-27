import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/stage_pc.jpg";
import ImgFull2 from "images/stage_sp.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function eight() {
  return (
    <Container>
      <Meta
        pageTitle="デレステ8周年特設サイト"
        pageDesc="WEB DESIGN, UI/UX DESIGN"
      />

      <Hero
        title="デレステ8周年特設サイト"
        subtitle="WEB DESIGN, UI/UX DESIGN"
      />
      <PostBody>
        <div>
          <a href="https://cinderella.idolmaster.jp/sl-stage/8thanniversary/">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            デレステ8周年特設サイト
          </a>
          <section
            style={{
              margin: "0 auto 40px",
            }}
          >
            <h3>作品説明</h3>
            <p>
              スマホゲーム「アイドルマスターシンデレラガールズ」の8周年を記念した特集。
              <br />
              <br />
              掲載期間：2023年9月〜
              <br />
              制作期間：3ヶ月
              <br />
              担当領域：Webデザイン、UI/UXデザイン
              <br />
              使用ツール・技術：Photoshop/Illustrator
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
            maxWidth: "375px",
            margin: "0 auto",
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
      </PostBody>
    </Container>
  );
}
