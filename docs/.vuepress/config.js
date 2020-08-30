const head = require("./config/head");
const nav = require("./config/nav");
const sidebar = require("./config/sidebar");
const friendLink = require("./config/friendLink");
const blogConfig = require("./config/blogConfig");
const plugins = require("./config/plugins");

module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  title: "summer",
  description: "Enjoy when you can, and endure when you must.",
  dest: "static",
  // base: '/my-blog/',  // gitee
  head,
  theme: "reco",
  themeConfig: {
    type: "blog",
    nav,
    sidebar,
    sidebarDepth: 2,
    blogConfig,
    friendLink,
    logo: "/picture.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "最后更新时间",
    author: "summer",
    authorAvatar: "/picture.jpg",
    // "record": "summer",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
  plugins,
};
