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
          <a href="https://gyao.yahoo.co.jp/specials/goodbye">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            あなたとエンタメにありがとう
          </a>
          <p>
            GYAO!ユーザーに今までの感謝の気持ちを伝える特別な特集。
            <br />
            2023年3月31日にクローズするGYAO!だが、残りの1ヶ月も魅力的なコンテンツを配信していることをアピール。
            <br />
            いつも以上に充実したコンテンツラインナップに加えて、各カテゴリーのスタッフからの最後のコメントや、Yahoo!ニュースに寄せられたユーザーからのコメントをピックアップして掲載している。
            <br />
            暗く悲しい雰囲気にならないよう、紙吹雪やグラデーション、アニメーションを使用して落ち着きはありながらも華やかな印象に。
          </p>
          <p>掲載期間：2023年2月27日〜3月31日</p>
        </div>
      </PostBody>
    </Container>
  );
}
