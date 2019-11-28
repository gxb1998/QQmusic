<template>
  <div>
    <ul class="mui_cell_list">
      <li class="mui_cell_list__item" @click="playMusic(item.id,i)" v-for="(item,i) in msg" :key="i">
        <div class="mui_cell_list__box">
          <div class="mui_cell_list__bd">
            <h3 class="mui_cell_list__tit c_txt1">{{item.name}}</h3>
            <p class="mui_cell_list__desc c_txt2">
              <span
                class="mui_cell_list__txt"
                v-for="(list,index) in item.artists"
                :key="index"
              >{{list.name}}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    playMusic(id,i) {
      this.$store.commit('addNum',{
        songname:this.msg[i].name,
        songer:this.msg[i].artists[0].name
      })
      this.$router.push({
          path:'/play',
          query:{
              id,
          }
      });
      
    }
  },
  props: ["msg"],
};
</script>
<style scoped>
.mui_cell_list {
  width: 100%;
  display: block;
  margin-top: 0.16rem;
}
.mui_cell_list__item {
  position: relative;
  margin-bottom: 0.16rem;
  padding: 0 0.16rem;
}
.mui_cell_list__box {
  display: -webkit-box;
  -webkit-box-align: center;
  min-height: 0.42rem;
}
.mui_cell_list__bd {
  -webkit-box-flex: 1;
}
.c_txt1 {
  color: rgba(26, 26, 26, 1);
}
.mui_cell_list__tit {
  line-height: 0.2rem;
  font-size: 0.16rem;
  font-weight: 400;
}
.mui_cell_list__desc,
.mui_cell_list__tit {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.c_txt2 {
  color: rgba(26, 26, 26, 0.5);
}
.mui_cell_list__desc {
  margin-top: 0.06rem;
  line-height: 0.16rem;
  font-weight: 300;
}
.mui_cell_list__txt {
  margin-right: 0.08rem;
}
.c_txt2 {
  color: rgba(26, 26, 26, 0.5);
}
/* .search_result{
    
}
.mui_cell_list {
    overflow: hidden;
}

*/
</style>