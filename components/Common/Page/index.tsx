import style from "./style.module.scss";

export default function Page(
  props: React.PropsWithChildren<{ className: string }>
) {
  const { className, children } = props;
  return <div className={`${style.page} ${className}`}>{children}</div>;
}
