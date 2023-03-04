import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/anime_full.jpg";
import Img from "images/anime00.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Anime() {
  return (
    <Container>
      <Meta
        pageTitle="季節アニメ"
        pageDesc="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="季節アニメ"
        subtitle="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://gyao.yahoo.co.jp/specials/anime-winter">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              季節アニメ
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            当期に放送中のアニメに関する情報をまとめた季節アニメ特集。
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
            ・掲載情報の整理をしてCTRを向上
            <br />
            ・ユーザーの利便性向上
            <br />
            ・手動更新していたところを、contentful連携させて運用負担の軽減
          </p>
          <h4>改善前</h4>
          <figure
            style={{
              maxWidth: "600px",
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
            ・50音一覧枠の設置
            <br />
            ・フォントやボタンの調整により見せたい情報の強弱をつけた
            <br />
            ・モーダル表示による作品情報の整理
          </p>
          <h4>結果</h4>
          <p>
            改修前はCTRが30%だったところ、CTRが36%（+6%）と増加。
            <br />
            改修前は強力タイトルの「進撃の巨人」や「鬼滅の刃」があったのにも関わらずプラスに繋げることができたため、コンテンツ要因の影響を考慮しても施策に効果があったことが実証された。
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
