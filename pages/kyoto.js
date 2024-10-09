import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/chirashi_omote.png";
import ImgFull2 from "images/chirashi_ura.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function kyoto() {
  return (
    <Container>
      <Meta
        pageTitle="子育てマップまち歩きイベント"
        pageDesc="GRAPHIC DESIGN"
      />

      <Hero
        title="子育てマップまち歩きイベント"
        subtitle="GRAPHIC DESIGN"
      />
      <PostBody>
        <div>
          <section
            style={{
              margin: "0 auto 40px",
            }}
                  >
                      <div>
            <a href="https://www.pref.kyoto.jp/shoshi/suisinkaigi/machiaruki.html">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              イベント特設サイト（京都府）
            </a>
          </div>
            <h3>作品説明</h3>
            <p>
                子育てマップアプリ『iiba』が京都府及びあいおいニッセイ同和損害保険株式会社と連携して、京都府内各地のキッズフレンドリー施設を巡り、口コミを投稿することで豪華景品が当たるまち歩きイベントを開催。
                <br />広報用チラシ両面デザインを担当。
              <br />
              <br />
              掲載期間：2024年10月〜
              <br />
              制作期間：1週間
              <br />
              担当領域：グラフィックデザイン
              <br />
              使用ツール・技術：Photoshop/Illustrator/Figma
            </p>
          </section>
        </div>
        <h3>デザイン</h3>
        <h4>UI/UX</h4>
        <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
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
        <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull2}
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
