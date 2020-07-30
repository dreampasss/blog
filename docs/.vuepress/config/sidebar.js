// 配置侧边栏
const JAVASCRIPT = '/views/document/frontEnd/javascript/';
const CSS = '/views/document/frontEnd/css/';
const SOFTWARETOOLS = '/views/document/softwareTools/'
module.exports = {
  [JAVASCRIPT]: [
    {
      title: "JavaScript",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        { title: "字符串", path: `${JAVASCRIPT}字符串` },
        { title: "数组", path: `${JAVASCRIPT}数组` },
        { title: "对象", path: `${JAVASCRIPT}对象` },
        { title: "日期对象", path: `${JAVASCRIPT}日期对象` },
        { title: "对象解构", path: `${JAVASCRIPT}对象解构` },
        { title: "Math数学计算", path: `${JAVASCRIPT}Math数学计算` },
        { title: "Set", path: `${JAVASCRIPT}set类型` },
        { title: "Symbol", path: `${JAVASCRIPT}Symbol` },
        { title: "JSON", path: `${JAVASCRIPT}JSON` },
        { title: "原型", path: `${JAVASCRIPT}原型` }
      ]
    }
  ],
  [CSS]: [
    {
      title: "CSS",
      collapsable: false,
      sidebarDepth: 2,
      children: [
        { title: "基础知识", path: `${CSS}` },
        { title: "文本控制", path: `${CSS}字体` }
      ]
    }
  ],
  [SOFTWARETOOLS]: [
    { title: "VsCode", path: `${SOFTWARETOOLS}vsCode/` },
    { title: "Git", path: `${SOFTWARETOOLS}git/` },
    { title: "WebStorm", path: `${SOFTWARETOOLS}webStorm/` },
    { title: "Hbuilder X", path: `${SOFTWARETOOLS}hbuilder/` }
  ]
};
