import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/tv_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Tvdrama() {
  return (
    <Container>
      <Meta pageTitle="Yahoo!テレビ ドラマ特集" pageDesc="WEB DEVELOPMENT" />

      <Hero title="Yahoo!テレビ ドラマ特集" subtitle="WEB DEVELOPMENT" />
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
          <a href="https://tv.yahoo.co.jp/tv_show/drama/">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Yahoo!テレビ ドラマ特集
          </a>
          <p>
            ドラマ情報がまとめられた特集ページ。
            <br /> UIデザインからコーディング、Movable
            Typeを使用したCMS構築を行い、誰でも入稿可能な特集を制作。
          </p>
          <p>掲載期間：2020年頃〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
