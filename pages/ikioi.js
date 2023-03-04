import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/ikioi_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Ikioi() {
  return (
    <Container>
      <Meta
        pageTitle="勢引退春日山襲名披露大相撲"
        pageDesc="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT, CMS"
      />

      <Hero
        title="勢引退春日山襲名披露大相撲"
        subtitle="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT, CMS"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://gyao.yahoo.co.jp/specials/drama-catchup">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              季節ドラマ
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            もっとドラマが見たくなるような情報を掲載した季節ドラマの特集。
            <br />
            掲載期間：2022年3月〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：ビジュアルデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
          </p>
          <h4>課題</h4>
          <p></p>
          <h4>仮説</h4>
          <p></p>
          <h4>根拠</h4>
          <p></p>
          <h4>施策</h4>
          <p></p>
          <h4>結果</h4>
          <p></p>
        </section>
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
        <div>
          <a href="https://ikioi-intaisumo.com/">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            勢引退春日山襲名披露大相撲
          </a>
          <p>
            デザインからNext.jsでの開発、microCMSでの繋ぎ込みまで一貫して制作。
          </p>
          <p>掲載期間：2023年1月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
