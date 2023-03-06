import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/cbd.jpg";
import page1 from "images/page1.jpg";
import page2 from "images/page2.jpg";
import page3 from "images/page3.jpg";
import page4 from "images/page4.jpg";
import page5 from "images/page5.jpg";
import page6 from "images/page6.jpg";
import page7 from "images/page7.jpg";
import page8 from "images/page8.jpg";
import page9 from "images/page9.jpg";
import pattern1 from "images/pattern1.png";
import pattern2 from "images/pattern2.png";
import pattern3 from "images/pattern3.png";

export default function Mitaka() {
  return (
    <Container>
      <Meta pageTitle="AndTheory" pageDesc="ROGO DESIGN, LABEL DESIGN" />

      <Hero title="AndTheory" subtitle="ROGO DESIGN, LABEL DESIGN" />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <h3>作品説明</h3>
          <p>
            女性向けCBDオイルブランド「AndTheory」のパッケージ・ロゴデザイン。
            <br />
            営業用資料のデザインも担当。
            <br />
            <br />
            掲載期間：これから
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：パッケージデザイン、ロゴデザイン、資料デザイン
            <br />
            使用ツール・技術：XD/Photoshop/Illustrator
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
        <div>
          <ul>
            <li>
              <figure
                style={{
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page1}
                  alt="page1"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page2}
                  alt="page2"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page3}
                  alt="page3"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page4}
                  alt="page4"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page5}
                  alt="page5"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page6}
                  alt="page6"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page7}
                  alt="page7"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page8}
                  alt="page8"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={page9}
                  alt="page9"
                  layout="responsive"
                  sizes="100vw"
                  priority
                  placeholder="blur"
                />
              </figure>
            </li>
          </ul>
        </div>
        <div>
          <h4>ラベルデザイン・ロゴデザインの別パターン</h4>
          <ul>
            <li>
              <figure
                style={{
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={pattern1}
                  alt="pattern1"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={pattern2}
                  alt="pattern2"
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
                  maxWidth: "300px",
                  margin: "0 auto",
                }}
              >
                <Image
                  src={pattern3}
                  alt="pattern3"
                  layout="responsive"
                  sizes="100vw"
                  priority
                  placeholder="blur"
                />
              </figure>
            </li>
          </ul>
        </div>
      </PostBody>
    </Container>
  );
}
