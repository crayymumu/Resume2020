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
      <p>主导企业级数据中台与管理中台的前端架构设计与开发，构建统一技术底座，支撑多业务系统数据管理与协作。</p>
      <p>1. 抽象统一技术底座（组件库二次封装、请求层、权限指令、布局模板），两个中台复用率达80%+，新业务模块搭建效率提升50%</p>
      <p>2. 阿里云CDN externals托管核心依赖（Vue/Element Plus/ECharts），配合Vite分包策略与路由级预加载（prefetch），首屏加载体积减少70%，ECharts按需引入减少图表模块体积60%</p>

    </div>
  )
}
