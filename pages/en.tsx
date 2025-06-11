import Head from 'next/head'
import Page from '../components/Common/Page'
import Download from '../components/Download/En'
import Education from '../components/Education/En'
import Experience from '../components/Experience/En'
import Info from '../components/Info/En'
import Project from '../components/Project/En'
import Skills from '../components/Skills/En'
import index from './index.module.scss'

import Zh from './zh'

export default function Resume() {
  return (
    <>
      <div className={`${index.typo} ${index.resume}`}>
        <Head>
          <title>Yangsong-Zhu's Resume-Front-end-Engineer-4-years-2022</title>
        </Head>
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
      <div>
        <Zh />
      </div>
    </>
  )
}
