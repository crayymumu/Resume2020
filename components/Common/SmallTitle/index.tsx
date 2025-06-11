import type { FC } from 'react'
import style from './style.module.scss'

const SmallTitle: FC = ({ children }) => {
  return (
    <h5 className={style.smallTitle}>
      {children}
    </h5>
  )
}
export default SmallTitle
