import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/tv_full.jpg";
import sitemap1 from "images/Sitemap_20191007.jpg";
import sitemap2 from "images/Sitemap_20191205.jpg";

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
            <br />
            掲載期間：2020年〜現在
            <br />
            制作期間：6ヶ月
            <br />
            担当領域：UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：Sketch/HTML/CSS
          </p>
          <h4>目的</h4>
          <p>
            プロダクトのモダン化、開発プロセス改善、システム仕様の可視化を目的としたフルリニューアルプロジェクトの遂行
          </p>
          <h4>対応方針</h4>
          <p>
            ・無駄なページを集約・削除をすることで開発/運用コストを削減
            <br />
            ・UI仕様書の作成、SEO対策、アクセシビリティの向上、作業効率を目的としたメタ言語の導入などにより、デザインにおけるモダン化を実現
          </p>
          <h4>改善前</h4>
          <p>無駄なページが散財した状態</p>
          <figure
            style={{
              maxWidth: "100%",
              margin: "20px auto",
            }}
          >
            <Image
              src={sitemap1}
              alt="sitemap1"
              layout="responsive"
              sizes="100vw"
              priority
              placeholder="blur"
            />
          </figure>
          <h4>施策</h4>
          <p>
            ・Yahoo!全社のデザイン原則に則り、Yahoo!テレビ独自のUIコンセプトを策定
            <br />
            ・コーディングガイドを作成
            <br />
            ・レスポンシブデザイン、EJS/Sassによるモダンなコーディング環境を整えた
            <br />
            ・GitHubによるコード管理、レビューを行うことでコードの品質向上
          </p>
          <h4>結果</h4>
          <p>
            ページの集約・削除を行い、プロダクトのモダン化、開発プロセス改善、システム仕様の可視化により、開発/運用コストを50%削減できた。
            <figure
              style={{
                maxWidth: "600px",
                margin: "20px auto",
              }}
            >
              <Image
                src={sitemap2}
                alt="sitemap2"
                layout="responsive"
                sizes="100vw"
                priority
                placeholder="blur"
              />
            </figure>
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
