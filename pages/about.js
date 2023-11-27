import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Contact from "component/contact/contact";
import Image from "next/image";
import bgImg from "images/bg_img.jpg";
import css from "styled-jsx/css";

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
        <section>
          <h3>強み</h3>
          <h4>デザインとエンジニアリングの両面でサービスを成長させる</h4>
          <p>
            学生時代は紙媒体のデザイン、ヤフーではWeb、UI/UX、映像デザインを行っているためデザインに関する知見が深く、私の最も強い武器です。
            <br />
            加えて、HTML/CSSコーディングやJavaScript、Reactなどのライブラリ、フレームワークも扱っており、フロントエンドに関する知識を有しているため、エンジニアとデザイナーの間に入って両者の関係をつなぐ役割を担うことができます。
            <br />
            今後はよりUXに磨きをかけて、デザイン・技術の両面から理想的なユーザー体験を追求して行きたいと考えています。
          </p>
        </section>
        <section>
          <h3>経歴</h3>
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
            2023年6月にヤフーを退職、現在はフリーランスとして業務委託でデザインをおこなっている。
          </p>
        </section>
      </PostBody>
      <Contact />
    </Container>
  );
}
