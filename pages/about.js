import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Contact from "component/contact/contact";
import Image from "next/image";
import bgImg from "images/bg_img.jpg";

export default function About() {
  return (
    <Container>
      <Meta pageTitle="ABOUT" pageDesc="自己紹介" />

      <Hero title="ABOUT" subtitle="自己紹介" />
      <PostBody>
        <figure
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Image
            src={bgImg}
            alt="bgImg"
            layout="responsive"
            sizes="100vw"
            priority
            placeholder="blur"
          />
        </figure>
        <h2>
          <ruby>鈴木 佑菜</ruby>SUZUKI YUNA
        </h2>
        <p>1995年、北海道札幌市生まれ。既婚。2匹の猫を飼っている。</p>
        <p>
          2018年4月にヤフー株式会社に入社後、GYAO!傘下であるレビューサイトのYahoo!映画、番組表サイトのYahoo!テレビ、映像コンテンツ制作のYahoo!映像トピックス（クローズ）の3サービスに配属される。コーディング、映像デザイン、イラスト制作を担当。
          <br />
          2019年ごろから1年かけてYahoo!テレビのフルリニューアルプロジェクトに他業種と協業で取り組む。そのほか、CMS構築を含む特集サイトやバナー制作、SNS運用などを担当する。
          <br />
          2020年以降はGYAO!特集チームのデザイナーとして、ビジュアルデザイン・コーディングなど幅広く担当し、20を超える案件に携わる。
          <br />
          2021年にはM-1グランプリの特集でのUX体験の向上やリスク対策への取り組みが評価され、GYAO!下期表彰式で部門賞を受賞。
          <br />
          また、副業ではフリーランスとしてJamstackなサイト制作を行なっている。
        </p>
        <p>
          今後はよりUXに磨きをかけて、理想的なユーザー体験を追求して行きたいと考えています。
        </p>
      </PostBody>
      <Contact />
    </Container>
  );
}
