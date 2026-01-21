'use client'
import { useState } from 'react'
import { ETitleType } from '@/types'
import Divider from '../../Common/Divider'
import SmallTitle from '../../Common/SmallTitle'
import Title from '../../Common/Title'
import style from './style.module.scss'

export default function Project() {
  const [copied, setCopied] = useState(false)
  return (
    <div className={style.project1}>
      <Title type={ETitleType.Theme}>项目经历</Title>
      <Divider />

      <SmallTitle>EESA储能领跑者联盟官网</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://www.eesaenergy.com" target="_blank" rel="noreferrer noopener">www.eesaenergy.com</a>
        {' | '}
        <a href="https://www.eesaexpo.com" target="_blank" rel="noreferrer noopener">www.eesaexpo.com</a>
      </p>
      <p>储能行业头部展会官网集群，承载展位预定、观众登记、展商管理等核心业务，日均PV 5000+。</p>
      <p>1. 基于Next.js Pages Router构建SSR/SSG混合渲染架构，配合CDN缓存策略实现秒级首屏</p>
      <p>2. 自研i18n路由中间件，支持/zh、/en路径切换</p>
      <p>3. 封装视频背景Banner组件（懒加载+降级图片）、实时倒计时Hook、社交媒体浮窗组件</p>

      <Divider />

      <SmallTitle>掌上储能生态平台</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://database.handy-es.com" target="_blank" rel="noreferrer noopener">database.handy-es.com</a>
        {' | '}
        <a href="https://www.handy-es.com/platform" target="_blank" rel="noreferrer noopener">handy-es.com/platform</a>
        {' | '}
        <span
          style={{ color: copied ? '#52c41a' : '#0066cc', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => {
            navigator.clipboard.writeText('https://wxaurl.cn/734K86eyZBj')
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
        >
          {copied ? '已复制 ✓' : '微信小程序跳转短链（web页面点击复制）'}
        </span>
      </p>
      <p>面向储能产业链的专业服务平台，涵盖数据库查询、企业服务和报告管理系统，支撑储能行业的信息化转型。</p>
      <p>1. Vue.js模块化架构，支持复杂查询与展示，掌上储能生态Web端与触媒平台统一构建</p>
      <p>2. 模块化代码管理与按需加载，主题切换与移动端适配</p>
      <p>3. 全局加载状态统一管理，构建流程标准化，资源加载效率优化</p>

      <Divider />

      <SmallTitle>产业链可视化地图</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://industrial-map.handy-es.com" target="_blank" rel="noreferrer noopener">industrial-map.handy-es.com</a>
      </p>
      <p>储能产业链地理信息可视化平台，展示全国2000+企业分布，支持多维度数据钻取。</p>
      <p>1. Next.js 14 App Router + React Server Components，实现流式SSR与选择性水合</p>
      <p>2. 高德地图JS API封装，实现点聚合算法、InfoWindow动态渲染、自定义Marker图层</p>
      <p>3. 虚拟列表优化万级数据渲染，CSS Containment隔离重绘区域提升滚动性能</p>
    </div>
  )
}
