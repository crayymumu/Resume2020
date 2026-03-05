import Link from 'next/link'
import style from './style.module.scss'
import { getResumeInfo } from '@/utils/resume'

export default function Download() {
  const href = getResumeInfo().zh.pdfUrl
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
