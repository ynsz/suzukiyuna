import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/tvdrama_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Tvdrama() {
  return (
    <Container>
      <Meta
        pageTitle="Yahoo!テレビ ドラマ特集"
        pageDesc="UI/UX DESIGN, WEB DEVELOPMENT, CMS"
      />

      <Hero
        title="Yahoo!テレビ ドラマ特集"
        subtitle="UI/UX DESIGN, WEB DEVELOPMENT, CMS"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://tv.yahoo.co.jp/tv_show/drama/">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              Yahoo!テレビ ドラマ特集
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            ドラマ情報がまとめられた特集ページ。
            <br />
            UIデザインからコーディング、MovableTypeを使用したCMS構築を行い、誰でも入稿可能な特集を制作。
            <br />
            <br />
            掲載期間：2020年〜現在
            <br />
            制作期間：2ヶ月
            <br />
            担当領域：UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：XD/HTML/CSS/JavaScript/jQuery/MovableType
          </p>
        </section>
        <h3>デザイン</h3>
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
