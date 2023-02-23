import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/ikioi_full.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Ikioi() {
  return (
    <Container>
      <Meta
        pageTitle="勢引退春日山襲名披露大相撲"
        pageDesc="WEB DESIGN, WEB DEVELOPMENT, CMS"
      />

      <Hero
        title="勢引退春日山襲名披露大相撲"
        subtitle="WEB DESIGN, WEB DEVELOPMENT, CMS"
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
        <div>
          <a href="https://ikioi-intaisumo.com/">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            勢引退春日山襲名披露大相撲
          </a>
          <p>
            デザインからNext.jsでの開発、microCMSでの繋ぎ込みまで一貫して制作。
          </p>
          <p>掲載期間：2023年1月〜現在</p>
        </div>
      </PostBody>
    </Container>
  );
}
