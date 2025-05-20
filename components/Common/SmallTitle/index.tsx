import style from "./style.module.scss";

export default function SmallTitle(
  props: React.PropsWithChildren<{}>
) {
  const { children } = props;
  return (
    <h5 className={style.smallTitle}>
      {children}
    </h5>
  );
}
