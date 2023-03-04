import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/korean_full.jpg";
import Img from "images/koreandrama_2204.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Korean() {
  return (
    <Container>
      <Meta
        pageTitle="もっと韓ドラ＆アジアドラマ"
        pageDesc="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="もっと韓ドラ＆アジアドラマ"
        subtitle="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://gyao.yahoo.co.jp/specials/koreandrama">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              もっと韓ドラ＆アジアドラマ
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            韓国ドラマ・アジアンドラマの独占配信や掘り出し作品を紹介する特集。
            <br />
            掲載期間：2022年6月〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：ビジュアルデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
          </p>
          <h4>目的</h4>
          <p>
            CTRをアップさせて、ストリーミング数（動画再生回数）の増加につなげる
          </p>
          <h4>対応方針</h4>
          <p>
            ・韓国ドラマのライトユーザーが見たいと思える作品との出会いを促し、視聴転換率の向上につなげる
            <br />
            ・韓国ドラマに限らず、他カテゴリーの作品も含めて視聴転換率の向上につなげる
            <br />
            ・GYAO!トップの作品モジュール群（カテトップ）では難しいリッチな表現を特集で実現させる
          </p>
          <h4>改善前</h4>
          <figure
            style={{
              maxWidth: "200px",
              margin: "20px auto",
            }}
          >
            <Image
              src={Img}
              alt="Img"
              layout="responsive"
              sizes="100vw"
              priority
              placeholder="blur"
            />
          </figure>
          <h4>施策</h4>
          <p>
            ・推し作品を深掘ることで、パッと見でドラマの概要を認識させる
            <br />
            ・「タグ情報」「主演」「番組概要」「ウォッチボタン」を設置
            <br />
            ・他作品にも試聴をつなげるべく、情報をコンパクトかつキャスト関連作品を追加
            <br />
            ・特別テーマ枠を設置し、より作品の魅力が伝わるようなデザイン
          </p>
          <h4>結果</h4>
          <p>
            改修前はCTRが45%、訪問UB/日が4,200程度だったところ、CTRが50%（+5%）、訪問UB/日が8,500程度（+4,300）とプラス。
            <br />
            テーマ枠の新規で設置をしたことで作品の企画化がやりやすくなったため、各方面からの誘導を増やしたことも要因となり、訪問UBが増加した。
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
