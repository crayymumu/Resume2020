import { SpeedInsights } from '@vercel/speed-insights/next'
import Download from '../components/Download'
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
          <Download />
          <div className={index.version}>version: v2025.06.10</div>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
