---
home: true
heroText: summer
tagline: Enjoy when you can, and endure when you must.
# bgImage: /bgImg.jpg
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
bgImageStyle: {
  height: '420px'
}
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---
<script>
export default {
  mounted () {
    const mask = document.querySelector('.home-blog .hero .mask');
    // mask.style.background = 'url(/my-blog/bgImg.jpg) center 10% / cover no-repeat';// gitee
    mask.style.background = 'url(/bgImg.jpg) center 10% / cover no-repeat';  // github 
  }
}
</script>