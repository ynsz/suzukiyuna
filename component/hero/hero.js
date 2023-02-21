import css from "./hero.module.scss";
import Image from "next/image";
import tama from "images/tama.png";

export default function Hero({
  title,
  subtitle,
  imageOn = false,
  large = false,
}) {
  return (
    <div className={large ? css.large : css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>{title}</h1>
        <p className={css.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={css.img}>
          <Image
            src={tama}
            alt="tama"
            layout="responsive"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
