//第一步 引入核心库
import Vue from 'vue'
//第二步 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA = {
    state:{
        str:'我是模块A的状态'
    },
    mutations:{},
    actions:{},
    getters:{},
    modules:{}
}

const Store = new Vuex.Store({
    state:{
        songName:'',
        songer:''
    },
    mutations:{
        addNum(a,x){
            a.songName = x.songname;
            a.songer = x.songer
            //console.log( this.songName,this.songer)
        }
    },

})

export default Store