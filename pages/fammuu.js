import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/fammuu_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Fammuu() {
  return (
    <Container>
      <Meta pageTitle="fammuu" pageDesc="WEB DESIGN, WEB DEVELOPMENT" />

      <Hero title="fammuu" subtitle="WEB DESIGN, WEB DEVELOPMENT" />
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
        <div>
          <p>
            アーティスト向けファンクラブ作成サービスのリリースに伴い、LPを作成。
          </p>
          <p>掲載期間：これから</p>
        </div>
      </PostBody>
    </Container>
  );
}
