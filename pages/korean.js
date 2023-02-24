import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/korean_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Korean() {
  return (
    <Container>
      <Meta
        pageTitle="もっと韓ドラ＆アジアドラマ"
        pageDesc="UI DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="もっと韓ドラ＆アジアドラマ"
        subtitle="UI DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />
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
          <a href="https://gyao.yahoo.co.jp/specials/koreandrama">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            もっと韓ドラ＆アジアドラマ
          </a>
          <p>
            韓国ドラマのストーリーにフォーカスした情報整理を行い、ドラマの魅力をアピール。
          </p>
          <p>掲載期間：2022年6月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
