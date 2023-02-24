import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/summerfes_full.jpg";

export default function Summerfes() {
  return (
    <Container>
      <Meta
        pageTitle="真夏の動画まつり"
        pageDesc="WEB DESIGN, WEB DEVELOPMENT"
      />

      <Hero title="真夏の動画まつり" subtitle="WEB DESIGN, WEB DEVELOPMENT" />
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
            夏休みにもっとGYAO!の動画を楽しんでもらうための特集。
            <br />
            見たい動画が決まらない人へのルーレットやPayPayポイントが当たるキャンペーンなどで盛り上げている。
            <br />
            ズバトクキャンペーンページの画像とバナーも制作。
            <br />
            デザインは、青い空から海にダイブして海に潜って深海まで行き、砂浜に打ち上がるまで一連になっていて、楽しい動画をどんどん追求していくことをイメージしている。
          </p>
          <p>掲載期間：2022年7月〜8月頃</p>
        </div>
      </PostBody>
    </Container>
  );
}
