import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/elements_top_pc.jpg";
import ImgFull2 from "images/elements_top_sp.jpg";
import ImgFull3 from "images/elements_contest_pc.jpg";
import ImgFull4 from "images/elements_contest_sp.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function nine() {
  return (
    <Container>
      <Meta
        pageTitle="プリコネフェス2024"
        pageDesc="WEB DESIGN, UI/UX DESIGN"
      />

      <Hero
        title="プリコネフェス2024"
        subtitle="WEB DESIGN, UI/UX DESIGN"
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
              スマホゲーム「プリンセスコネクト！Re:Dive」のオンラインイベントの告知サイト。
              <br />
              ユーザー参加型のコンテストも実施。
              <br />
              <br />
              掲載期間：2023年12月〜
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
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto",
          }}
        >
          <Image
            src={ImgFull4}
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
