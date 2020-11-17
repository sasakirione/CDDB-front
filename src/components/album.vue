<template>
  <div>
    <div class="jumbotron-fluid">
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
              <option>アルバム名から</option>
              <option>アーティスト名から(未実装)</option>
            </select>
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
            <button class="btn btn-outline-success" type="submit" v-on:click="Search()">Search</button>
          </div>
        </form>
        <div><br>検索は完全一致です<br></div>
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
              <button class="btn btn-outline-info">編集</button>
              <button class="btn btn-outline-info">楽曲一覧</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "album",
  data: function () {
    return{
      type: "アルバム名から",
      keyword: "",
      items: []
    }
  },
  methods: {
    Search: async function (){
      this.items = await search2.get(this.type, this.keyword)
      console.log(this.items)
    }
  }
}

let search2 = {
  get: async function (type, keyword){
    const res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/AlbumGetSolo?title='+keyword)
    console.log(res.data.Items)
    return res.data.Items
  }
}

</script>

<style scoped>

</style>