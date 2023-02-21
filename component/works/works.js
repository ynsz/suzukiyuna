import css from "./works.module.scss";
import Image from "next/image";
import tama from "images/ogp.jpg";

export default function Works({}) {
  const items = [
    {
      src: "m1",
      img: tama,
      title: "火葬場",
      category:
        "落ち着いたたたずまいの施設で、お葬式とご出棺・お別れを、一組様ごとに行って頂くことができます。",
    },
    {
      src: tama,
      title: "火葬場",
      category:
        "落ち着いたたたずまいの施設で、お葬式とご出棺・お別れを、一組様ごとに行って頂くことができます。",
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
            <h2>{item.title}</h2>
            <p>{item.category}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
