import Link from 'next/link'
import style from './style.module.scss'

export default function Download() {
  const href = '/朱杨松简历-前端工程师-4年-2022.pdf'
  const international = '/en/frontend'
  return (
    <div className={style.sideContainer}>
      <div className={style.sideButton}>
        <Link href={international}>
          English
        </Link>
      </div>
      <div className={style.sideButton}>
        <a href={href} target="_blank">
          PDF 下载
        </a>
      </div>
    </div>

  )
}
