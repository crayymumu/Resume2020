import Page from '../components/Common/Page'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Info from '../components/Info'
import Project1 from '../components/Project/Project1'
import Project2 from '../components/Project/Project2'
import Skills from '../components/Skills'

import index from './index.module.scss'

export default function Resume() {
  return (
    <div className={`${index.typo} ${index.resume}`}>
      <Page className={index.page1}>
        <div className={index.left}>
          <Info />
          <Experience />
          <Education />
        </div>
        <div className={index.right}>
          <Skills />
        </div>
      </Page>
      <Page className={index.page2}>
        <Project1 />
        <Project2 />
      </Page>
    </div>
  )
}
