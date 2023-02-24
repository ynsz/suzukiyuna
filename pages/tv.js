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
      <Meta pageTitle="Yahoo!テレビ" pageDesc="WEB DEVELOPMENT" />

      <Hero title="Yahoo!テレビ" subtitle="WEB DEVELOPMENT" />
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
          <a href="https://tv.yahoo.co.jp/listings">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Yahoo!テレビ
          </a>
          <p>
            番組表や番組情報を提供するヤフーサービスのコーディング領域を担当。
            <br />
            デザイナー主担当として、他デザイナー、エンジニア、ディレクター、プロジェクトマネージャーなどおよそ40名が関わるフルリニューアルプロジェクトを推進。
            <br />
            コーダー要因としての業務委託社員2名を取りまとめたり、GitHubを使ってコードレビューなどを行なった。
          </p>
          <p>掲載期間：2020年頃〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
