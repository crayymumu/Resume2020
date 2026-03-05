import { ETitleType } from '@/types'
import Divider from '../../Common/Divider'
import SmallTitle from '../../Common/SmallTitle'
import Title from '../../Common/Title'
import style from './style.module.scss'

export default function Project() {
  return (
    <div className={style.project1}>
      <Title type={ETitleType.Theme}>Project</Title>
      <Divider />
      <SmallTitle>Official Website Cluster</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://www.eesaenergy.com" target="_blank" rel="noreferrer noopener">www.eesaenergy.com</a>
        {' | '}
        <a href="https://www.eesaexpo.com" target="_blank" rel="noreferrer noopener">www.eesaexpo.com</a>
      </p>
      <p>Leading exhibition website cluster for energy storage industry, handling booth reservations, attendee registration, and exhibitor management with 5000+ daily pageviews.</p>
      <p>1. Next.js SSR/SSG hybrid architecture with CDN edge caching and resource preloading, boosting Lighthouse Performance from 58 to 95+, LCP under 1.2s</p>
      <p>2. Custom i18n routing middleware via Next.js Middleware for request-level language detection and path rewriting, paired with getStaticPaths for multi-language static pages, eliminating runtime CLS</p>
      <p>3. Reusable video banner component with Intersection Observer lazy loading, WebP/AVIF fallback, and skeleton placeholders to eliminate CLS (down to 0); extracted countdown hooks and floating components with dynamic imports, reducing main bundle by ~40%</p>

      <Divider />
      <SmallTitle>Energy Storage Ecosystem Platform</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a href="https://database.handy-es.com" target="_blank" rel="noreferrer noopener">database.handy-es.com</a>
        {' | '}
        <a href="https://www.handy-es.com/platform" target="_blank" rel="noreferrer noopener">handy-es.com/platform</a>
        {' | '}
        <span className={style.qrcodeLink}>
          WeChat Mini Program (Handy-ES)
          <img src="/qrcode-handyes.png" alt="Mini Program QR Code" className={style.qrcode} />
        </span>
      </p>
      <p>Professional platform for energy storage industry chain, covering database queries, enterprise services, and report management for digital transformation.</p>
      <p>1. Vue.js modular architecture with route-level code splitting via Webpack magic comments, reducing first-screen JS by 55%, TTI from 4.8s to 2.1s</p>
      <p>2. CSS variables-driven theming + container queries for responsive layouts, removed unused styles with PurgeCSS (60% CSS reduction), Lighthouse Accessibility 95+</p>
      <p>3. Axios interceptors for unified request state management, skeleton screens and progressive image loading (LQIP) for perceived performance, TBT down 70%</p>
      <Divider />
      <SmallTitle>Industrial Chain Visualization Map</SmallTitle>
      <p>
        <strong>URL:</strong>
        {' '}
        <a
          href="https://industrial-map.handy-es.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          industrial-map.handy-es.com
        </a>
      </p>
      <p>
        Geographic visualization platform for energy storage industry chain,
        displaying 2000+ enterprises nationwide with multi-dimensional data
        drill-down.
      </p>
      <p>
        1. Next.js 14 App Router + RSC streaming with Suspense boundaries for
        selective hydration, INP under 150ms, TTFB down 60%
      </p>
      <p>
        2. AMap JS API wrapper with Web Worker-based clustering algorithm
        (avoiding main thread blocking), layered rendering and viewport culling
        for massive markers, stable 60fps map interactions
      </p>
      <p>
        3. Virtual scrolling + CSS content-visibility: auto for 10k+ item lists,
        React.memo and useDeferredValue to reduce re-render overhead
      </p>
    </div>
  )
}
