<template>
  <div style="height:100%">
    <div class="welcome" v-if="!isPc">
        <div class="con_right col-md-2 col-lg-2" ref="con_right" v-if="conRightShow">
          <right-page></right-page>
        </div>
        <div class="con_left col-md-10 col-lg-10 col-sm-10" id="con_left">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
      <backtop ref="backtop"></backtop>
    </div>
    <div class="welcome" v-else>
      <div class="con_left col-md-10 col-lg-10 col-sm-12" id="con_left">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
      <div class="con_right col-md-2 col-lg-2" ref="con_right" v-if="conRightShow">
        <right-page></right-page>
      </div>
      <backtop ref="backtop"></backtop>
    </div>
    <footer id="foot" class="foot">
      <bottom></bottom>
    </footer>
  </div>
</template>
<script>
import store from "../assets/js/store"
import rightPage from "./home/rightPage"
import backtop from "./public/backTop"
import Bottom from "./home/Bottom"
export default {
  name: "home",
  components: { rightPage, Bottom, backtop },
  data() {
    return {
      bgName: store.get(),
      conRightShow:true
    };
  },
  updated() {
    // 父组件调用子组件的方法 前提要在上面引用组件的时候加上 ref 属性
    this.$refs.backtop.bindDomEvent();
    setTimeout(() => {
      // if (this.$refs.iscroll) {
      //   this.$refs.iscroll.refresh();
      // }
    }, 300);
  },
  created() {
    document.body.style.backgroundImage =
      'url("../static/images/' + this.bgName + '")';
    // console.log('浏览器类型是不是 pc：' + this.isPc)
    setTimeout(() => {
      // if (this.$refs.iscroll) {
      //   this.$refs.iscroll.refresh();
      // }
    }, 1000);
  },
  methods: {
    log() {}
  }
};
</script>
<style>
.welcome {
  height: 100%;
  min-width: 280px;
}
.con_right_m {
  height: 210px;
  width: 100%;
}
.con_right,
.con_right_m {
  background-color: rgba(0, 0, 0, 0.6);
  float: right;
  z-index: 10;
}
.con_left {
  position: relative;
  height: calc(100% + 40px);
  margin-bottom: 30px;
  margin-top: 15px;
}
@media screen and (min-width: 993px) {
  .new_article {
    width: calc(100% - 160px);
  }
  .con_right {
    height: 100%;
  }
}
@media screen and (max-width: 992px) {
  .con_right {
    height: 210px;
    width: 100%;
    position: absolute;
    top: 0;
  }
  .con_left {
    position: relative;
    top: 220px;
    height: calc(100% - 180px);
  }
  .new_article {
    width: calc(100% - 1px);
  }
}
@media screen and (max-width: 768px) {
  .con_right {
    height: 210px;
    width: 100%;
    position: absolute;
    top: 0;
  }
  .new_article,
  .aboutContainer {
    width: 100%;
  }
}
@media screen and (min-width: 767px) {
  .new_article,
  .aboutContainer {
    width: 85%;
  }
}
li {
  list-style: none;
}
.new_article {
  min-width: 300px;
  /* overflow: hidden; */
  margin: 0 auto;
  height: calc(100% - 90px);
  color: #565a5f;
  position: relative;
  -webkit-transform: translate(0);
  transform: translate(0);
}
.artic_list {
  height: auto;
}
.article {
  text-align: left;
  cursor: pointer;
  padding: 5px 15px 15px 15px;
  background: hsla(0, 0%, 100%, 0.9);
  border-radius: 5px;
}
.foot {
  position: fixed;
  z-index: 10;
  height: 31px;
  width: 100%;
  bottom: 0;
  line-height: 31px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #444),
    to(#404040)
  );
  background: linear-gradient(to bottom, #444 0, #404040 100%);
  color: #fff;
  text-align: center;
}
</style>
