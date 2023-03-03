import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/goodbye_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Goodbye() {
  return (
    <Container>
      <Meta
        pageTitle="あなたとエンタメにありがとう"
        pageDesc="WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="あなたとエンタメにありがとう"
        subtitle="WEB DESIGN, WEB DEVELOPMENT"
      />
      <PostBody>
        <div>
          <a href="https://gyao.yahoo.co.jp/specials/goodbye">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            あなたとエンタメにありがとう
          </a>
          <p>
            GYAO!ユーザーに今までの感謝の気持ちを伝える特別な特集。
            <h4>課題</h4>
            GYAO!がクローズするのにも関わらず、ユーザーに最後であるということが伝わりづらい。
            <h4>仮説</h4>
            今までのGYAO!の軌跡などが振り返ることができるとユーザーは嬉しいのではないか。
            <h4>根拠</h4>
            ニュースやSNSから、GYAO!の思い出を振り返るコメントが多く見られた。
            <h4>選択</h4>
            <h4>結果</h4>
          </p>
          <p>掲載期間：2023年2月27日〜3月31日</p>
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
