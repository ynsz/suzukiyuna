import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/tv_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Tv() {
  return (
    <Container>
      <Meta pageTitle="Yahoo!テレビ" pageDesc="UI/UX DESIGN, WEB DEVELOPMENT" />

      <Hero title="Yahoo!テレビ" subtitle="UI/UX DESIGN, WEB DEVELOPMENT" />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://tv.yahoo.co.jp/listings">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              Yahoo!テレビ
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            番組表や番組情報を提供するヤフーサービスのコーディング領域を担当。
            <br />
            デザイナー主担当として、他デザイナー、エンジニア、ディレクター、プロジェクトマネージャーなどおよそ40名が関わるフルリニューアルプロジェクトを推進。
            <br />
            コーダー要因としての業務委託社員2名を取りまとめたり、GitHubを使ってコードレビューなどを行なった。
            <br />
            <br />
            掲載期間：2020年〜現在
            <br />
            制作期間：6ヶ月
            <br />
            担当領域：UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：Sketch/HTML/CSS
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
