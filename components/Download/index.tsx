import style from "./style.module.scss";

export default function Download() {
  const href = "/朱杨松简历-前端工程师-4年-2022.pdf";
  return (
    <div className={style.download}>
      <a href={href} target="_blank">
        PDF 下载
      </a>
    </div>
  );
}
