// 站点枚举常量
// 依据: MASTER_SOP.md SOP-3A-08

/** 站点分类（slug 与路由 /sites/[category] 对应） */
export enum SiteCategory {
  FakeShopping = "fake-shopping",
  OddlySatisfying = "oddly-satisfying",
  InteractiveArt = "interactive-art",
  Cozy = "cozy",
}

/** 渲染模式（与 rendering_spec_v1.md §1 渲染模式分配表对应） */
export enum RenderMode {
  SSG = "SSG",
  ISR = "ISR",
  CSR = "CSR",
}

/** 联盟商户（AffiliateLink 组件 merchant prop） */
export enum AffiliateMerchant {
  YesStyle = "yesstyle",
  StyleKorean = "stylekorean",
  Amazon = "amazon",
  Other = "other",
}
