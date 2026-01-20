import Link from 'next/link'
import style from './style.module.scss'

export default function Download() {
  const href = `/Yangsong-Zhu's Resume-Front-end-Engineer-4-years-2022.pdf`
  const international = '/zh/frontend'
  return (
    <div className={style.sideContainer}>
      <div className={style.sideButton}>
        <Link href={international}>
          中文简历
        </Link>
      </div>
      <div className={style.sideButton}>
        <a href={href} target="_blank">
          Download
        </a>
      </div>
    </div>
  )
}
