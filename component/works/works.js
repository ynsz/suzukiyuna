import css from "./works.module.scss";
import Image from "next/image";
import iiba from "images/iiba.jpg";
import kyoto from "images/kyoto.png";
import uoyanagi from "images/uoyanagi.jpg";
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
      src: "kyoto",
      img: kyoto,
      title: "子育てマップまち歩きイベント",
      category: "GRAPHIC DESIGN",
    },
    {
      src: "nine",
      img: nine,
      title: "プリコネフェス2024",
      category: "WEB DESIGN, UI/UX DESIGN",
    },
    {
      src: "eightgame",
      img: eightgame,
      title: "ファンサアシストライブ！",
      category: "WEB DESIGN, UI/UX DESIGN",
    },
        {
      src: "tv",
      img: tv,
      title: "Yahoo!テレビ",
      category: "UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "goodbye",
      img: goodbye,
      title: "GYAO!クローズ特集",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "m1",
      img: m1,
      title: "M-1グランプリ2021",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT",
    },
    {
      src: "uoyanagi",
      img: uoyanagi,
      title: "魚柳",
      category: "WEB DESIGN, UI/UX DESIGN",
    },
    {
      src: "ikioi",
      img: ikioi,
      title: "勢引退春日山襲名披露大相撲",
      category: "WEB DESIGN, UI/UX DESIGN, WEB DEVELOPMENT, CMS",
    },
    {
      src: "cbd",
      img: cbd,
      title: "AndTheory",
      category: "ROGO DESIGN, LABEL DESIGN",
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
