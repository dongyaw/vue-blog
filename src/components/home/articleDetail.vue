<template>
  <div class="new_article shake animated" ref="new_article" style="top:15px;">
    <div class="article_t" id="article_t" v-if="article">
      <h2 class="title_t">{{ article.title }}</h2>
      <div class="content">
        <p class="user f14">
          <span>作者:{{ article.author }}</span>
          <span>日期: {{ article.date }}</span>
          <br>
        </p>
        <div class="abstract_t" v-html="article.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
var artDetaScroll = null
export default {
  name: "article-detail",
  data() {
    return {
      article: null
    };
  },
  mounted() {
    // 获取文章详情
    this.$nextTick(function() {
      this.$http
        .get("http://192.168.199.198:3000/api/getArticleById", {
          params: {
            id: this.$route.query.id
          }
        })
        .then(response => {
          this.article = response.data.data;
        })
        .then(() => {
          this.$nextTick(function() {
            let wrapper = this.$refs.new_article;
            artDetaScroll = new BScroll(wrapper, {
              click: true,
              probeType: 3
            });
            artDetaScroll.on('scroll',(pos) => {
            if(pos.y<0 && !this.isPc){
              this.$parent.conRightShow = false
            } else {
              this.$parent.conRightShow = true
            }
          })
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
};
export {artDetaScroll}
</script>

<style>
* {
  box-sizing: border-box;
}
.article_t {
  padding: 0;
  text-align: left;
  background: hsla(0, 0%, 100%, 0.9);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin-right: -17px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 20px;
  height: auto;
  width: 100%;
}
.abstract_t {
  margin: 10px 15px;
}
.abstract_t p {
  line-height: 30px;
}
.article_t .user {
  text-align: right;
  font-size: 14px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 35px;
  box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, 0.8);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 15px;
}
.title_t {
  text-align: center;
  margin: 15px 0 25px 0px;
}
.article_t .title_t {
  font-size: 20px;
  width: 100%;
  padding-top: 15px;
  position: relative;
}
</style>
