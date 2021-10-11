<template>
 <div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">ようこそOctopusCDDBへ</h1>
    </div>
  </div>
   <div>
     <div class="container">
       <div class="row">
         <UpdatedHistory></UpdatedHistory>
         <Usage></Usage>
         <div class="card border-info col-lg-4 col-sm-6">
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
import UpdatedHistory from "@/components/UpdatedHistory";
import Usage from "@/components/Usage";

export default {
  name: 'Top',
  components: {Usage, UpdatedHistory},
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
