<template>
  <div>
    <div class="mod_topic">
      <ul>
        <li class="topic_item" v-if='i<4' v-for="(item,i) in songList" :key="item.id">
          <div class="topic_main">
            <a href="javascript:;" class="topic_media">
              <img :src="item.coverImgUrl" />
              <span class="listen_count">
                <i class="icon icon_listen"></i>
                1960.0万
              </span>
            </a>
            <div class="topic_info">
              <div class="topic_cont">
                <h3 class="topic_tit">{{item.name}}</h3>

                <li v-for="(list,i) in item.tracks" :key="i">
                  <p>
                    {{i+1}}
                    <span class="text_name">{{list.first}}</span>
                    - {{list.second}}
                  </p>
                 
                </li>
              </div>
              <i class="topic_arrow"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../common/api'
export default {
  data() {
    return {
      songList: [
      ]
    };
  },
  mounted(){
    this.$http({
      url: api.detail,
    })
    .then(res=>{
      console.log(res,'推荐列表信息')
      this.songList=res.data.list
    })
    .catch(err=>{
      console.log(err,'列表错误')
    })
  }
};
</script>

<style scoped>
.mod_topic {
  margin: 0.1rem;
  padding-bottom: 0.55rem;
  background: #fff;
}
.mod_topic ul li {
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.mod_topic ul li .topic_main {
  display: -webkit-box;
  background: #fff;
}
.mod_topic ul li .topic_main .topic_media {
  position: relative;
  width: 1rem;
  height: 1rem;
  display: block;
}
.mod_topic ul li .topic_main .topic_media img {
  display: block;
  width: 1rem;
  height: 1rem;
}
.mod_topic ul li .topic_main .topic_media span {
  left: .05rem;
  bottom: .07rem;
  line-height: .12rem;
  color: #fff;
  opacity: 0.6;
  font-size: .09rem;
  z-index: 10;
}
.mod_topic ul li .topic_main .topic_info {
  position: relative;
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
}
.mod_topic ul li .topic_main .topic_info .topic_cont {
  -webkit-box-flex: 1;
  margin: 0 .1rem 0 .15rem;
}
.mod_topic ul li .topic_main .topic_info .topic_cont h3 {
  font-size: .16rem;
  color: #000;
  font-weight: 400;
  margin-bottom: .05rem;
}
.mod_topic ul li .topic_main .topic_info .topic_cont p {
  font-size: .14rem;
  color: rgba(0, 0, 0, 0.5);
}
.mod_topic ul li .topic_main .topic_info .topic_cont p span {
  color: #000;
  margin-left: .08em;
  margin-right: .05rem;
}
</style>