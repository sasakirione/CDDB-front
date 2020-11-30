<template>
  <div id="overlay">
      <div id="content" class="card border-info col-lg-4 col-sm-6">
        <h2 class="card-title">{{ album.Title }}</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">アーティスト名：{{album.Artist}}</li>
          <li class="list-group-item">発売日：{{album.Date}}</li>
          <li class="list-group-item">レーベル：{{album.Label}}
            <input class="form-control" type="label" placeholder="レーベルを入力" aria-label="label" v-model="Label">
          </li>
          <li class="list-group-item">発売元：{{album.Publisher}}
            <input class="form-control" type="pub" placeholder="発売元を入力" aria-label="pub" v-model="Publisher">
          </li>
        </ul>
        <button class="btn btn-outline-info" @click="send()">更新する</button>
        <button class="btn btn-outline-info" @click="$emit('close')">閉じる</button>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AlbumEdit",
  props: ['album'],
  data: function (){
    return {
      EditData: {
        title: "",
        artist: "",
        date: "",
        label: "",
        publisher: "",
        song: [],
        totaldisc: "",
        albumid: []
      },
      Label:"",
      Publisher:""
    }
  },
  components: {
  },
  methods:{
    send(){
      this.EditData.title = this.album.Title
      this.EditData.artist = this.album.Artist
      this.EditData.date = this.album.Date
      this.EditData.song = this.album.Song
      this.EditData.totaldisc = this.album.TotalDisc
      this.EditData.albumid = this.album.AlbumId
      this.EditData.label = this.Label
      this.EditData.publisher = this.Publisher
      console.log(this.EditData)
      axios.post('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/AlbumPut', this.EditData)
          .then(function (response) {
            console.log(response);
          })
    }
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

</style>