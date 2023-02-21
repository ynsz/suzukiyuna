import css from "./postBody.module.scss";

export default function PostBody({ children }) {
  return <div className={css.stack}>{children}</div>;
}
