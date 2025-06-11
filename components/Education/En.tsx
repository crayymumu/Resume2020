import { ETitleType } from '../../types'
import Divider from '../Common/Divider'

import Title from '../Common/Title'
import style from './style.module.scss'

export default function Education() {
  return (
    <>
      <Title type={ETitleType.Theme}>Education</Title>
      <Divider />
      <ul className={style.education}>
        <li>Jinling Institute of Technology</li>
        <li>Software Engineering Major</li>
        <li>2014.09 ~ 2018.06</li>
      </ul>
    </>
  )
}
