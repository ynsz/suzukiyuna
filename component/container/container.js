import css from "./container.module.scss";

export default function Container({ children, large = false }) {
  return <div className={large ? css.large : css.default}>{children}</div>;
}
