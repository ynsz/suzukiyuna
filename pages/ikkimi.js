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
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <a href="https://gyao.yahoo.co.jp/specials/ikkimi">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            イッキ見！
          </a>
          <h3>作品説明</h3>
          <p>
            複数エピソードのあるアニメ・ドラマを「イッキ」にまとめて「見」られるイッキ見作品をまとめた特集。
            <br />
            掲載期間：2022年6月〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：ビジュアルデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
          </p>
          <h4>課題</h4>
          <p>
            目標に対するAD
            request、ST数のギャップフィルを埋めるために、ユーザー一人当たりの再生数を増やしたい。
          </p>
          <h4>仮説</h4>
          <p>
            作品の魅力が伝わるようなアプローチをすることで作品に興味を持ってもらいやすくなり、視聴につながるのではないか。
          </p>
          <h4>根拠</h4>
          <p></p>
          <h4>施策</h4>
          <p></p>
          <h4>結果</h4>
          <p></p>
        </section>
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
