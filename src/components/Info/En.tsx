import { EIconType } from '@/types'
import Divider from '../Common/Divider'
import Icon from '../Common/Icon'

import Title from '../Common/Title'
import style from './style.module.scss'

export default function Info() {
  return (
    <>
      <Title>
        <strong>Yangsong Zhu - <a href="https://resume.ayden.ren/en/frontend" target="_blank">Resume</a></strong>
      </Title>
      <Divider />
      <ul className={style.info}>
        <li>
          <Icon type={EIconType.Flag} />
          <span>
            <strong>Frontend Engineer</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.Info} />
          <span>
            Male | born in 1996
          </span>
        </li>
        <li>
          <Icon type={EIconType.Phone} />
          <span>
            <strong>+86 13151569970</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.WeiChat} />
          <span>crayymumu</span>
        </li>
        <li>
          <Icon type={EIconType.Email} />
          <span>darkexpert007@gmail.com</span>
        </li>
        <li>
          <Icon type={EIconType.Education} />
          <span>2014.09 ~ 2018.06 | Bachelor Jinling Institute of Technology</span>
        </li>
        {/* <li> */}
        {/*  <Icon type={EIconType.Github} /> */}
        {/*  <span> */}
        {/*    <a href="https://github.com/crayymumu" target="_blank"> */}
        {/*      crayymumu */}
        {/*    </a> */}
        {/*  </span> */}
        {/* </li> */}
        {/* <li> */}
        {/*  <Icon type={EIconType.Website} /> */}
        {/*  <span> */}
        {/*    <a href="https://resume.ayden.ren" target="_blank"> */}
        {/*      resume.ayden.ren */}
        {/*    </a> */}
        {/*  </span> */}
        {/* </li> */}
      </ul>
      <Divider />
    </>
  )
}
