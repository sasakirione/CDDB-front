<template>
 <div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">ようこそOtakuCDDB(仮)へ</h1>
    </div>
  </div>
   <div>
     <div class="container">
       <div class="row">
         <div class="card border-info col-sm-4">
           <div class="card-body">
             <h2 class="card-title">更新情報</h2>
             <ul class="list-group list-group-flush text-left">
               <li class="list-group-item">・2020/11/18 Webサイトオープン</li>
               <li class="list-group-item">・</li>
               <li class="list-group-item">・</li>
               <li class="list-group-item">・</li>
               <li class="list-group-item">・</li>
               <li class="list-group-item">・</li>
               <li class="list-group-item">・</li>
               <li class="list-group-item">・</li>
             </ul>
           </div>
         </div>
         <div class="card border-info col-sm-4">
           <div class="card-body">
             <h2 class="card-title">使い方</h2>
             <ul class="list-group list-group-flush text-left">
               <li class="list-group-item">・検索したい内容を選ぼう</li>
               <li class="list-group-item">・SongかAlbumをクリックしよう</li>
               <li class="list-group-item">・検索しよう</li>
             </ul>
           </div>
         </div>
         <div class="card border-info col-sm-4">
           <div class="card-body">
             <h2 class="card-title">広告</h2>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.jumbotron {
  background:url(../assets/main.jpg)
  center no-repeat;
  background-size: cover;
  color: inherit;
}
.jumbotron h1,
.jumbotron .h1 {
  color: whitesmoke;
  text-shadow    :
      2px  2px 1px #003366,
      -2px  2px 1px #003366,
      2px -2px 1px #003366,
      -2px -2px 1px #003366,
      2px  0px 1px #003366,
      0px  2px 1px #003366,
      -2px  0px 1px #003366,
      0px -2px 1px #003366;
}
</style>
