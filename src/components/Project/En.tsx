import { ETitleType } from '@/types'
import Divider from '../Common/Divider'
import SmallTitle from '../Common/SmallTitle'
import Title from '../Common/Title'
import style from './Project2/style.module.scss'

export default function Project() {
  return (
    <div className={style.project1}>
      <Title type={ETitleType.Theme}>Project</Title>
      <Divider />
      <SmallTitle>Data & Enterprise Management Platform</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://data.handy-es.com" target="_blank" rel="noreferrer noopener">data.handy-es.com</a>
        {' | '}
        <a href="https://middle-platform.eesaenergy.com" target="_blank" rel="noreferrer noopener">middle-platform.eesaenergy.com</a>
      </p>
      <p>Led frontend architecture design and development for enterprise-level data and management platforms, building a unified technical foundation supporting multiple business systems.</p>
      <p>1. Rebuilt enterprise applications using Vue 3.2 + Composition API, Pinia 2.0.28, Element Plus 2.2.27, Vue Router 4.1.6</p>
      <p>2. Established Vue 3 + Pinia + Vue Router + Element Plus standard system, unifying two platform architectures</p>
      <p>3. Managed frontend dependencies via Alibaba Cloud CDN, implemented module preloading, integrated ECharts 5.4.0</p>

      <Divider />
      <SmallTitle>EESA Energy Storage Industry Platform</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://database.handy-es.com" target="_blank" rel="noreferrer noopener">database.handy-es.com</a>
        {' | '}
        <a href="https://www.handy-es.com/platform" target="_blank" rel="noreferrer noopener">handy-es.com/platform</a>
      </p>
      <p>Professional service platform for energy storage industry chain, covering database queries, enterprise services, and report management.</p>
      <p>1. Vue.js modular architecture supporting complex queries, unified build for Web and mobile ecosystem</p>
      <p>2. Modular code management with lazy loading, theme switching and mobile adaptation</p>
      <p>3. Unified global loading state management, standardized build process with optimized resource loading</p>

      <Divider />
      <SmallTitle>Industrial Chain Visualization Map</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://industrial-map.handy-es.com" target="_blank" rel="noreferrer noopener">industrial-map.handy-es.com</a>
      </p>
      <p>Next.js-based industrial chain data visualization platform providing intuitive structure display and data analysis capabilities.</p>
      <p>1. Next.js App Router + SSR optimization for first-screen performance</p>
      <p>2. AMap API integration for enterprise geolocation visualization and clustering</p>
      <p>3. CSS priority loading strategy, large-scale data chart rendering optimization</p>
    </div>
  )
}
