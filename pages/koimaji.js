import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/koimaji_full.jpg";

export default function Koimaji() {
  return (
    <Container>
      <Meta
        pageTitle="恋なんて、本気でやってどうするの？"
        pageDesc="WEB DESIGN, WEB DEVELOPMENT"
      />
      <Hero
        title="恋なんて、本気でやってどうするの？"
        subtitle="WEB DESIGN, WEB DEVELOPMENT"
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
          <p>
            GYAO!独占チェインストーリーと最新話を配信するため、告知ページを制作。
            <br />
            大人の女性向けのドラマなので、上品な可愛らしさを演出した。
          </p>
          <p>掲載期間：2022年4月〜7月頃</p>
        </div>
      </PostBody>
    </Container>
  );
}
