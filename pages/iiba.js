import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/iiba_splash.png";
import ImgFull2 from "images/iiba_top.png";
import ImgFull3 from "images/iiba_mainspot.png";
import ImgFull4 from "images/iiba_detail.png";
import ImgFull5 from "images/iiba_my.png";
import ImgFull6 from "images/iiba_spot.png";
import ImgFull7 from "images/iiba_spot_done.png";
import ImgFull8 from "images/iiba_meishi_omote.png";
import ImgFull9 from "images/iiba_meishi_ura.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function iiba() {
  return (
    <Container>
      <Meta
        pageTitle="iiba"
        pageDesc="UI/UX DESIGN,GRAPHIC DESIGN"
      />

      <Hero
        title="iiba"
        subtitle="UI/UX DESIGN,GRAPHIC DESIGN"
      />
      <PostBody>
        <div>
          <section
            style={{
              margin: "0 auto 40px",
            }}
          >
            <h3>作品説明</h3>
            <p>
              子育てアプリ「iiba」のUI/UX改善や名刺作成。
              <br />
              <br />
              掲載期間：2023年10月〜
              <br />
              制作期間：3ヶ月〜
              <br />
              担当領域：UI/UXデザイン、グラフィックデザイン
              <br />
              使用ツール・技術：Photoshop/Illustrator/Figma
            </p>
          </section>
        </div>
        <h3>デザイン</h3>
        <h4>UI/UX</h4>
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
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
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull2}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
                <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull3}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull4}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull5}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull6}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull7}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
                <h4>名刺</h4>
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull8}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <figure
          style={{
            maxWidth: "375px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull9}
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
