import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/ikkimi_full.jpg";
import Img from "images/img2110.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Ikkimi() {
  return (
    <Container>
      <Meta
        pageTitle="イッキ見！"
        pageDesc="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="イッキ見！"
        subtitle="UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://gyao.yahoo.co.jp/specials/ikkimi">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              イッキ見！
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            複数エピソードのあるアニメ・ドラマを「イッキ」にまとめて「見」られるイッキ見作品をまとめた特集。
            <br />
            GYAOトップから定常的な流入が見込めるページのため、リリース後もPDCAを回して継続した施策の検討と改修、数値分析を行った。
            <br />
            掲載期間：2022年6月〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：ビジュアルデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
          </p>
          <h4>課題</h4>
          <p>
            目標に対するAD
            request、ストリーミング数（動画再生回数）のギャップフィルを埋めるために、ユーザー一人当たりの再生数を増やしたい。
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
          </p>
          <h4>仮説</h4>
          <p>
            作品の魅力が伝わるようなアプローチをすることで作品に興味を持ってもらいやすくなり、視聴につながるのではないか。
          </p>
          <h4>根拠</h4>
          <p>
            特集に訪問した映像視聴者のデモグラフィック分析を行ったところ、ヘビーユーザー層が高く、ライトユーザー層が低かった。
            <br />
            イッキ見特集に作品を探す目的で訪問したのにも関わらず、ライトユーザーの40%が見たい作品はないという状況がデータから読み取れた。
          </p>
          <h4>施策</h4>
          <p>
            1〜2週間に1つ程度、以下のような施策の実施、効果を見て施策の継続か中止の判断を行った。
            <br />
            ・特集内容が簡潔にユーザーに届くようにメインビジュアルバナーを変更
            <br />
            ・ページにメリハリを持たせる縦サムネイルと横スクロール
            <br />
            ・ファーストビューで作品サムネイルがより多く見えるようにマージンを調整
            <br />
            ・視覚的に訴えるため、作品サムネイルのサイズを大きくしたり、視聴マークアイコンを取り除いた
            <br />
            ・コントラスト比を上げて、文字の読みやすさやアクセシビリティを考慮
            <br />
            ・おすすめ作品をランダムにピックアップして、ページの更新感を出したり新たな作品との出会いを促進
            <br />
            ・ピックアップ作品はジャンプ率を高くしたり、作品詳細説明が入るように開発
            <br />
            ・早めの試聴を促すために配信期間を追加（スノッブ効果）
            <br />
            ・運用の負担が増えないように手動の情報追加ではなく、自動化を意識した開発
          </p>
          <h4>結果</h4>
          <p>
            各施策により作品CTRが2%、訪問UBが10,000程度アップし、AD
            request、ストリーミング数（動画再生回数）増加に貢献した。
            <br />
            現在もCTR20%〜をキープしている。
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
