import Title, { ETitleType } from "../Common/Title";
import Divider from "../Common/Divider";

import style from "./style.module.scss";

function SkillTitle(props: React.PropsWithChildren<{}>) {
  return <span className={style.skillTitle}>{props.children}</span>;
}

export default function Skills() {
  return (
    <>
      <Title type={ETitleType.Theme}>技能清单</Title>
      <Divider />
      <ul className={style.skills}>
        <li>
          <SkillTitle> HTML / CSS</SkillTitle>
          <p>1. 熟练使用语义化 HTML 结构，确保代码可读性和可维护性，符合 W3C 标准</p>
          <p>
            2.  熟练使用 Flexbox 和 Grid 布局，能够实现复杂的多列布局和响应式设计，确保页面在不同设备上的良好表现
          </p>
          <p>
            3. 熟练使用预处理器 Less、Sass/Scss、Stylus 等预处理器，能够实现 CSS 的模块化、变量定义和使用，提高代码可维护性
          </p>
          <p>
            4. 深入理解浏览器渲染机制，熟悉 DOM 树构建、样式计算和布局流程
          </p>
          <p>
            5. 具备跨浏览器兼容性开发经验，能够在常用浏览器和不同设备中实现一致的视觉效果
          </p>
        </li>
        <li>
          <SkillTitle>TypeScript / JavaScript</SkillTitle>
          <p>
            1. 熟悉 TypeScript，熟练掌握如何在项目中集成其工具链，了解其高级类型
          </p>
          <p>
            2. 熟悉 JavaScript 核心基础；掌握 ES6 常用语法
          </p>
        </li>
        <li>
          <SkillTitle> Vue.js / Nuxt / Next / 小程序</SkillTitle>
          <p>1. 熟练掌握 Vue2、Vue3 框架，能够高效构建单页 Web 应用</p>
          <p>2. 熟练掌握 Nuxt 和 Next 框架，用于搭建服务端渲染的 Web 应用，显著提升 SEO 表现和页面加载速度</p>
          <p>3. 熟悉微信原生框架和 uniapp 开发，能够快速搭建并优化微信小程序</p>
        </li>
        <li>
          <SkillTitle> Webpack / Vite </SkillTitle>
          <p>1. 熟练使用 Webpack 和 Vite 进行项目构建和优化，能够根据项目需求定制复杂的打包配置。</p>
          <p>2. 熟悉 npm 和 pnpm 进行依赖管理，优化项目的依赖树，减少安装时间和体积。</p>
        </li>
        <li>
          <SkillTitle> 前端工程化</SkillTitle>
          <p>
            1. 有过大型单页 Web 应用实战经验，处理过大规模的数据变更场景下的优化，了解前端性能优化与调试技巧
          </p>
          <p>
            2. 具备 Jenkins 和 Gitlab Runner 的实践经验，能够搭建和维护 CI/CD 流水线，实现自动化测试和部署，提升开发效率。
          </p>
          <p>
            3. 通过使用 Lighthouse 进行性能分析，优化前端性能，提升用户体验
          </p>
          <p>
            4. 在团队中推广使用自动化工具（如 Husky、Lint-Staged）进行代码提交前的检查，减少了代码提交冲突。
          </p>
        </li>
      </ul>
    </>
  );
}
