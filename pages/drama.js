import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/drama_full.jpg";
import Img from "images/drama_2110.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Drama() {
  return (
    <Container>
      <Meta
        pageTitle="季節ドラマ"
        pageDesc="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="季節ドラマ"
        subtitle="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
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
          <h4>目的</h4>
          <p>
            CTRをアップさせて、ストリーミング数（動画再生回数）の増加につなげる
          </p>
          <h4>対応方針</h4>
          <p>
            ・なんとなくコンテンツを探しに訪問したユーザーへの視聴促進
            <br />
            ・ドラマに限定しない他ジャンルの訴求
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
            ・テーマに沿ったビジュアルの作成
            <br />
            ・「ランキング」「話題の◯◯」枠を設置
            <br />
            ・ユーザーが参考にすると思われる情報を追加→「テレビ局」「放送時間」「主演」を初期表示に
            <br />
            ・「放送曜日」「テレビ局」「深夜枠」の絞り込みを追加
            <br />
            ・他ジャンルも掲載し、試聴を促す
          </p>
          <h4>結果</h4>
          <p>
            改修前はCTRが16〜20%、訪問UB/日が5,000程度だったところ、CTRが23%（+3〜6%）、訪問UB/日が10,000程度（+5,000）とプラス。
            <br />
            特に、「ランキング」はCTRが高く、訪問ユーザーの半数程度を占めた。
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
