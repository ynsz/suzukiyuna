import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/ikkimi_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Ikkimi() {
  return (
    <Container>
      <Meta
        pageTitle="イッキ見！"
        pageDesc="UI DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="イッキ見！"
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
          <a href="https://gyao.yahoo.co.jp/specials/ikkimi">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            イッキ見！
          </a>
          <p>
            複数エピソードのあるアニメ・ドラマを「イッキ」にまとめて「見」られるイッキ見作品をまとめた特集。
            <br />
            GYAO!トップからアクセスしやすい位置にあり多くの流入が見込めるため、サービスマネージャー、ディレクターとPDCAを回しながら改善をした。
            <br />
            概要がわかりにくいイッキ見の説明をするためにモーダルを追加、作品サムネイルを大きくする、ピックアップ作品にあらすじを入れるなど多くの施策をおこなった。
            <br />
            刷新前はCTR10%代が多かったが、現在でもCTR20%をキープするなど数値の改善が見られた。
          </p>
          <p>掲載期間：2022年6月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
