import { ETitleType } from '../../../types'
import style from './style.module.scss'

export default function Title(
  props: React.PropsWithChildren<{ type?: ETitleType }>,
) {
  const { type = ETitleType.Default, children } = props
  return (
    <h4 className={type === ETitleType.Theme ? style.themeTitle : style.title}>
      {children}
    </h4>
  )
}
