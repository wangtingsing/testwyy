<template>
  <div class="">
      <div class="backcolor"></div>
      <div class="headerc">
          <anttop>
            <div class='serchInput' slot="center"><el-input v-model="keywords" :placeholder="placeholder"  @change="findSeclet"></el-input></div>
            <div class='selectsongers' slot="right"><span><i class="iconfont icon-haoyou"></i></span></div>
          </anttop>
      </div>
      <div class="hotsearch">热搜榜</div>
      <songlistItem :tracks="hotlist">
      </songlistItem>
  </div>
</template>

<script>
import anttop from '@/components/header'
import songlistItem from '@/components/songlistItem'
// import {debounce} from '@/utils/utils.js'
import {searchDefaultKeys,hotlist} from '@/request/find.js'

export default {
  name: 'search',
  data () {
    return {
        keywords:'',
        // timer:null
        tracks:[],
        placeholder:'',
        hotlist:[]
    }
  },
  components:{
     anttop,
     songlistItem
 
  },
  created:function(){
      searchDefaultKeys().then(res=>{
        //   console.log(res)
        this.placeholder = res.data.data.showKeyword
      })
      hotlist().then(res=>{
           console.log(res.data.data)
        this.hotlist = res.data.data
      })

  },
  methods:{
    //   debounce:function(){
    //     //  let timer = null;
    //      if(this.timer){
    //          this.timer=null;
    //     }
    //      this.timer = setTimeout(searchKeys(this.keywords).then(res=>{
    //       console.log(res)},10000)  
    //   )
    //   }
    //        console.log(res))
      findSeclet:function(){
         searchKeys(this.keywords).then(res=>{
             console.log(res)
         })
      },
     
    //   findSeclet:function(){
    //    debounce(searchKeys(this.keywords).then(res=>{
    //        console.log(res)
    //    }),5000) 
     
    //   }  
     }
  
}
</script>


<style scoped>
   .backcolor{
       position: fixed;
       height: 55px;
       width: 100%;
       top: 0;
       left: 0;
       background-color:rgb(218,217,216);
       /* opacity: .1 */
       z-index: -99999;
   }
   .serchInput{
       width:100%;
       position: relative;
       top: -7.5px;
       left:-8%;
      
   }
   .headerc .left{
        padding: 5px 0 0;
       font-size: 1.5em;
   }
   .icon-haoyou{
       font-size: 1.5em;
       color:white;
   }
   .hotsearch{
       margin: 15px;
   }
</style>