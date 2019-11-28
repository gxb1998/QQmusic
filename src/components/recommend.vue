<template>
  <div>
    <!-- 轮播图 -->
    <swiper></swiper>

    <div class="mod_twocol_list mod_twocol_list_normal">
      <h2 class="list_title">电台</h2>
      <ul class="list_container">
        <li v-for='item in djsong' :key='item.id'>
          <a class="list_main" href="javascript:;">
            <div class="list_media clearfix">
              <img
                class="video_list__media_img"
                :src="item.picUrl"
                :alt="item.name"
              />
              <span class="icon icon_play"></span>
            </div>
            <div class="list_info">
              <h3 class="list_tit tit_two_row">{{item.name}}</h3>
            </div>
          </a>
        </li>
       
      </ul>
    </div>
    <footer class="mod_footer">
      <div class="version_tab">
        <a href="https://y.qq.com/?ADTAG=myqq&amp;nomobile=1#type=index">查看电脑版网页</a>
      </div>
      <div class="footer_logo">QQ音乐</div>
      <p class="copyright">
        Copyright © 1998 -
        <span>2019</span> Tencent. All Rights Reserved.
      </p>
      <p class="copyright">联系电话：0755-86013388 QQ群：55209235</p>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
import swiper from "@/components/swiper";
import api from '../common/api'
export default {
  data(){
    return{
      djsong:''
    }
  },
  components: {
    swiper
  },
  mounted() {
    this.$http({
      url: api.djprogram,
    })
      .then(res => {
        //console.log(res, "电台");
        this.djsong = res.data.result;
      })
      .catch(err => {
        console.log(err, "电台错误");
      });
  }
};
</script>


<style scoped>
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}

.mod_twocol_list {
  width: 100%;
  padding-top: 0.14rem;
  margin-bottom: 0.07rem;
  padding-left: 0.1rem;
  margin-right: 0.1rem;
  box-sizing: border-box;
}
.mod_twocol_list .list_title {
  font-size: 0.18rem;
  color: #000;
  margin-bottom: 0.11rem;
}
.mod_twocol_list .list_container {
  height: 2.3rem;
  overflow: hidden;

  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.mod_twocol_list .list_container li {
  float: left;
  width: 50%;
  -webkit-box-sizing: border-box;
  padding-right: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}
.mod_twocol_list .list_container li a {
  display: block;
  background: #fff;
}
.mod_twocol_list .list_container li a .list_media {
  width: 1.735rem;
  height: 1.735rem;
  position: relative;
  margin-bottom: 5px;
}
.mod_twocol_list .list_container li a .list_media .video_list__media_img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: 1;
}
.mod_twocol_list .list_container li a .list_media .icon_play {
  height: 0.24rem;
  bottom: 0.05rem;
  right: 0.05rem;
  width: 0.24rem;
  background-position: 0 0;
}
.mod_twocol_list .list_container li a .list_info {
  padding: 0 0.07rem 0.05rem;
  color: #000;
}
.mod_twocol_list .list_container li a .list_info h3 {
  height: 0.36rem;
  line-height: 0.18rem;
  white-space: normal;
  word-wrap: break-word;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  /* 出现省略号 */
  width: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mod_footer {
  padding: 0.15rem 0 0.7rem;
}
.mod_footer .version_tab {
  text-align: center;
  margin-bottom: 16px;
}

.mod_footer .version_tab a {
  position: relative;
  display: inline-block;
  padding: 0 15px;
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  color: #000;
}

.mod_footer .footer_logo {
  display: block;
  width: 82px;
  height: 24px;
  margin: 0 auto 10px;
  background-image: url(../assets/img/logo_footer.png);
  background-repeat: no-repeat;
  background-size: cover;
  text-indent: -9999px;
}

.mod_footer .copyright {
  font-size: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}
</style>
