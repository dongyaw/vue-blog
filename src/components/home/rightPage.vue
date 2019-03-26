<template>
  <div class="c_r_container">
    <div id="r_head_con" class="r_head_con">
      <div class="con_r_head" id="con_r_head"></div>
    </div>
    <div class="info" id="info">
      <p class="f20">习惯</p>
      <p class="normal">三无北漂</p>
    </div>
    <div class="chPanl" id="chPanl">
      <ul class="tabs">
        <router-link tag="li" active-class='current' :to="{path: '/home/articlelist'}" replace>最新文章</router-link>
        <router-link tag="li" active-class='current' :to="{path: '/home/about'}" replace>关于我</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rightPage',
  data () {
    return {
    }
  }
}
</script>
<style>
.con_r_head {
  background: url(../../assets/images/con_right_head.jpg) center 50% no-repeat;
  border-radius: 150px;
  background-size: 150px 150px;
  width: 150px;
  height: 150px;
  margin: auto;
  margin-top: 10px;
}
  @media screen and (min-width: 993px) {
    .c_r_container{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      top: 45%;
      transform: translateY(-50%)
    }
  }
  .info p{line-height:50px}
 @media screen and (max-width: 992px) {
    .info p{line-height:30px}
    .r_head_con{
      float: left;
      width: 50%;
    }
    .c_r_container .info{
      float: right;
      width: 50%;
      position: absolute;
      top: 25%;
      right: 0;
    }
  }
  .chPanl{
    clear: both;
    padding-top: 10px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .chPanl ul{
    display:-moz-flex;
    display:-ms-flex;
    display:-o-flex;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    padding:8px;
    width: 200px;

    margin: 0 auto 0 0\9;
  }
  .chPanl ul li{
    -webkit-box-flex:1;
    -ms-flex:1;
    flex:1;
    width:90px;
    cursor:pointer;
    margin:0 5px;
    float: left\9;
    width: 80px\9;
  }
  .chPanl ul li a{cursor:pointer;color:#fff;text-decoration:none;}
  .chPanl ul li a:hover{
    color:#38b7ea;
    text-decoration:none;
  }
  .chPanl ul li a:visited{color:#fff}
  .chPanl ul li.current{
    border:1px solid #38b7ea;
    border-radius:5px;
    color:#38b7ea
  }
  .chPanl ul li.current a{
    color:#38b7ea;
  }
</style>
