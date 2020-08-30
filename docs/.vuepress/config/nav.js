
const DOCUMENT_FRONNTEND = '/views/document/frontEnd/'    // 前端文档
const DOCUMENT_BACKEND = '/views/document/backEnd/'       // 后端文档
const DOCUMENT_TOOLS = '/views/document/softwareTools/'   // 软件工具文档
const OTHER = '/views/other/'                             // 其他

module.exports = [
  { "text": "首页", "link": "/", "icon": "reco-home" },
  { "text": "时间轴", "link": "/timeline/", "icon": "reco-date" },
  {
    text: '文档', "icon": "reco-document",
    items: [
      {
        text: '前端',
        items: [
          { text: 'html', link: `${DOCUMENT_FRONNTEND}html/`, "icon": "iconfont icon-icon--" },
          { text: 'css', link: `${DOCUMENT_FRONNTEND}css/`, "icon": "iconfont icon-CSSyangshi" },
          { text: 'javascript', link: `${DOCUMENT_FRONNTEND}javascript/字符串`, "icon": "iconfont icon-js" },
          { text: 'Vue', link: `${DOCUMENT_FRONNTEND}vue/`, "icon": "iconfont icon-vuejs" },
          { text: 'React', link: `${DOCUMENT_FRONNTEND}react/`, "icon": "iconfont icon-react" },
          { text: 'Jquery', link: `${DOCUMENT_FRONNTEND}jquery/`, "icon": "iconfont icon-jquery" },
          { text: '微信小程序', link: `${DOCUMENT_FRONNTEND}wechatProgram/`, "icon": "iconfont icon-xiaochengxu1" }]
      },
      {
        text: '后端',
        items: [
          { text: 'Node', link: `${DOCUMENT_BACKEND}node/`, "icon": "iconfont icon-node", }]
      }
    ]
  },
  {
    text: '软件工具', "icon": "iconfont icon-gongju",
    items: [
      { text: 'VsCode', link: `${DOCUMENT_TOOLS}vsCode/`, "icon": "iconfont icon-vscodeignore" },
      { text: 'Git', link: `${DOCUMENT_TOOLS}git/`, "icon": "iconfont icon-git" },
      { text: 'WebStorm', link: `${DOCUMENT_TOOLS}webStorm/`, "icon": "iconfont icon-webstorm" },
      { text: 'Hbuilder x', link: `${DOCUMENT_TOOLS}hbuilder/`, "icon": "iconfont icon-H" }]
  },
  {
    text: '其他', "icon": "iconfont icon-gengduomore10",
    items: [
      { text: '传送门', link: `${OTHER}fly/`, "icon": "iconfont icon-chuansong-shi" },
      { text: '博主', link: `${OTHER}author/author`, "icon": "iconfont icon-gz" }
    ]
  },
]


	// {"text": "GitHub","icon": "reco-message",
	// 	"items": [
	// 		{"text": "NPM", "link": "https://www.npmjs.com", "icon": "reco-npm"},
	// 		{"text": "GitHub","link": "https://github.com/recoluan","icon": "reco-github"},
	// 		{"text": "简书","link": "https://www.jianshu.com/u/cd674a19515e","icon": "reco-jianshu"},
	// 		{"text": "CSDN","link": "https://blog.csdn.net/recoluan","icon": "reco-csdn"},
	// 		{"text": "博客圆","link": "https://www.cnblogs.com/luanhewei/","icon": "reco-bokeyuan"},
	// 		{"text": "WeChat","link": "https://mp.weixin.qq.com","icon": "reco-wechat"}]
	// }
	// {"text": "GitHub","link": "https://www.baidu.com","icon": "reco-github"},