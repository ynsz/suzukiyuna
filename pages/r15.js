import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/r15_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Anime() {
  return (
    <Container>
      <Meta
        pageTitle="官能・過激作品"
        pageDesc="UI DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="官能・過激作品"
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
          <a href="https://gyao.yahoo.co.jp/specials/r15">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            官能・過激作品
          </a>
          <p>
            サムネイルにも使われているメインビジュアルは、クリックがされやすい肌色を強調しつつも下品になりすぎない程度に作成。
          </p>
          <p>掲載期間：2022年10月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
