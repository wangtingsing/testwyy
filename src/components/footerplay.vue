<template>
  <div class="footer-play">
      <div class="footer-center">
            <div class="iconimg"><img :src="iconimgurl" alt=""></div>
            <div class="song-center">
                <div class="song-name">{{songitem.name}}</div>
                <div class="desc">横滑可以切换上下首哦</div>
            </div>
            <div class="toggle-play" @click="togglepause"><span><i class="el-icon-video-play" :class="{'el-icon-video-pause':ispause}"></i></span></div>
            <div class="song-list"><span><i class="iconfont icon-liebiao"></i></span></div>
      </div>
    <div><songaudio :songsrc='surl' :ispause='ispause'></songaudio></div>
  </div>
 
</template>

<script>
import songaudio from '@/components/audio'
import {getdetailmusic,getsongpic} from '@/request/find.js'
import { mapState} from 'vuex'
export default {
  name: 'footerplay',
  data () {
    return {
        surl:'',
        ispause:true,//是否暂停
        al:'',    //对象{歌曲id  name pic}
        songitem:''
    }
  },
  computed:{
      ...mapState({sid:'sid'}),//数组形式怎么不可以 
      iconimgurl(){
          if(this.al.picUrl){
              return this.al.picUrl
          }else{
              return require('@/assets/img/player/png/cover-bg-in.png')
          }
      }
  },
  watch:{
      sid:function(){
          this.getsongmesg(this.sid)
      }
  },
  components:{
      songaudio
  },
  created(){
      this.getsongmesg(this.sid)
  },
  methods:{
      getsongmesg(id){
          getdetailmusic(id).then(res=>{
        //   console.log(res)
          this.surl = res.data.data[0].url
        //   console.log(res.data)
        //   console.log(this.surl)
        })
        getsongpic(id).then(res=>{
            console.log(res.data.songs[0])
            this.songitem = res.data.songs[0];
            this.al = res.data.songs[0].al
        })
  
      },
      togglepause(){
          this.ispause = !this.ispause
          console.log(this.ispause)

      }
  }
}
</script>


<style scoped>
   .iconimg img {
      animation: rotateimg 15s linear infinite
   }
   @keyframes rotateimg {
        0% { transform: rotate(0deg);}
        
        50% { transform: rotate(180deg);}
       
        100% {transform: rotate(360deg);}
    }
   .footer-play{
       position: fixed;
       bottom: 0;
       left: 0;
       height: 50px;
       width: 100%;
       background-color: #fff;
       padding:10px 0;
       box-sizing: border-box;
      
   }
   .footer-center {
       width: 96%;
       margin: 0 auto;
       display: flex;
       /* background-color: rgb(201, 79, 79); */
   }
   .iconimg{
       flex: 0 0 10%;
       padding: 10px o 10px 0;
      
   }
   .iconimg img{
       width: 40px;
       height: 40px;
       border-radius: 50%;

   }
   .song-center{
       flex: 0 0 66%;
      
   }
   .song-center{
       padding-left: 3%;
   }
   .song-center .desc{
       font-size: 10px;
       color:#969292

   }
   .toggle-play i {
       flex: 0 0 12%;
       font-size: 1.5em;
       vertical-align: middle;
   }
   .song-list {
       flex: 0 0 12%;
       text-align: right;
        vertical-align: middle;
   }
</style>