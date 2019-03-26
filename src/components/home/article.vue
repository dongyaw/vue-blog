
<template>
  <div class="new_article" ref="new_article">
    <div class="artic_list" id="artic_list">
      <!-- 随机给一个css动画 -->
      <div
        v-for="item in articleLists"
        :key="item._id"
        v-bind:class="['article',defaultClass[Math.floor(Math.random()*7)], ' animated']"
      >
        <h2 class="title">{{ item.title }}</h2>
        <div class="content">
          <p class="user f14">
            <span>作者:{{ item.author }}</span>
            <span>日期: {{ item.date }}</span>
            <br>
          </p>
          <div class="abstract" v-html="item.abstract"></div>
        </div>
        <div class="more f14">
          <router-link tag="span" :to="{path:'/home/articleDetail',query:{id:item._id}}">阅读全文</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
var artListScroll = null
export default {
  name: "articleList",
  data() {
    return {
      defaultClass: [
        "bounceInDown",
        "bounceInLeft",
        "rubberBand",
        "wobble",
        "rotateIn",
        "rotateInDownLeft"
      ],
      articleLists: []
    };
  },
  mounted() {
    this.$http
      .get("http://192.168.199.198:3000/api/getArticleList")
      .then(response => {
        this.articleLists = response.data.data.list;
      })
      .then(() => {
        this.$nextTick(function() {
          let wrapper = this.$refs.new_article
          artListScroll = new BScroll(wrapper,{
            click: true,
            probeType: 3
          })
          artListScroll.on('scroll',(pos) => {
            if(pos.y<0 && !this.isPc){
              this.$parent.conRightShow = false
            } else {
              this.$parent.conRightShow = true
            }
          })
        })
      })
      .catch(err => {
        console.log(err);
      });
  },
  updated() {}
};
export {artListScroll}
</script>

<style>
@keyframes swings {
  50% {
    transform: rotateZ(5deg);
  }
  100% {
    transform: rotateZ(-5deg);
  }
}
@-webkit-keyframes swings {
  50% {
    transform: rotateZ(5deg);
  }
  100% {
    transform: rotateZ(-5deg);
  }
}
@-ms-keyframes swings {
  50% {
    transform: rotateZ(5deg);
  }
  100% {
    transform: rotateZ(-5deg);
  }
}
@-webkit-keyframes change {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@-ms-keyframes change {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes change {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.article .title:hover h2:after {
  opacity: 0;
}
.article:hover h2 {
  color: #38b7ea;
}
.abstract {
  width: calc(100% - 20px);
}
.abstract {
  display: -webkit-box;
  overflow: hidden;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  -ms-word-break: break-all;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  line-height: 30px;
}
.user {
  text-align: center;
  margin: 10px 0px;
}
.more {
  text-align: center;
  margin: 20px 0px 0px 0px;
}
.title {
  text-align: center;
  margin: 5px 0px 20px 0px;
}
.user span {
  margin-right: 5px;
}
.more span {
  display: inline-block;
  color: #fff;
  background: #000;
  border: 2px solid #000;
  padding: 10px 15px;
  border-radius: 5px;
}
.more span:hover {
  background: #fff;
  color: #38b7ea;
  border: 2px solid #565a5f;
  text-decoration: underline;
}
.article:hover h2:after {
  opacity: 0;
}
.article:hover h2:before {
  background: #38b7ea;
  width: 100%;
  content: " ";
  opacity: 1;
  transition: 1s;
}
.article .title {
  font-size: 20px;
  padding-bottom: 20px;
  position: relative;
}
.article .title:before {
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 0%;
  content: " ";
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  background: #000;
}
.article .title:after {
  position: absolute;
  bottom: 0;
  height: 3px;
  width: 100%;
  content: " ";
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  background: #000;
  -webkit-animation: change 1s;
  -o-animation: change 1s;
  animation: change 1s;
}
.content {
  height: 100%;
  width: 100%;
}
</style>
