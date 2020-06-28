<template>
    <div class="songlist-content">
              <ul>
                  <li v-for="(item,index) in tracks" :key=index @click="goplay(item.id,index)">
                      <div class="songindex">{{index+1}}</div>
                      <div class="songname">
                          
                          <div class="play-name" v-if="item.name">{{item.name}}</div>
                          <div class="play-name" v-else>
                            <span>{{item.searchWord}}</span>
                            <span v-if="item.iconUrl" class="song-icon"><img :src="item.iconUrl" alt=""></span>
                          </div>

                          <div class="songer" v-if="item.ar">{{item.ar[0].name}} - {{item.al.name}}</div>
                          <div class="songer" v-else>{{item.content}}</div>

                      </div>
                      <div class="more" v-if="!item.score"><span><i class="iconfont icon-diandiandian"></i></span></div>
                      <div class="more hotscore" v-else>{{item.score}}</div>
                  </li>
              </ul>
        </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: 'songlistItem',
  data () {
    return {
     
    }
  },
  props:{
    tracks: {
      type: Array,
      default: ()=>[]
    }
  },
   computed:{
    ...mapState({sindex:'sindex'})//数组形式怎么不可以 
  },
  watch:{
      sindex:function(){
          console.log('-------====++++')
          console.log(this.sindex)
       
            if(this.sindex>this.tracks.length){
            this.sindex=0
            }
          this.goplay(this.tracks[this.sindex].id,this.sindex)     
      }
         
  },
  
    methods:{
         goplay: function(songid,index){
            console.log('================songlusy==========================')
            console.log(songid)
            // togglefooter事件  显示底部播放组件
           this.$store.commit('togglefooter',songid);
           this.$store.commit('updateIndex',index);

       } 
    }  
}
</script>


<style scoped>
  .songlist-content ul{
       width:90%;
       margin-left: 5%;
       margin-bottom: 40px;
       
       
       
   }
   .songlist-content ul li{
       width:100%;
       height: 55px;
       display: flex;
       /* justify-content: space-between; */

   }
   .songlist-content .songindex {
       text-align: left;
       flex: 0 0 10%;
       color: #969292;
       
   }
   .songlist-content .songname {
        flex: 0 0 75%;
   }  
   .songlist-content .more {
       text-align: right;
       flex: 0 0 15%;
       color: #969292;
      
   }
   .songlist-content .songname .play-name{
       font-size: 16px;
   }
   .songlist-content .songname .songer{
       font-size: 8px;
       color:#969292;
      
   }
   .hotscore{
       font-size: 10px;
   }
   .song-icon{
       height: 16px;
       width: 32px;
   }
   .song-icon img{
       width: 32px;
       height: 16px;
   }

</style>