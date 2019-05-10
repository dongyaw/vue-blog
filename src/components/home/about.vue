<template>
  <div class="aboutContainer" ref="aboutRef">
    <div class="about article" id="about" v-if="about" v-html="about.content"></div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
var aboutScroll = null;
export default {
  name: "about-page",
  data() {
    return {
      about: null
    };
  },
  mounted() {
    console.log(
      "打个广告，本人目前无业游民，有没有在帝都的公司有缺中级前端开发的，联系我多谢"
    );
    console.log(
      " %c email:ya784820999@163.com  wechat: whtmbyy  phone:18511344524",
      "color:red"
    );
    this.$nextTick(function() {
      this.$http
        .get("http://127.0.0.1:3000/api/getAboutUser")
        .then(response => {
          this.about = response.data.data;
        })
        .then(() => {
          this.$nextTick(function() {
            let wrapper = this.$refs.aboutRef;
            aboutScroll = new BScroll(".aboutContainer", {
              click: true,
              mouseWheel:true,
              probeType: 3
            });
            // aboutScroll.on("scroll", pos => {
            //   if (pos.y < 0 && !this.isPc) {
            //     this.$parent.conRightShow = false;
            //   } else {
            //     this.$parent.conRightShow = true;
            //   }
            // });
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
};
export { aboutScroll };
</script>
<style>
@media screen and (max-width: 768px) {
  .about hr {
    margin: 0px;
  }
  .aboutContainer {
    padding-left: 0px;
    padding-right: 0px;
    width: calc(100% - 40px);
  }
}
/* @media screen and (max-width: 992px) {
    .about{
      height: calc(100% - 280px);
    }
  } */
.aboutContainer {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  height: calc(100% - 100px);
  width: calc(100% - 40px);
}
.about {
  text-align: left;
  color: #565a5f;
  height: auto;
  width: 100%;
  margin: 0 auto;
}
</style>
