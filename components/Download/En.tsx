import style from './style.module.scss'

export default function Download() {
  const href = `/Yangsong-Zhu's Resume-Front-end-Engineer-4-years-2022.pdf`
  return (
    <div className={style.download}>
      <a href={href} target="_blank">
        Download
      </a>
    </div>
  )
}
