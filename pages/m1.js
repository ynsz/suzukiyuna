import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/m1_full.jpg";
import Img1 from "images/m1_1.jpg";
import Img2 from "images/m1_2.jpg";
import Img3 from "images/m1_3.jpg";
import Img4 from "images/m1_4.jpg";
import wc1 from "images/wc_1.jpg";
import wc2 from "images/wc_2.png";
import result from "images/m1_result.png";

export default function M1() {
  return (
    <Container>
      <Meta
        pageTitle="M-1グランプリ2021"
        pageDesc="WEB DESIGN, UX DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="M-1グランプリ2021"
        subtitle="WEB DESIGN, UX DESIGN, WEB DEVELOPMENT"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <h3>作品説明</h3>
          <p>
            ワイルドカード、ファイナリスト発表記者会見、世界最速大反省会、M-1アフター座談会などGYAO!とM1-グランプリによるオリジナル企画の特集をデザインした。
            <br />
            掲載期間：2021年10月29日〜2022年2月頃
            <br />
            制作期間：7ヶ月
            <br />
            担当領域：Webデザイン、UI/UXデザイン、コーディング
            <br />
            使用ツール・技術：Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
          </p>
          <h4>課題</h4>
          <p>
            各企画の趣旨が分かりにくい。特にワイルドカードはルールが複雑のため、ユーザーに伝わりにくい。
          </p>
          <figure
            style={{
              maxWidth: "200px",
              margin: "20px auto",
            }}
          >
            <Image
              src={wc2}
              alt="wc2"
              layout="responsive"
              sizes="100vw"
              priority
              placeholder="blur"
            />
          </figure>
          <h4>仮説</h4>
          <p>ルールが簡潔にまとまっていると分かりやすいのではないか。</p>
          <h4>根拠</h4>
          <p>
            認知的ウォークスルーを実施した際に、説明文が多く初見ではルールを瞬時に理解できないという声が上がった。
            <br />
            また、昨年のワイルドカード実施時、ルールを理解していないユーザーの声がSNSに上がっていた。
          </p>
          <h4>施策</h4>
          <p>
            メインビジュアルの目立つ位置にルール説明のボタンを設置。
            <br />
            モーダルでイラストを使用して複雑なルールをわかりやすく説明して一つの画面にまとめた。
          </p>
          <ul>
            <li>
              <figure
                style={{
                  maxWidth: "200px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={Img1}
                  alt="Img1"
                  layout="responsive"
                  sizes="100vw"
                  priority
                  placeholder="blur"
                />
              </figure>
            </li>
            <li>
              <figure
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={wc1}
                  alt="wc1"
                  layout="responsive"
                  sizes="100vw"
                  priority
                  placeholder="blur"
                />
              </figure>
            </li>
          </ul>
          <h4>結果</h4>
          <p>
            ワイルドカード期間中のCTR（76％）とST数の増加に繋がった。SNSでは企画が理解しづらいという投稿が減少した。
            <br />
            M-1グランプリ企画全体を通しては、訪問UBが昨年比134％、APPダウンロードが昨年比130%と目標に大きく貢献した。
          </p>
          <figure
            style={{
              maxWidth: "600px",
              margin: "20px auto",
            }}
          >
            <Image
              src={result}
              alt="result"
              layout="responsive"
              sizes="100vw"
              priority
              placeholder="blur"
            />
          </figure>
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
        <ul>
          <li>
            <figure
              style={{
                maxWidth: "200px",
                margin: "0 auto",
              }}
            >
              <Image
                src={Img1}
                alt="Img"
                layout="responsive"
                sizes="100vw"
                placeholder="blur"
              />
            </figure>
          </li>
          <li>
            <figure
              style={{
                maxWidth: "200px",
                margin: "0 auto",
              }}
            >
              <Image
                src={Img2}
                alt="Img"
                layout="responsive"
                sizes="100vw"
                placeholder="blur"
              />
            </figure>
          </li>
          <li>
            <figure
              style={{
                maxWidth: "200px",
                margin: "0 auto",
              }}
            >
              <Image
                src={Img3}
                alt="Img"
                layout="responsive"
                sizes="100vw"
                placeholder="blur"
              />
            </figure>
          </li>
          <li>
            <figure
              style={{
                maxWidth: "200px",
                margin: "0 auto",
              }}
            >
              <Image
                src={Img4}
                alt="Img"
                layout="responsive"
                sizes="100vw"
                placeholder="blur"
              />
            </figure>
          </li>
        </ul>
      </PostBody>
    </Container>
  );
}
