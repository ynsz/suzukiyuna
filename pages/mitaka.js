import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/mitaka_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Mitaka() {
  return (
    <Container>
      <Meta pageTitle="不動産売却" pageDesc="WEB DESIGN" />

      <Hero title="不動産売却" subtitle="WEB DESIGN" />
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
          <a href="https://gifunavi.jp/sell/">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            不動産売却
          </a>
          <p>
            不動産売却という複雑な仕組みをイラストや図を用いてわかりやすく説明。
          </p>
          <p>掲載期間：2020年頃〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
