import Divider from '../../Common/Divider'
import SmallTitle from '../../Common/SmallTitle'
import style from './style.module.scss'

export default function Project() {
  return (
    <div className={style.project2}>
      <Divider />
      <SmallTitle>数据中台与企业管理中台</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://data.handy-es.com" target="_blank" rel="noreferrer noopener">data.handy-es.com</a>
        {' | '}
        <a href="https://middle-platform.eesaenergy.com" target="_blank" rel="noreferrer noopener">middle-platform.eesaenergy.com</a>
      </p>
      <p>主导企业级数据中台与管理中台的前端架构设计与开发，构建统一的技术底座，支撑公司多个业务系统的数据统一管理和业务协作。</p>
      <p>1. 采用Vue 3.2 + Composition API重构企业级应用，集成Pinia 2.0.28状态管理、Element Plus 2.2.27组件库、Vue Router 4.1.6路由系统</p>
      <p>2. 建立Vue 3 + Pinia + Vue Router + Element Plus标准体系，实现两个中台项目技术架构统一</p>
      <p>3. 使用阿里云CDN统一管理前端依赖库，实施模块预加载策略，集成ECharts 5.4.0实现复杂数据可视化</p>

      <Divider />
      <SmallTitle>储能云课堂在线教育平台</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://eslearning.handy-es.com" target="_blank" rel="noreferrer noopener">eslearning.handy-es.com</a>
        {' | '}
        <a href="https://eslearning-backend.handy-es.com" target="_blank" rel="noreferrer noopener">eslearning-backend.handy-es.com</a>
      </p>
      <p>面向储能行业的专业化在线教育平台，提供课程学习、视频播放和教学管理功能。</p>
      <p>1. Vue.js模块化前端架构，集成ckplayer多媒体播放器、阿里云视频播放解决方案</p>
      <p>2. 集成多种视频播放方案，支持格式兼容性，二维码生成与社交分享功能</p>
      <p>3. 图片预加载技术优化用户视觉体验，模块化代码按需加载</p>

    </div>
  )
}
