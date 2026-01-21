import { EIconType } from '@/types'
import Divider from '../Common/Divider'
import Icon from '../Common/Icon'

import Title from '../Common/Title'
import style from './style.module.scss'

const numToCn = (n: number) => ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五'][n] || n

export default function Info() {
  // 从 2018 年 9 月开始计算
  const now = new Date()
  const start = new Date(2018, 8, 1) // 8对应9月，JS月份从0开始
  const diff = now.getFullYear() - start.getFullYear()
  const years = now.getMonth() >= 8 ? diff : diff - 1
  return (
    <>
      <Title>基本信息 - 个人站：Ayden.ren</Title>
      <Divider />
      <ul className={style.info}>
        <li>
          <Icon type={EIconType.Flag} />
          <span>
            <strong>前端开发工程师</strong>
          </span>
        </li>
        <li>
          <Icon type={EIconType.Info} />
          <span>
            朱杨松 | 男 | 1996 |
            {' '}
            <strong>苏州、上海</strong>
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
          <span>darkexpert007@gmail.com</span>
        </li>
        <li>
          <Icon type={EIconType.Education} />
          <span>
            2018全日制科班本 |
            {' '}
            {numToCn(years)}
            年经验
          </span>
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
