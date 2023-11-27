import Meta from "component/meta/meta";
import Container from "component/container/container";
import Hero from "component/hero/hero";
import PostBody from "component/postBody/postBody";
import Image from "next/image";
import ImgFull from "images/goodbye_full.jpg";
import comment1 from "images/comment_1.png";
import comment2 from "images/comment_2.png";
import result1 from "images/goodbye_1.png";
import result2 from "images/goodbye_2.png";
import result3 from "images/goodbye_3.png";
import result4 from "images/goodbye_4.png";
import graph from "images/goodbye_graph.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Goodbye() {
  return (
    <Container>
      <Meta
        pageTitle="あなたとエンタメにありがとう"
        pageDesc="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT"
      />

      <Hero
        title="あなたとエンタメにありがとう"
        subtitle="WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT"
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
              GYAO!ユーザーに今までの感謝の気持ちを伝える特別な特集。
              <br />
              <br />
              掲載期間：2023年2月27日〜3月31日
              <br />
              制作期間：1ヶ月
              <br />
              担当領域：Webデザイン、UI/UXデザイン、コーディング
              <br />
              使用ツール・技術：Photoshop/Illustrator/HTML/CSS/JavaScript/jQuery
            </p>
            <h4>課題</h4>
            <p>
              GYAO!がクローズすることを伝えたい。認知された上で、残り少ない時間でも作品をたくさん視聴してもらいたい。
            </p>
            <h4>仮説</h4>
            <p>
              感謝を伝えたり、今までのGYAO!を振り返ることができると、これが最後ということが伝わるのではないか。
            </p>
            <h4>根拠</h4>
            <p>
              クローズ発表時のニュースや当日のSNSから、GYAO!や作品との思い出を振り返るコメントが多く見られた。
            </p>
            <h4>施策</h4>
            <p>
              スタッフやユーザーからの思い出コメントをピックアップして載せた。
            </p>
            <ul>
              <li>
                <figure
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={comment1}
                    alt="comment1"
                    layout="responsive"
                    sizes="100vw"
                    priority
                    placeholder="blur"
                  />
                </figure>
              </li>
              <li>
                <figure
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={comment2}
                    alt="comment2"
                    layout="responsive"
                    sizes="100vw"
                    priority
                    placeholder="blur"
                  />
                </figure>
              </li>
            </ul>
            <h4>結果</h4>
            <p>
              リリース直後の訪問がUB 61,990増。
              <br />
              ユーザーに最後ということが認知され、訪問数が増加して作品視聴に繋げることができた。
            </p>
            <figure
              style={{
                maxWidth: "800px",
                margin: "20px auto",
              }}
            >
              <Image
                src={graph}
                alt="graph"
                layout="responsive"
                sizes="100vw"
                priority
                placeholder="blur"
              />
            </figure>
            <ul>
              <li>
                <figure
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={result1}
                    alt="result1"
                    layout="responsive"
                    sizes="100vw"
                    priority
                    placeholder="blur"
                  />
                </figure>
              </li>
              <li>
                <figure
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={result2}
                    alt="result2"
                    layout="responsive"
                    sizes="100vw"
                    priority
                    placeholder="blur"
                  />
                </figure>
              </li>
              <li>
                <figure
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={result3}
                    alt="result3"
                    layout="responsive"
                    sizes="100vw"
                    priority
                    placeholder="blur"
                  />
                </figure>
              </li>
              <li>
                <figure
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={result4}
                    alt="result4"
                    layout="responsive"
                    sizes="100vw"
                    priority
                    placeholder="blur"
                  />
                </figure>
              </li>
            </ul>
          </section>
        </div>
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
