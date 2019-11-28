<template>
  <div>
    <div class="wrap">
      <header class="top_box">
        <div class="top_box__bd">
          <img
            class="logo"
            src="https://y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000"
            alt="QQ音乐"
          />
          <a class="top_box__btn" href="javascript:;">下载APP</a>
        </div>
      </header>

      <nav class="mod_nav">
        <router-link to="/recommend" active-class="current">推荐</router-link>
        <router-link to="/rank" active-class="current">排行榜</router-link>
        <router-link to="/search" active-class="current">搜索</router-link>
      </nav>

      <section class="bottom_bar">
        <a href="javascript:;" class="bottom_bar__action">安装QQ音乐 发现更多精彩</a>
      </section>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top_box {
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: .8rem;
}
.top_box .top_box__bd {
  box-shadow: 0 5px 5px rgba(0,0,0,.02);
  position: fixed;
  top: 0rem;
  right: 0rem;
  left: 0rem;
  padding-top: .8rem;
  background: #fff;
  height: .8rem;
  padding: .25rem .1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.top_box .top_box__bd .logo {
  display: block;

  height: .37rem;
}
.top_box .top_box__bd .top_box__btn {
  margin-right: .1rem;
  margin-top: .05rem;
  display: block;
  width: .55rem;
  height: .25rem;
  line-height: .25rem;
  padding: 0 .1rem;
  text-align: center;
  font-size: .14rem;
  color: #000;
  border: solid 0.01rem rgba(0, 0, 0, 0.3);
  border-radius: .25rem;
}
.mod_nav {
  margin-top: .8rem;
  background: #fff;

  height: .4rem;
  display: flex;
  justify-content: space-around;
}
.mod_nav a {
  position: relative;
  display: block;
  width: 1.25rem;
  height: .4rem;
  line-height: .4rem;
  overflow: hidden;
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
}
.mod_nav .current {
  color: #31c27c;
  border-bottom: .02rem solid #31c27c;
}
.bottom_bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 110;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  padding: 15px 0;
}
.bottom_bar a {
  display: block;
  padding: 0 15px;
  border-radius: 99px;
  background-color: #30c27c;
  color: #fff;
  height: 33px;
  line-height: 33px;
  font-size: 14px;
}

</style>
