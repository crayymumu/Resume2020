import { ETitleType } from '@/types'
import Divider from '../../Common/Divider'
import SmallTitle from '../../Common/SmallTitle'
import Title from '../../Common/Title'
import style from './style.module.scss'

export default function Project() {
  return (
    <div className={style.project1}>
      <Title type={ETitleType.Theme}>项目经历</Title>
      <Divider />

      <SmallTitle>公司官网集群</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://www.eesaenergy.com" target="_blank" rel="noreferrer noopener">www.eesaenergy.com</a>
        {' | '}
        <a href="https://www.eesaexpo.com" target="_blank" rel="noreferrer noopener">www.eesaexpo.com</a>
      </p>
      <p>储能行业头部展会官网集群，承载展位预定、观众登记、展商管理等核心业务，日均PV 5000+。</p>
      <p>1. 基于Next.js SSR/SSG混合渲染架构，结合CDN边缘缓存与资源预加载策略，Lighthouse Performance评分从58提升至95+，LCP控制在1.2s内</p>
      <p>2. 自研i18n路由中间件，基于Next.js Middleware实现请求级语言检测与路径重写，配合getStaticPaths生成多语言静态页面，避免运行时切换造成的CLS抖动</p>
      <p>3. 封装视频背景Banner组件，采用Intersection Observer实现懒加载+WebP/AVIF降级方案+骨架屏占位，消除CLS（降至0）；提取倒计时Hook与浮窗组件，通过dynamic import拆分非首屏JS，减少主包体积约40%</p>

      <Divider />

      <SmallTitle>掌上储能生态平台</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://database.handy-es.com" target="_blank" rel="noreferrer noopener">database.handy-es.com</a>
        {' | '}
        <a href="https://www.handy-es.com/platform" target="_blank" rel="noreferrer noopener">handy-es.com/platform</a>
        {' | '}
        <span className={style.qrcodeLink}>
          微信小程序（掌上储能）
          <img src="/qrcode-handyes.png" alt="小程序二维码" className={style.qrcode} />
        </span>
      </p>
      <p>面向储能产业链的专业服务平台，涵盖数据库查询、企业服务和报告管理系统，支撑储能行业的信息化转型。</p>
      <p>1. Vue.js模块化架构，基于路由级Code Splitting与Webpack魔法注释实现按需加载，首屏JS体积减少55%，TTI从4.8s降至2.1s</p>
      <p>2. CSS变量驱动主题系统 + 容器查询实现响应式布局，通过PurgeCSS移除未使用样式，CSS体积减少60%，Lighthouse Accessibility评分达95+</p>
      <p>3. Axios拦截器统一请求状态管理，配合骨架屏与渐进式图片加载（LQIP）策略优化感知性能，TBT降低70%</p>

      <Divider />

      <SmallTitle>产业链可视化地图</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://industrial-map.handy-es.com" target="_blank" rel="noreferrer noopener">industrial-map.handy-es.com</a>
      </p>
      <p>储能产业链地理信息可视化平台，展示全国2000+企业分布，支持多维度数据钻取。</p>
      <p>1. Next.js 14 App Router + RSC流式渲染，通过Suspense边界实现选择性水合，INP控制在150ms内，TTFB降低60%</p>
      <p>2. 高德地图JS API二次封装，基于Web Worker执行点聚合算法（避免主线程阻塞），实现海量Marker的分层渲染与视口裁剪，地图交互帧率稳定60fps</p>
      <p>3. 虚拟滚动+CSS content-visibility: auto优化万级列表，配合React.memo与useDeferredValue降低重渲染开销</p>
    </div>
  )
}
