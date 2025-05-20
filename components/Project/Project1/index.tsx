import Title, { ETitleType } from "../../Common/Title";
import Divider from "../../Common/Divider";
import SmallTitle from "../../Common/SmallTitle";

import style from "./style.module.scss";

export default function Project() {
  return (
    <div className={style.project1}>
      <Title type={ETitleType.Theme}>项目介绍</Title>
      <Divider />
      <SmallTitle>低代码平台</SmallTitle>
      <p>
        1. 基于 iview-ui 封装完整的前端 CRUD 平台，将其复杂 json 配置进行包装为易用 UI 配置。
      </p>
      <p>
        2. 实现可拖拽、定制属性的表单组件，也支持快速搭建不同形式的自定义代码表单组件。
      </p>
      <p>
        3. 支持对角色权限设置、流程权限设置，实现数据隔离，保证数据安全性。
      </p>
    </div>
  );
}
