import { ETitleType } from '@/types'
import Divider from '../../Common/Divider'
import SmallTitle from '../../Common/SmallTitle'
import Title from '../../Common/Title'
import style from './style.module.scss'

export default function Project() {
  return (
    <div className={style.project3}>
      <Title type={ETitleType.Theme}>项目经历（续）</Title>


      <Divider />
      <SmallTitle>储能云课堂在线教育平台</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://eslearning.handy-es.com" target="_blank" rel="noreferrer noopener">eslearning.handy-es.com</a>
        {' | '}
        <a href="https://eslearning-backend.handy-es.com" target="_blank" rel="noreferrer noopener">eslearning-backend.handy-es.com</a>
      </p>
      <p>面向储能行业的专业化在线教育平台，提供课程学习、视频播放和教学管理功能。</p>
      <p>1. 基于HLS.js实现自适应码率视频播放，配合阿里云VOD转码服务，针对弱网环境实现分片预缓存与无缝降级，视频首帧加载时间控制在800ms内</p>
      <p>2. 视频播放器组件化封装，支持播放进度持久化、防盗链Token鉴权、倍速/画中画模式，通过requestIdleCallback延迟初始化非关键模块，INP优化至120ms</p>
      <p>3. 课程列表采用渐进式图片加载（BlurHash占位）消除布局偏移CLS≈0，路由级Code Splitting将首屏JS从1.2MB降至380KB，Lighthouse Performance 90+</p>
      <Divider />
      <SmallTitle>展会管理系统系列</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://service.eesaexpo.com" target="_blank" rel="noreferrer noopener">service.eesaexpo.com</a>
        {' | '}
        <a href="https://exhibitor-backend.eesaexpo.com" target="_blank" rel="noreferrer noopener">exhibitor-backend.eesaexpo.com</a>
      </p>
      <p>为展会提供完整的数字化管理解决方案，涵盖展商、搭建商等多角色业务流程管理。</p>
      <p>1. 基于RBAC模型设计前端权限体系，通过Vue Router动态路由注册+自定义v-permission指令实现菜单/按钮/接口三级权限控制，支撑6种角色30+权限点的细粒度管控</p>
      <p>2. 报馆审图流程引擎：基于状态机模式管理多步骤审批流转，配合WebSocket实现审批状态实时推送，流程处理效率提升40%</p>
      <p>3. 动态表单配置系统：基于JSON Schema驱动表单渲染，支持字段联动、校验规则热更新与模板复用，新增业务表单开发周期从3天缩短至0.5天</p>
    </div>
  )
}
