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
            <a href="https://ikioi-intaisumo.com/">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              勢引退春日山襲名披露大相撲
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            勢引退春日山襲名披露大相撲を告知・チケット購入するページ。
            <br />
            デザインからNext.jsでの開発、microCMSでの繋ぎ込みまで一貫して制作。
            <br />
            <br />
            掲載期間：2023年1月〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：Webデザイン、UI/UXデザイン、コーディング、フロントエンド、CMS構築
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/CSS/JavaScript/React/Next.js/microCMS/Netlify
          </p>
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
      </PostBody>
    </Container>
  );
}
