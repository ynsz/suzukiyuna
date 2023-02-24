import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/anime_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Anime() {
  return (
    <Container>
      <Meta
        pageTitle="季節アニメ"
        pageDesc="UI DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="季節アニメ"
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
          <a href="https://gyao.yahoo.co.jp/specials/anime-winter">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            季節アニメ
          </a>
          <p>
            作品を一覧で確認できるリストや、常時流れるアニメ映像などで、視聴を促すための施策を実施した。
          </p>
          <p>掲載期間：2022年3月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
