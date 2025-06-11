import { EIconType } from '@/types'
import Divider from '../Common/Divider'
import Icon from '../Common/Icon'

import Title from '../Common/Title'
import style from './style.module.scss'

export default function Info() {
  return (
    <>
      <Title>
        <strong>Yangsong Zhu</strong>
      </Title>
      <Divider />
      <ul className={style.info}>
        <li>
          <Icon type={EIconType.Flag} />
          <span>
            <strong>Front-end Engineer</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.Phone} />
          <span>
            <strong>13151569970</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.WeiChat} />
          <span>crayymumu</span>
        </li>
        <li>
          <Icon type={EIconType.Email} />
          <span>zys854994301@gmail.com</span>
        </li>
        <li>
          <Icon type={EIconType.Education} />
          <span>June 2018 | JIT</span>
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
        {/*    <a href="https://caohuilin.com" target="_blank"> */}
        {/*      caohuilin.com */}
        {/*    </a> */}
        {/*  </span> */}
        {/* </li> */}
      </ul>
      <Divider />
    </>
  )
}
