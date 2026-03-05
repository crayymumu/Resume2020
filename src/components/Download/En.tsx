import Link from 'next/link'
import style from './style.module.scss'
import { getResumeInfo } from '@/utils/resume'

export default function Download() {
  const href = getResumeInfo().en.pdfUrl
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
