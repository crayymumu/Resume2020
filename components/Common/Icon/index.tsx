import style from './style.module.scss'

export enum EIconType {
  Github = "github",
  WeiChat = "weichat",
  Info = "info",
  Flag = "flag",
  Phone = "phone",
  Email = "Email",
  Website = "website",
  Education = "education",
}

const IconMap = {
  [EIconType.Github]: <i className={style.iconfont}>&#xee2b;</i>,
  [EIconType.WeiChat]: <i className={style.iconfont}>&#xe613;</i>,
  [EIconType.Info]: <i className={style.iconfont}>&#xe609;</i>,
  [EIconType.Flag]: <i className={style.iconfont}>&#xe608;</i>,
  [EIconType.Phone]: <i className={style.iconfont}>&#xe686;</i>,
  [EIconType.Email]: <i className={style.iconfont}>&#xea9c;</i>,
  [EIconType.Website]: <i className={style.iconfont}>&#xe8be;</i>,
  [EIconType.Education]: <i className={style.iconfont}>&#xe61e;</i>,
};

export default function Icon({ type }: { type: EIconType }) {
  return IconMap[type]
}
