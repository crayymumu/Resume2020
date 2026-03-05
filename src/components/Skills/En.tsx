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
          <p>1. Proficient in semantic HTML with W3C compliance, ensuring code readability and maintainability</p>
          <p>
            2. Expert in Flexbox and Grid layouts for complex multi-column responsive designs across devices
          </p>
          <p>
            3. Skilled in CSS preprocessors (Less, Sass/Scss, Stylus) for modular, maintainable styling
          </p>
          <p>
            4. Deep understanding of browser rendering: DOM construction, style computation, and layout flows
          </p>
          <p>
            5. Extensive cross-browser compatibility experience with consistent visual rendering
          </p>
        </li>
        <li>
          <SkillTitle>TypeScript / JavaScript</SkillTitle>
          <p>
            1. Proficient in TypeScript with advanced types, integrating toolchains into CI/CD pipelines
          </p>
          <p>
            2. Solid JavaScript fundamentals with expertise in ES6+ syntax
          </p>
        </li>
        <li>
          <SkillTitle>Vue.js / Nuxt / Next / Mini Programs</SkillTitle>
          <p>1. Expert in Vue 2/3 for building efficient single-page applications</p>
          <p>2. Proficient in Nuxt and Next.js for SSR, improving SEO and load performance</p>
          <p>3. Experienced in WeChat native framework and uni-app for optimized mini-program development</p>
        </li>
        <li>
          <SkillTitle>Webpack / Vite</SkillTitle>
          <p>1. Skilled in Webpack and Vite for project building and optimization with custom configurations</p>
          <p>2. Proficient in npm and pnpm for dependency management, optimizing installation time and size</p>
        </li>
        <li>
          <SkillTitle>Frontend Engineering</SkillTitle>
          <p>
            1. Hands-on experience with large-scale SPA, handling performance optimization in high-volume data scenarios
          </p>
          <p>
            2. Practical experience with Jenkins and GitLab Runner, building CI/CD pipelines from scratch
          </p>
          <p>
            3. Performance analysis using Lighthouse, optimizing metrics for enhanced user experience
          </p>
          <p>
            4. Promoted automation tools (Husky, lint-staged) for pre-commit validation, reducing merge conflicts
          </p>
        </li>
      </ul>
    </>
  )
}
