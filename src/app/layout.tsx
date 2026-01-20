import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import index from './index.module.scss'
import '@/styles/globals.css'

export default async function RootLayout(props: {
  children: React.ReactNode
}) {
  const { children } = props

  return (
    <html>
      <body>
        <div className={`${index.typo} resume`}>
          {children}
          <div className={index.version}>version: v2025.06.10</div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
