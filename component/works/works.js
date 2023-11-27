import css from "./works.module.scss";
import Image from "next/image";
import iiba from "images/iiba.jpg";
import nine from "images/nine.jpg";
import slide from "images/slide.jpg";
import eightgame from "images/eightgame.jpg";
import eight from "images/eight.jpg";
import goodbye from "images/goodbye.jpg";
import m1 from "images/m1.jpg";
import bmsgfes from "images/bmsgfes.jpg";
import koimaji from "images/koimaji.jpg";
import summerfes from "images/summerfes.jpg";
import ikkimi from "images/ikkimi.jpg";
import drama from "images/drama.jpg";
import anime from "images/anime.jpg";
import korean from "images/korean.jpg";
import ikioi from "images/ikioi.jpg";
import jimyoin from "images/jimyoin.jpg";
import mitaka from "images/mitaka.jpg";
import cbd from "images/cbd.jpg";
import morzh from "images/morzh.jpg";
import fammuu from "images/fammuu.jpg";
import tv from "images/tv.jpg";
import tvdrama from "images/tvdrama.jpg";

export default function Works({}) {
  const items = [
    {
      src: "iiba",
      img: iiba,
      title: "iiba",
      category: "UI/UX DESIGN,GRAPHIC DESIGN",
    },
    {
      src: "nine",
      img: nine,
      title: "プリコネフェス2024",
      category: "WEB DESIGN, UI/UX DESIGN",
    },
    {
      src: "slide",
      img: slide,
      title: "Shadowverse EVOLVE カルテットバトル説明スライド",
      category: "SLIDE DESIGN",
    },
    {
      src: "eightgame",
      img: eightgame,
      title: "ファンサアシストライブ！",
      category: "WEB DESIGN, UI/UX DESIGN",
    },
    {
      src: "eight",
      img: eight,
      title: "デレステ8周年特設サイト",
      category: "WEB DESIGN, UI/UX DESIGN",
    },
    {
      src: "goodbye",
      img: goodbye,
      title: "あなたとエンタメにありがとう",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "m1",
      img: m1,
      title: "M-1グランプリ2021",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "ikkimi",
      img: ikkimi,
      title: "イッキ見！",
      category: "UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "drama",
      img: drama,
      title: "季節ドラマ",
      category: "UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "anime",
      img: anime,
      title: "季節アニメ",
      category: "UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "korean",
      img: korean,
      title: "もっと韓ドラ＆アジアドラマ",
      category: "UI/UX DESIGN, WEB DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "bmsgfes",
      img: bmsgfes,
      title: "BMSG FES'22",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "koimaji",
      img: koimaji,
      title: "恋なんて、本気でやってどうするの？",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "summerfes",
      img: summerfes,
      title: "真夏の動画まつり",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "ikioi",
      img: ikioi,
      title: "勢引退春日山襲名披露大相撲",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT, CMS",
    },
    {
      src: "jimyoin",
      img: jimyoin,
      title: "慈妙院動物霊園",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT, ILLUSTRATION",
    },
    {
      src: "mitaka",
      img: mitaka,
      title: "不動産売却",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "cbd",
      img: cbd,
      title: "AndTheory",
      category: "ROGO DESIGN, LABEL DESIGN",
    },
    {
      src: "morzh",
      img: morzh,
      title: "テントサウナMORZH 営業資料",
      category: "SLIDE DESIGN",
    },
    {
      src: "fammuu",
      img: fammuu,
      title: "fammuu",
      category: "WEB DESIGN, UI/UX DESIGN,",
    },
    {
      src: "tv",
      img: tv,
      title: "Yahoo!テレビ",
      category: "UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "tvdrama",
      img: tvdrama,
      title: "Yahoo!テレビ ドラマ特集",
      category: "UI/UX DESIGN, WEB DEVELOPMENT, CMS",
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
