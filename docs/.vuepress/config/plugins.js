const moment = require('moment');
moment.locale('zh-cn') //设置最后更新的显示日期格式

module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  // '@vuepress-reco/comments': {
  //   solution: 'vssue',
  //   options: {
  //     title: 'vuepress-theme-reco',
  //     platform: 'github-v4',
  //     owner: 'dreampasss',
  //     repo: 'blog',
  //     clientId: 'f1ec945ed6a65b701b2e',
  //     clientSecret: 'aec02862d4e2266dc520c10c6fd41da9bb3f636c',
  //     autoCreateIssue: true,
  //     locale: 'zh'
  //   }
  // },
}
// npm install moment