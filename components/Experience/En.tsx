import Title from "../Common/Title";
import style from "./style.module.scss";

export default function Experience() {
  return (
    <>
      <Title>Experience</Title>
      <ul className={style.experience}>
        <li>
          <h5>AMAX - MIS</h5>
          <p>2020.04 ~ now</p>
          <p>
            <strong>Front-end Manager</strong>
          </p>
          <p>responsible for building open front-end applications</p>
          <p>responsible for maintaining front-end common component library</p>
          <p>responsible for building a low-code development platform</p>
        </li>
        <li>
          <h5>Patsnap - Core</h5>
          <p>2019.05 ~ 2020.04</p>
          <p>
            <strong>Senior Front-end Development Engineer</strong>
          </p>
          <p>
            responsible for iteration of Bio/Chemical products
          </p>
        </li>
        <li>
          <h5>CAC - China</h5>
          <p>2017.07 ~ 2019.05</p>
          <p>
            <strong>Full stack developer</strong>
          </p>
          <p>
            responsible for the construction and maintenance of front-end and back-end projects
          </p>
        </li>
      </ul>
    </>
  );
}
