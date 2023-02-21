import css from "./works.module.scss";
import Image from "next/image";
import m1 from "images/m1.jpg";
import bmsgfes from "images/bmsgfes.jpg";
import koimaji from "images/koimaji.jpg";
import summerfes from "images/summerfes.jpg";
import ikkimi from "images/ikkimi.jpg";
import drama from "images/drama.jpg";
import anime from "images/anime.jpg";
import korean from "images/korean.jpg";
import r15 from "images/r15.jpg";

export default function Works({}) {
  const items = [
    {
      src: "m1",
      img: m1,
      title: "M-1グランプリ2021",
      category: "WEB DESIGN, UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "bmsgfes",
      img: bmsgfes,
      title: "BMSG FES'22",
      category: "WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "koimaji",
      img: koimaji,
      title: "恋なんて、本気でやってどうするの？",
      category: "WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "summerfes",
      img: summerfes,
      title: "真夏の動画まつり",
      category: "WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "ikkimi",
      img: ikkimi,
      title: "イッキ見！",
      category: "UI DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "drama",
      img: drama,
      title: "春ドラマ2022",
      category: "UI DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "anime",
      img: anime,
      title: "春アニメ2022",
      category: "UI DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "korean",
      img: korean,
      title: "もっと韓ドラ＆アジアドラマ",
      category: "UI DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "r15",
      img: r15,
      title: "官能・過激作品",
      category: "UI DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
  ];
  return (
    <ul className={css.list}>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.src}>
            <figure>
              <Image
                src={item.img}
                alt={item.title}
                layout="responsive"
                width="200px"
                priority
              />
            </figure>
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
