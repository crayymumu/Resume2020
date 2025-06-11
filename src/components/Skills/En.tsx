import type { FC } from 'react'
import { ETitleType } from '@/types'
import Divider from '../Common/Divider'
import Title from '../Common/Title'
import style from './style.module.scss'

const SkillTitle: FC = ({ children }) => {
  return <span className={style.skillTitle}>{children}</span>
}

export default function Skills() {
  return (
    <>
      <Title type={ETitleType.Theme}>Skills</Title>
      <Divider />
      <ul className={style.skills}>
        <li>
          <SkillTitle>HTML / CSS</SkillTitle>
          <p>1. Capable of writing semantic HTML, modulized CSS.</p>
          <p>
            2. Capable of constructing complex layout using Flexbox and complex
            animation using CSS3.
          </p>
          <p>3. Capable of effectively writing CSS using LESS.</p>
          <p>
            4. Understanding DOM loading and rendering mechanism in modern
            browsers like Google Chrome.
          </p>
        </li>
        <li>
          <SkillTitle>TypeScript / JavaScript</SkillTitle>
          <p>1. Familiar with TypeScript and its tool in CI/CD process.</p>
          <p>2. Understanding advanced type in TypeScript.</p>
          {/* <p>3. Understanding fundamental concept of JavaScript.</p> */}
          {/* <p>4. Skilled in ESNext.</p> */}
        </li>
        <li>
          <SkillTitle> Vue.js / Vuex / Vue Router </SkillTitle>
          <p>
            1. Familiar with building single-page web applications with Vue.js, Vue Router, Vuex.
          </p>
          <p>
            2. Proficient in using View Ui / Element UI to quickly build system applications,
            understand its source code and further encapsulate or transform it.
          </p>
        </li>
        <li>
          <SkillTitle>Webpack / Vue CLI / Lerna</SkillTitle>
          <p>
            1. Capable of packing project using Webpack and understanding its
            principle.
          </p>
          <p>2. Capable of optimizing Webpack packing performance.</p>
          <p>3. Understanding the process and mechanism of Vue CLI.</p>
          <p>
            3. Understanding Lerna, a tool managing multi-package repositories
            with git and npm.
          </p>
        </li>
        <li>
          <SkillTitle>Engineering</SkillTitle>
          <p>
            1. Experienced in all the stages of Software Development Life Cycle
            including Requirements, Analysis and Design, Implementation,
            Integration and Testing, Deployment, and Maintenance.
          </p>
          <p>
            2. Familiar with version control tools such as Git, integration
            tools like Jenkins, bug tracking tools like JIRA.
          </p>
          {/* <p>3. Skilled in using Jest and all sorts of testing technics.</p> */}
        </li>
      </ul>
    </>
  )
}
