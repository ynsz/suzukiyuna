import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/mitaka_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Mitaka() {
  return (
    <Container>
      <Meta
        pageTitle="不動産売却"
        pageDesc="WEB DESIGN, sUI/UX DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="不動産売却"
        subtitle="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://gifunavi.jp/sell/">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              不動産売却
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            岐阜県にある不動産会社の売買LP。
            <br />
            不動産売却という複雑な仕組みをイラストや図を用いてわかりやすく説明。
            <br />
            <br />
            掲載期間：2020年頃〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：Webデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/HTML/CSS/JavaScript/iQuery
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
