<template>
    <div>
<mt-swipe :auto="4000">
  <mt-swipe-item > <img src="./img/1.png" alt=""></mt-swipe-item>
  <mt-swipe-item> <img src="./img/2.png" alt=""></mt-swipe-item>
  <mt-swipe-item> <img src="./img/3.png" alt=""></mt-swipe-item>
</mt-swipe>


<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="./img/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="./img/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="./img/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="./img/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./img/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                     <img src="./img/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		         
		        </ul> 


</div>
</template>


<script>
// import {Toast} from 'mint-ui'
// export default {
//   data() {
//     return {
//       lunbotuList: []
//     };
//   },
//   created(){
//       this,getLunbotu();
//   },
//   methods: {
//     getLunbotu() {
//       this.$http.get("http://vue.study.io/api/getLunbo").then(result => {
//         //console.log(result.body);
//         if(result.body.status ===0){Toast("获取轮播图加载失败"),
// this.lunbotuList = result.body.message;
//         }else{
// Toast("获取轮播图加载失败")
//         }
//       });
//     }
//   }
// };
</script>
<style lang="scss" scoped>


.mint-swipe {
  height: 200px;
  //   .mint-swipe-item{
  //       &:nth-child()
  //   }
  img {
  height: 100%;
  width: 100%;
  }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: #fff;
  img{
 width: 60px;
 height: 60px;
  }
}
</style>
