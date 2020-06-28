<template>
  <div id="app">
    <topnav v-if="!$store.state.topisshow"></topnav>
    <router-view/>
    <footerplay class="footer-play" v-if="$store.state.isfooterplay"></footerplay>
  </div>
</template>



<script>

import topnav from '@/components/topnav.vue'
// 底部播放组件
import footerplay from '@/components/footerplay'
export default {
  name: 'App',
   data () {
    return {
     
    }
  },
  components:{
    topnav,
    footerplay

  },
  created: function(){
   
  },
  methods:{
   
  }
  
}
</script>

<style>
/* @import 'assets/css/coverelement.css'; */
</style>
