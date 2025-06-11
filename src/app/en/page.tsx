import type { Metadata } from 'next'
import Page from '@/components/Common/Page'
import Download from '@/components/Download/En'
import Education from '@/components/Education/En'
import Experience from '@/components/Experience/En'
import Info from '@/components/Info/En'
import Project from '@/components/Project/En'
import Skills from '@/components/Skills/En'
import index from '../index.module.scss'

export const metadata: Metadata = {
  title: 'Yangsong-Zhu\'s Resume-Front-end-Engineer-4-years-2022',
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
            <Education />
          </div>
        </Page>
        <Page className={index.page2}>
          <Project />
        </Page>
        <Download />
      </div>
    </>
  )
}
