import type { Metadata } from 'next'
import index from '@/app/index.module.scss'
import Page from '@/components/Common/Page'
import Download from '@/components/Download/En'
import Experience from '@/components/Experience/En'
import Info from '@/components/Info/En'
import Project from '@/components/Project/Project1/En'
import Project2 from '@/components/Project/Project2/En2'
import Skills from '@/components/Skills/En'
import { getResumeInfo } from '@/utils/resume'

export const metadata: Metadata = {
  title: getResumeInfo().en.title,
  description: 'Resume',
}

export default function en() {
  return (
    <>
      <div className={`${index.typo} ${index.resume}`}>
        <Page className={index.page1}>
          <div className={index.left}>
            <Info />
            <Experience />
          </div>
          <div className={index.right}>
            <Skills />
          </div>
        </Page>
        <Page className={index.page2}>
          <Project />
        </Page>
        <Page className={index.page3}>
          <Project2 />
        </Page>
        <Download />
      </div>
    </>
  )
}
