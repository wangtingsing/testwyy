



import Vue from "vue"

import Vuex from "vuex"
 
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        // 顶部导航显示否
        topisshow: false,
        // 底部播放组件显示否
        isfooterplay:false,
        // 歌曲id
        sid:'',
        sindex:0// 歌曲的序号（数组中）
    },
    getters:{

    },
    mutations:{
        toggletopT(state){
            state.topisshow = true
        },
        toggletopF(state){
            state.topisshow = false
        },
        togglefooter(state,sid){
            console.log('-----------------vuex-------------')
            console.log(sid)
            state.isfooterplay = true
            state.sid = sid
        },
        updateIndex(state,index){
            state.sindex = index;
            console.log(state.sindex)
        },
        
        

    },
    actions:{

    },
    modules:{
        
    }
})
export default store