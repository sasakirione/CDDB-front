<template>
  <div id="overlay">
    <div id="content" class="card border-info">
      <h2 class="card-titlet">{{ album.Title }}</h2>
      <ul class="list-group list-group-flush" v-for="song2 in album.Song" :key="song2.Title">
        <li class="list-group-item">Disc/No/曲名：{{ song2.Disc }}.{{ song2.No }}.{{ song2.Title }}</li>
        <li class="list-group-item">アーティスト名：{{ song2.Artist }}</li>
      </ul>
      <button @click="$emit('close')">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Songlist",
  props: ['album']
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
  width:50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}

</style>