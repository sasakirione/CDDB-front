<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">アルバムの検索</h1>
        <p class="lead">Search for album</p>
      </div>
    </div>
    <br>
    <br>
    <div>
      <div class="container">
        <form class="form-inline mx-auto" style="width: 500px;">
          <div class="form-group">
            <select class="form-control" v-model="type">
              <option>アルバム名から(完全一致)</option>
              <option>アルバム名から(前方一致)</option>
              <option>アーティスト名から(未実装)</option>
            </select>
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
            <button class="btn btn-outline-success" type="submit" v-on:click="Search()">Search</button>
          </div>
        </form><br>
        <div v-show="restf"> 検索結果がありません。 </div><br>
      </div>
    </div>
    <div><hr></div>
    <div>
      <div class="container">
        <div class="row">
          <div class="card border-info col-sm-4" v-for="item in items" :key="item.Artist">
            <div class="card-body">
              <h2 class="card-title">{{ item.Title }}</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">アーティスト名：{{ item.Artist }}</li>
                <li class="list-group-item">発売日：{{ item.Date }}</li>
                <li class="list-group-item">レーベル：{{ item.Lebel }}</li>
                <li class="list-group-item">発売元：{{ item.Publisher }}</li>
              </ul>
              <!--<button class="btn btn-outline-info">編集</button>-->
              <button class="btn btn-outline-info" v-on:click="openSonglist(item)">楽曲一覧</button>
              <Songlist :album="postItem" v-show="SonglistActive" @close="closeSonglist" />
            </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Songlist from './Songlist.vue'

export default {
  name: "album",
  components: {
    Songlist
  },
  data: function () {
    return{
      type: "アルバム名から(完全一致)",
      keyword: "",
      items: [],
      item: null,
      SonglistActive: false,
      postItem: null,
      restf: false
    }
  },
  methods: {
    Search: async function (){
      this.items = await search2.get(this.type, this.keyword)
      try {
        console.log(this.items[0].Artist)
        this.restf = false
      } catch(error) {
        console.log("Error")
        this.restf = true
      }
    },
    openSonglist(album) {
      this.SonglistActive = true
      this.postItem = album
    },
    closeSonglist (){
      this.SonglistActive = false
    }
  }
}

let search2 = {
  get: async function (type, keyword){
    var res = null
    if (type=="アルバム名から(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/AlbumGetSolo?title=' + keyword)
    }else if (type=="アルバム名から(前方一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet?title=' + keyword + '&type=album')
    }

    return res.data.Items
  }
}

</script>

<style scoped>
#songlist{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}

</style>