<template>
  <div class="song-audio" :data-test='ispause'>
    <audio :src="songsrc" controls="controls"  id="player" ref="audioitem" autoplay='autoplay' @ended="ended">
      <!--（1）属性：controls，preload（2）事件：canplay，timeupdate，ended（3）方法：play()，pause() -->
      <!--controls：向用户显示音频控件（播放/暂停/进度条/音量）-->
      <!--preload：属性规定是否在页面加载后载入音频-->
      <!--canplay：当音频/视频处于加载过程中时，会发生的事件-->
      <!--timeupdate：当目前的播放位置已更改时-->
      <!--ended：当目前的播放列表已结束时-->
    </audio>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: 'song-audio',
  data(){
      return{

      }
  },
  computed:{
    ...mapState({sindex:'sindex'}),//数组形式怎么不可以 
  },
  props:{
      songsrc:String,
      ispause:Boolean
  },
  created(){
    
  },
  mounted(){
      
  },
  watch:{
      ispause:function(){
          let player = this.$refs.audioitem
          if(!this.ispause){
              player.pause()
          }else{
              player.play()
          }
      }
  },
  
  
  methods: {
      ended(){
          console.log('--------------------------------------------')
          console.log()
          console.log('===========================')
          //播放结束 触发下一首
          this.$store.commit('updateIndex',this.sindex+1);
      }
      

  }
    
}
</script>

<style>
  #player {
    display: none;
  }

</style>
