import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/morzh01.jpg";
import ImgFull2 from "images/morzh02.jpg";
import ImgFull3 from "images/morzh03.jpg";
import ImgFull4 from "images/morzh04.jpg";
import ImgFull5 from "images/morzh05.jpg";
import ImgFull6 from "images/morzh06.jpg";
import ImgFull7 from "images/morzh07.jpg";
import ImgFull8 from "images/morzh08.jpg";
import ImgFull9 from "images/morzh09.jpg";
import ImgFull10 from "images/morzh10.jpg";
import ImgFull11 from "images/morzh11.jpg";
import ImgFull12 from "images/morzh12.jpg";
import ImgFull13 from "images/morzh13.jpg";
import ImgFull14 from "images/morzh14.jpg";
import ImgFull15 from "images/morzh15.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function morzh() {
  return (
    <Container>
      <Meta
        pageTitle="テントサウナMORZH 営業資料"
        pageDesc="SLIDE DESIGN"
      />

      <Hero
        title="テントサウナMORZH 営業資料"
        subtitle="SLIDE DESIGN"
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
              テントサウナ「MORZH」の営業資料デザイン。
              <br />
              <br />
              掲載期間：2023年6月
              <br />
              制作期間：14営業日
              <br />
              担当領域：スライドデザイン
              <br />
              使用ツール・技術：Figma
            </p>
          </section>
        </div>
        <h3>デザイン</h3>
        <figure
          style={{
            maxWidth: "800px",
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
            maxWidth: "800px",
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
            maxWidth: "800px",
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
            maxWidth: "800px",
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
            maxWidth: "800px",
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
            maxWidth: "800px",
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
            maxWidth: "800px",
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
                                <figure
          style={{
            maxWidth: "800px",
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
            maxWidth: "800px",
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
                                <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull10}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
                                <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull11}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
                                <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull12}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
                                <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull13}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
                                <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull14}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
                                <figure
          style={{
            maxWidth: "800px",
            margin: "0 auto 50px",
          }}
        >
          <Image
            src={ImgFull15}
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
