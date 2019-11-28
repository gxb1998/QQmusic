<template>
  <div>
    <div class="search_box" style>
      <div class="mod_search_bar">
        <div class="search_bar_cont">
          <form method="get" action="#">
            <input
              v-model="val"
              @keydown.enter="goSearch()"
              @focus="chang()"
              class="search_input"
              type="search"
              autocomplete="off"
              autocorrect="off"
              placeholder="搜索歌曲、歌单、专辑"
              style="-webkit-appearance: textfield;"
            />
          </form>
        </div>
        <div @click="disappear()" class="search_bar_tip_text" v-show="flg">取消</div>
      </div>
      <div >
        <div id="js_hot_keys" class="mod_search_result" v-show="!flg">
          <h3 class="result_tit" style>热门搜索</h3>
          <div class="result_tags">
            <a @click="search(item.first)" v-for="(item,i) in songItem" :key='i'  :class="[ i == 0 ? class1 : class2]">
              {{item.first}}
            </a>
           
          </div>
        </div>
      </div>

      <s-detail v-if="listshow" :msg='searchSong'></s-detail>

      <div class="mod_search_content" style="display: none;">
        <ul class="search_content"></ul>
        <p class="load_complete" style="display: none;">点击获取更多搜索结果</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../common/api'
import sDetail from './sDetail'
import search from '../common/api'
export default {
  data() {
    return {
      val:'',
      class1:'tag_s tag_hot',
      class2:'tag_s',
      flg: false,
      songItem:'',
      listshow:false,
      searchSong:'',
      
    };
  },
  components:{
    sDetail
  },
  methods: {
    goSearch(){
      this.$http({
        url:api.search,
        params:{
          keywords:this.val
        }
      })
      .then(res=>{
        //console.log(res,'搜索栏')
        this.searchSong = res.data.result.songs
        
        this.listshow = true
      })
      .catch(err=>{
        console.log(err,'搜索失败')
      })
    },
    search(name){

      this.$http({
        url:api.search,
        params:{
          keywords:name
        }
      })
      .then(res=>{
        //console.log(res.data.result.songs,'搜索栏')
        this.searchSong = res.data.result.songs
        this.val=name
        this.flg = !this.flg;
        this.listshow = true
      })
      .catch(err=>{
        console.log(err,'搜索失败')
      })
    },
    chang() {
      this.flg = true;
      this.val = ''
    },
    disappear() {
      this.val = ''
      this.flg = false;
      this.listshow = false;
      
    }
  },
  mounted(){
    this.$http({
      url: api.hot,
    })
    .then(res=>{
      //console.log(res,'搜索信息')
      this.songItem=res.data.result.hots
    })
    .catch(err=>{
      console.log(err,'搜索错误')
    })
  }
};
</script>

<style scoped>

.search_box .mod_search_bar {
  background: #f4f4f4;
  padding: 0.1rem;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
}
.search_box .mod_search_bar .search_bar_cont {
  position: relative;
  border-radius: 0.03rem;
  background: #fff;
  height: 0.2rem;
  padding: 0.08rem 0.12rem 0.08rem 0.35rem;
  -webkit-box-flex: 1;
}
.search_box .mod_search_bar .search_bar_cont .search_input {
  width: 100%;
  height: 0.2rem;
  line-height: 0.2rem;
  color: rgba(0, 0, 0, 0.3);
  border: none;
  -webkit-appearance: none;
  font-size: 0.14rem;
}
.search_box .mod_search_bar .search_bar_tip_text {
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  height: 36px;
  line-height: 36px;
}
.search_box .mod_search_result {
  background: #fff;
  padding: 0.15rem 0.15rem 0.1rem 0.15rem;
}
.search_box .mod_search_result .result_tit {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.08rem;
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.search_box .mod_search_result .result_tags {
  font-size: 0;
}
.search_box .mod_search_result .result_tags .tag_s {
  display: inline-block;
  font-size: 14px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #00000099;
  border-radius: 99px;
  word-break: keep-all;
  margin-bottom: 10px;
  margin-right: 14px;
}
.search_box .mod_search_result .result_tags .tag_hot {
  color: #fc4524;
  border: 1px solid #fc4524;
}
</style>