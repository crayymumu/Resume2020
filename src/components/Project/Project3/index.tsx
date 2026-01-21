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
      <SmallTitle>展会管理系统系列</SmallTitle>
      <p>
        <strong>项目地址：</strong>
        <a href="https://service.eesaexpo.com" target="_blank" rel="noreferrer noopener">service.eesaexpo.com</a>
        {' | '}
        <a href="https://exhibitor-backend.eesaexpo.com" target="_blank" rel="noreferrer noopener">exhibitor-backend.eesaexpo.com</a>
      </p>
      <p>为展会提供完整的数字化管理解决方案，涵盖展商、搭建商等多角色的业务流程管理。</p>
      <p>1. Vue 3 + Pinia + Vue Router技术栈，阿里云CDN统一管理依赖库</p>
      <p>2. 多角色权限管理体系，展商信息、赞助信息、奖项申报等业务功能</p>
      <p>3. 搭建商团队管理、报馆审图流程、字段动态配置</p>
    </div>
  )
}
