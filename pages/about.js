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
          <h4>デザインとエンジニアリングの橋渡し役として、ユーザー体験の質を高める</h4>
          <p>
          大規模サービスとスタートアップ両方の現場で、UI設計・実装連携・運用設計まで一貫して対応。FigmaとGitHubを軸に、チームの再現性・拡張性・保守性を高める設計とプロセス整備に強みがあります。
          <br />
          HTML/CSS/JavaScriptを基礎に、React/Next.jsなどの開発経験もあり、デザインとエンジニアリングの橋渡し役として、開発チームのスピードと品質の両立に貢献してきました。
          <br />
          「設計から運用までをつなぐ」視点で、サービスの体験と開発体制の持続可能性を支えることが、私のミッションです。
          </p>
        </section>
        <section>
          <h3>経歴・実績（抜粋）</h3>
          <p>1995年、北海道札幌市生まれ。既婚。2匹の猫を飼っている。1児の母。</p>
          <h4>◆ ヤフー株式会社（2018〜2023）</h4>
          <p>
          Webデザイナー／UI/UXデザイナーとして「GYAO!」「Yahoo!映画」「LINE GAME」など月間数千万PV規模のサービスを担当。
          <br />
          HTML/CSS/JavaScriptによる実装、Movable TypeやContentfulによるCMS運用までを一貫して実施。
          <br />
            「GYAO!」では特集ページを月1〜2本ペースで制作し、年間10本以上の安定運用を担当。
          <br />
          「Yahoo!テレビ」ではリニューアルPJのデザインチームリーダーとしてFigma設計、命名・CSS設計、UIガイドライン整備を主導し、工数40%削減に貢献した。
          <br />
          </p>
          <h4>◆ Cygames（2023）</h4>
          <p>
            「デレステ」「プリンセスコネクト！Re:Dive」などIPコンテンツの公式サイト・キャンペーンLP制作を担当した。
            <br />
           実装分業体制の中でも、構造・命名・動きのしやすさを考慮した“実装しやすいデザイン”を意識。Twitterトレンド1位となる大型施策にも参画。
          <br />
          </p>
          <h4>◆ 株式会社iiba（2023〜）</h4>
          <p>
          子育て世帯向け地図アプリ「iiba」立ち上げに1人目デザイナーとして参画。
          <br />
          たった3ヶ月でβ版をリリースし、初月1,000ユーザーを獲得した。
          <br />
            評価機能の体験設計からUI実装に向けた仕様整理、Figmaでのデザインシステム構築までを一貫してリード。
            <br />
            週次アジャイルに対応したUI設計・運用フローを整備し、チームの開発速度とUXの質を両立させた。
          <br />
          デザインと実装の齟齬をなくすため、トークン設計・バリアント設計・命名ルールの整備も担当。
            <br />
            </p>
          <h4>◆ POPOPO株式会社（2024〜）</h4>
          <p>
          Flutter製アバターアプリのUI/UXデザイン・デザインシステム整備を担当。
          <br />
          FigmaからGitHub PRを自動生成する連携フローを導入し、開発・デザインの同期性を向上させた。
          </p>
        </section>
        <section>
          <h3>スキルセット</h3>
          <h4>UI/UX設計</h4><p>構造設計、画面設計、Figmaコンポーネント設計、ユーザー行動分析、リサーチ設計</p>
          <h4>フロントエンド</h4><p>HTML/CSS、JavaScript、React、Next.js</p>
          <h4>開発環境</h4><p>Git/GitHub、Vercel、microCMS、Jira、Notion</p>
          <h4>CMS運用</h4><p>Movable Type、Contentful</p>
        </section>
        <section>
          <h3>これから</h3>
          <p>
          これまでに培ってきたUI/UX設計やフロントエンドの知見を活かし、「使いやすく、つくりやすい」プロダクトを支える存在を目指しています。
          <br />
          今後は、設計から実装、運用までを見据えた技術と視点をさらに深めながら、チームの生産性やプロダクトの体験価値向上に貢献したいと考えています。
          フロントエンド領域では、React/Next.jsなどを軸に、保守性・再利用性を意識した実装スキルを磨いており、今後もモダンな開発環境へのキャッチアップを継続していきます。
          <br />
          また、Figmaと開発の間をつなぐ経験を活かし、デザインとエンジニアリングの橋渡しとしても柔軟に動ける人材でありたいと考えています。
          </p>
        </section>
      </PostBody>
      <Contact />
    </Container>
  );
}
