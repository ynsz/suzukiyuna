import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/drama_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Ikkimi() {
  return (
    <Container>
      <Meta
        pageTitle="季節ドラマ"
        pageDesc="UI DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="季節ドラマ"
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
          <a href="https://gyao.yahoo.co.jp/specials/drama-catchup">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            季節ドラマ
          </a>
          <p>
            作品詳細モーダルの配置やランキングの追加などで、もっとドラマが見たくなるような情報を掲載している。
          </p>
          <p>掲載期間：2022年3月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
