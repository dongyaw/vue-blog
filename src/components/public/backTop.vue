<template>
  <div class="btnGroup">
    <ul v-if="isPc">
      <li @click="toBack" v-if="this.$route.path!=='/home/articlelist'"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true" alt="返回列表" title="返回列表"> </span></li>
      <li @click="toTop" v-show="btnTop"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true" alt="返回顶部" title="返回顶部"> </span></li>
      <li @click="changeBg"><span class="glyphicon glyphicon-refresh" aria-hidden="true" alt="切换背景" title="切换背景"> </span></li>
    </ul>
    <ul v-else>
      <li @click="toBack" v-if="this.$route.path!=='/home/articlelist'"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true" alt="返回列表" title="返回列表"> </span></li>
      <li @click="toTop"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true" alt="返回顶部" title="返回顶部"> </span></li>
      <li @click="changeBg"><span class="glyphicon glyphicon-refresh" aria-hidden="true" alt="切换背景" title="切换背景"> </span></li>
    </ul>
  </div>
</template>
<script>
import store from '../../assets/js/store'
import {artListScroll} from '../home/article.vue'
import {artDetaScroll} from '../home/articleDetail.vue'
import {aboutScroll} from '../home/about.vue'
export default {
  name: 'backTop',
  data () {
    return {
      backDom: 'artic_list',
      routePath: '',
      btnTop: false,
      bgIndex: 0,
      bgName: store.get()
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.bindDomEvent()
    })
  },
  methods: {
    bindDomEvent () {
      switch (this.$route.path) {
        case '/home/about':
          // 关于我页面 滚动条所在内容的div.id名称
          this.backDom = 'about'
          this.routePath = 'aboutContainer'
          break
        case '/home/articlelist':
          // 文章列表页面
          this.backDom = 'artic_list'
          this.routePath = 'new_article'
          break
        case '/home/articleDetail':
          // 文章详情页面
          this.backDom = 'article_t'
          this.routePath = 'new_article'
          break
      }
      var btnScroll = document.getElementById(this.backDom)
      if (btnScroll) {
        btnScroll.addEventListener('scroll', this.needToTop);
      }
    },
    needToTop () {
      let bkDom = document.getElementById(this.backDom)
      let scrollHei = bkDom.scrollTop
      // 判断是否在页面顶部 不在顶部的话就显示返回顶部按钮
      scrollHei > 0 ? this.btnTop = true : this.btnTop = false
    },
    toBack () {
      this.$router.push({path: '/home/articlelist'})
    },
    toTop () {
      // 子组件调用父组件属性 this.$parent.～～～
      // 如果是移动端直接调用scroll-view的定位函数 如果是pc 不同页面的滚动条所在的dom元素的scrollTop属性 =0 返回顶部
      // let routP = this.routePath
      
      let iscroll = null
      switch (this.$route.path) {
        case '/home/about':
          // 关于我页面 滚动条所在内容的div.id名称
          iscroll = aboutScroll
          break
        case '/home/articlelist':
          // 文章列表页面
          iscroll = artListScroll
          break
        case '/home/articleDetail':
          // 文章详情页面
          iscroll = artDetaScroll
          break
      }
      if (!this.isPc) {
        iscroll.scrollTo(0, 0)
        iscroll.refresh()
      } else {
        document.getElementById(this.backDom).scrollTop = 0
      }
    },
    changeBg: function () {
      let n = ['bj1.jpg', 'bj2.jpg', 'bj3.jpg', 'bj4.jpg', 'bj5.jpg', 'bj6.jpg', 'bj7.jpg']
      this.bgIndex++
      if (this.bgIndex === 7) {
        this.bgIndex = 0
        this.bgName = 'bj1.jpg'
        document.body.style.backgroundImage = 'url("../../static/images/bj1.jpg")'
      } else {
        this.bgName = n[this.bgIndex]
        document.body.style.backgroundImage = 'url("../../static/images/' + n[this.bgIndex] + '")'
      }
      store.save(this.bgName)
    }
  }
}
</script>
<style scoped>
.btnGroup {
  position: absolute;
  z-index: 11;
  right: 15px;
  bottom: 45px;
  width: 50px;
  font-size: 25px;
  height: 300px;
  display: flex;
  flex-direction: column-reverse;
}
.btnGroup ul{
  margin: 0;
  padding: 0;
}
.btnGroup ul li {
  width: 50px;
  height: 50px;
  background-color: rgba(0,0,0,.5);
  cursor: pointer;
  margin-top: 12px;
  text-align: center;
  border-radius: 3px;
}
.btnGroup li span {
  position: relative;
  margin:0 auto;
  margin-top: 12px;
}
.btnGroup .glyphicon-refresh {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg)
}
.btnGroup span,.btnGroup span:hover {
  transition-duration: .3s
}
.btnGroup .glyphicon-refresh:hover {
  -webkit-transform: rotate(1turn);
  transform: rotate(1turn)
}
</style>

