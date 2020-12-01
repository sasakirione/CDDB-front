<template>
  <div id="overlay">
  <div class="col-lg-4 col-sm-6">
    <perfect-scrollbar>
    <div id="content" class="card border-info">
      <h2 class="card-title">{{ album.Title }}</h2>
      <ul class="list-group list-group-flush" v-for="song2 in album.Song" :key="song2.Title">
        <li class="list-group-item">Disc/No/曲名：{{ song2.Disc }}.{{ song2.No }}.{{ song2.Title }}</li>
        <li class="list-group-item">アーティスト名：{{ song2.Artist }}</li>
      </ul>
      <button @click="$emit('close')">閉じる</button>
    </div>
    </perfect-scrollbar>
  </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

export default {
  name: "Songlist",
  props: ['album'],
  components: {
    PerfectScrollbar
  }
}
</script>

<style scoped>
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:100%;
  padding-top: 1em;
  padding-bottom: 5em;
  text-align: center;
}

.ps {
  height: 600px;
}

</style>