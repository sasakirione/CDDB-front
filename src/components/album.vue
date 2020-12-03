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
            <label>
              <select class="form-control" v-model="type">
                <option>アルバム名から(完全一致)</option>
                <option>アルバム名から(前方一致)</option>
                <option>アーティスト名から(未実装)</option>
              </select>
            </label>
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
            <button class="btn btn-outline-success" type="submit" v-on:click="Search()">Search</button>
          </div>
        </form><br>
        <transition>
        <div v-show="restf"> {{ resl }} 件ヒットしました </div>
        </transition><br>
      </div>
    </div>
    <div><hr></div>
    <div>
      <div class="container">
        <transition-group class="row">
          <div class="card border-info col-lg-4 col-sm-6" v-for="item in items" :key="item.Artist+item.Title">
            <div class="card-body">
              <h2 class="card-title">{{ item.Title }}</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">アーティスト名：{{ item.Artist }}</li>
                <li class="list-group-item">発売日：{{ item.Date }}</li>
                <li class="list-group-item">レーベル：{{ item.Label }}</li>
                <li class="list-group-item">発売元：{{ item.Publisher }}</li>
              </ul>
              <button class="btn btn-outline-info" v-on:click="openAlbumEdit(item)">編集</button>
              <AlbumEdit :album="editItem" v-show="albumEdit" @close="closeAlbumEdit"/>
              <button class="btn btn-outline-info" v-on:click="openSonglist(item)">楽曲一覧</button>
              <Songlist :album="postItem" v-show="SonglistActive" @close="closeSonglist" />
            </div>
            </div>
          </transition-group>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import Songlist from './Songlist.vue'
import AlbumEdit from './AlbumEdit.vue'

export default {
  name: "album",
  components: {
    Songlist,
    AlbumEdit
  },
  data: function () {
    return{
      type: "アルバム名から(完全一致)",
      keyword: "",
      items: [],
      item: null,
      SonglistActive: false,
      albumEdit:false,
      editItem:null,
      postItem: null,
      restf: false,
      resl : null
    }
  },
  methods: {
    Search: async function (){
      this.items = await search2.get(this.type, this.keyword)
      this.restf = true
      this.resl = this.items.length
    },
    openSonglist(album) {
      this.SonglistActive = true
      this.postItem = album
    },
    closeSonglist (){
      this.SonglistActive = false
    },
    openAlbumEdit(album){
      this.albumEdit = true
      this.editItem = album
    },
    closeAlbumEdit(){
      this.albumEdit = false
    }
  }
}

let search2 = {
  get: async function (type, keyword){
    let res = null
    if (type==="アルバム名から(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/AlbumGetSolo?title=' + keyword)
    }else if (type==="アルバム名から(前方一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet?title=' + keyword + '&type=album')
    }

    return res.data.Items
  }
}

</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to{
  opacity: 0;
}
</style>