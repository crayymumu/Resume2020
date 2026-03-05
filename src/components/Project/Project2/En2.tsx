import { ETitleType } from '@/types'
import Divider from '../../Common/Divider'
import SmallTitle from '../../Common/SmallTitle'
import Title from '../../Common/Title'
import style from "./style.module.scss"

export default function Project() {
  return (
    <div className={style.project2}>
      <Title type={ETitleType.Theme}>Project</Title>
      <Divider />
      <SmallTitle>Data & Enterprise Management Platform</SmallTitle>
      <p>
        <strong>URL:</strong>{" "}
        <a
          href="https://data.handy-es.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          data.handy-es.com
        </a>
        {" | "}
        <a
          href="https://middle-platform.eesaenergy.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          middle-platform.eesaenergy.com
        </a>
      </p>
      <p>
        Led frontend architecture design and development for enterprise-level
        data and management platforms, building a unified technical foundation
        supporting multiple business systems.
      </p>
      <p>
        1. Abstracted unified technical foundation (component library wrapper,
        request layer, permission directives, layout templates), achieving 80%+
        code reuse across two platforms, improving new module development
        efficiency by 50%
      </p>
      <p>
        2. Alibaba Cloud CDN externals for core dependencies (Vue/Element
        Plus/ECharts), paired with Vite code-splitting and route-level
        prefetching, reducing first-screen load by 70%, ECharts on-demand
        imports cutting chart module size by 60%
      </p>
    </div>
  );
}
