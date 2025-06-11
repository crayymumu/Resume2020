import Divider from '../../Common/Divider'
import SmallTitle from '../../Common/SmallTitle'

import style from './style.module.scss'

export default function Project() {
  return (
    <div className={style.project2}>
      <Divider />
      <SmallTitle>自定义报表应用平台</SmallTitle>
      <p>
        1. 自定义 SQL 语句，实现 SQL 自动渲染为表格 UI 组件，将数据可视化等复杂的功能进行封装，方便用户根据自身需求进行调整。
      </p>
      <p>
        2. 支持自定义可视化，实现一套报表渲染生命周期规则，将用户自定义的报表渲染逻辑通过图表化的形式动态加载至平台。
      </p>
      <p>
        3. 支持自定义组件，实现加载满足 Vue.js 规范的外部 .vue 文件至平台，实现页面部分自定义。
      </p>
      <Divider />
      <SmallTitle>应用平台基础库封装</SmallTitle>
      <p>
        1.
        <a
          href="https://www.npmjs.com/package/@qn-pandora/pandora-component"
          target="_blank"
          rel="noreferrer noopener"
        >
          amax-iview
        </a>
        : 基于 view-ui 组件，封装平台功能中通用业务组件。
      </p>
    </div>
  )
}
