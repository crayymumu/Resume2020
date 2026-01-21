import Divider from '../Common/Divider'
import Title from '../Common/Title'

import style from './style.module.scss'

export default function Experience() {
  return (
    <>
      <Title>工作经历</Title>
      <ul className={style.experience}>
        <li>
          <h5>
            上海领储信息咨询有限公司
            <span className={style.tag}>新能源储能平台型公司</span>
          </h5>
          <p>2022.04 ~ 至今</p>
          <p><strong>技术总监</strong></p>
          <p>组建技术团队、搭建开发工程体系、研发迭代产品</p>
        </li>
        <li>
          <h5>
            超集信息科技有限公司
            <span className={style.tag}>上市外企</span>
          </h5>
          <p>2020.04 ~ 2022.04</p>
          <p><strong>前端负责人</strong></p>
          <p>维护前端通用组件库</p>
          <p>搭建低代码开发平台</p>
        </li>
        <li>
          <h5>
            智慧芽信息科技有限公司
            <span className={style.tag}>互联网独角兽</span>
          </h5>
          <p>2019.04 ~ 2020.04</p>
          <p><strong>高级前端开发工程师</strong></p>
          <p>负责 Bio / Chemical 产品的迭代</p>
        </li>
        <li>
          <h5>
            高达计算机技术有限公司
            <span className={style.tag}>传统日企</span>
          </h5>
          <p>2017.07 ~ 2019.04（含实习期）</p>
          <p><strong>全栈开发工程师</strong></p>
          <p>负责前后端项目构建及维护</p>
        </li>
      </ul>
      <Divider />
    </>
  )
}
