<template>
  <div>
    <div class="myheder">
      <span class="iconfont icon-xxx"></span>
      <h1 class="header">播放</h1>
    </div>
    <div class="box">
      <div class="titlebox">
        <p class="titlep" style="">{{songName}}</p>
        <p class="titlep" style="fontSize:.18rem">{{songer}}</p>
      </div>
      <div class="imgbox"><img class="imgclass" src="../../static/pkq.jpg" alt=""></div>
    </div>
      <div class="palybox">
        <div class="sbox"><audio :src="musicUrl" style="width:100%;" autoplay controls></audio></div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      musicUrl: "",
      songName:this.$store.state.songName,
      songer:this.$store.state.songer
    };
  },
  mounted() {
    // this.Event.$on('aa',(d)=>{
    //   console.log(d);
    // })
    console.log(this.$store.state)
    this.$http({
      url: "http://localhost:3000/song/url",
      params: {
        id: this.$route.query.id,
        // name : this.$route.query.name
      }
    })
      .then(res => {
        //console.log(res, "音乐url");
        this.musicUrl = res.data.data[0].url;
        //console.log(this.musicUrl)
      })
      .catch(err => {
        console.log(err, "音乐url错误");
      });
  }
};
</script>
<style scoped>
body{
  background: #22d59c;
}
.myheder{
  width: 100%;
  height: .6rem;
  background: #22d59c;
}
.header{
  width: 2rem;
  height: .6rem;
  text-align: center;
  line-height: .6rem;
  font-size: .2rem;
  margin: 0 auto;
  color: #fefefe;
}
.box{
  width: 100%;
  font-family: 'Courier New', Courier, monospace
}
.titlebox{
  width: 100%;
  margin: 0 auto;
  font-size: .15rem;
  line-height: .4rem;
  margin-top: .4rem;
}
.titlep{
  height: .4rem;
  line-height: .4rem;
  text-align: center;
}
.imgbox{
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  margin-top: .6rem;
}
.imgclass{
  width: 2rem;
}
.palybox{
  width: 100%;
  
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  background: #22d59c;
}
.sbox{
  width: 3rem;
  margin: 0 auto;

}
</style>