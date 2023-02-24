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
        <div>
          <p>
            ワイルドカード、ファイナリスト発表記者会見、世界最速大反省会、M-1アフター座談会などGYAO!とM1-グランプリによる企画の特集をデザインした。
            <br />
            各企画のページに対してユースケースを考え、ユーザー課題を見つけてユーザビリティや理想的なUX体験を考えて特集に反映させた。
            <br />
            結果、訪問UBが昨年比134％、APPダウンロードが昨年比130%と目標に大きく貢献した。
          </p>
          <p>掲載期間：2021年10月29日〜2022年2月頃</p>
        </div>
      </PostBody>
    </Container>
  );
}
