import Title from '../Common/Title'
import style from './style.module.scss'

export default function Experience() {
  return (
    <>
      <Title>Experience</Title>
      <ul className={style.experience}>
        <li>
          <h5>
            EESA
            <span className={style.enTag}>New Energy Storage</span>
          </h5>
          <p>2022.04 ~ Present</p>
          <p>
            <strong>Senior Frontend Engineer</strong>
          </p>
          <p>
            Building engineering infrastructure, enhancing team capabilities,
            developing and iterating products
          </p>
        </li>
        <li>
          <h5>
            AMAX
            <span className={style.enTag}>Listed MNC</span>
          </h5>
          <p>2020.04 ~ 2022.04</p>
          <p>
            <strong>Senior Frontend Engineer</strong>
          </p>
          <p>
            Maintaining frontend component library
            Building low-code development platform
          </p>
        </li>
        <li>
          <h5>
            Patsnap
            <span className={style.enTag}>Tech Unicorn</span>
          </h5>
          <p>2019.04 ~ 2020.04</p>
          <p>
            <strong>Frontend Engineer</strong>
          </p>
          <p>Responsible for Bio/Chemical product iterations</p>
        </li>
        <li>
          <h5>
            CAC
            <span className={style.enTag}>Traditional Enterprise</span>
          </h5>
          <p>2017.07 ~ 2019.04 (including internship)</p>
          <p>
            <strong>Full-stack Engineer</strong>
          </p>
          <p>
            Responsible for frontend and backend project development and
            maintenance
          </p>
        </li>
      </ul>
    </>
  )
}
