import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/uoyanagi_Desktop_TOP.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Ikioi() {
  return (
    <Container>
      <Meta
        pageTitle="魚柳"
        pageDesc="WEB DESIGN, UI/UX DESIGN"
      />

      <Hero
        title="魚柳"
        subtitle="WEB DESIGN, UI/UX DESIGN"
      />
      <PostBody>
        <section
          style={{
            margin: "0 auto 40px",
          }}
        >
          <div>
            <a href="https://itsuki-nagoya.com/">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              魚柳
            </a>
          </div>
          <h3>作品説明</h3>
          <p>
            名古屋の居酒屋、魚柳のオンラインショップページ。
            <br />
            デザインを制作。
            <br />
            <br />
            掲載期間：2024年7月〜現在
            <br />
            制作期間：1ヶ月
            <br />
            担当領域：Webデザイン、UI/UXデザイン
            <br />
            使用ツール・技術：Figma/Photoshop/Illustrator
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
