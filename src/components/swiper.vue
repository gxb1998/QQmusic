<template>
  <div>
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-if='4>i' v-for="(item,i) in mybanner" :key="i" class="swiper-slide">
          <img :src="item.imageUrl" alt />
        </div>
      </div>
      <!-- 增加页码 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import "../../node_modules/swiper/js/swiper.min.js";
import Swiper from "swiper";
import api from '../common/api';
console.log(api)
export default {
  data() {
    return {
      mybanner: "",
      imgUrl: "",
      
    };
  },
  methods: {
    swiper() {
      let swiper = new Swiper(".swiper-container", {
        loop: true, //循环
        //  autoplay:true
        autoplay: {
          //自动切换
          delay: 2000 //毫秒
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  mounted() {
    this.$http({
      url: api.swpier,
    })
    .then(res => {
        //console.log(res, "我是轮播图");
        this.mybanner = res.data.banners;
        this.$nextTick(() => {
          this.swiper();
          
        });
      })
    .catch(err => {
        console.log(err, "轮播图错误");
      });
   
  }
};
</script>

<style>
@import "../../node_modules/swiper/css/swiper.min.css";
.swiper-container {
  margin-top: 0.02rem;
  width: 100%;
}
.swiper-container img {
  width: 100%;
}
.swiper-container {
  margin-top: 0.02rem;
  width: 100%;
}
.swiper-container img {
  width: 100%;
}
</style>