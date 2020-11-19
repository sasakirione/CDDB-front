<template>
  <div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">楽曲の検索</h1>
      <p class="lead">Search for song</p>
    </div>
  </div>
    <br>
    <br>
  <div>
    <div class="container">
      <form class="form-inline mx-auto" style="width: 500px;">
        <div class="form-group">
        <select class="form-control" v-model="type">
          <option>曲名から(完全一致)</option>
          <option>曲名から(前方一致)</option>
          <option>アーティスト名から(未実装)</option>
        </select>
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
        <button class="btn btn-outline-success" type="submit" v-on:click="Search()">Search</button>
        </div>
      </form>
      <div><br><br></div>
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
                <li class="list-group-item">作詞：{{ item.Word }}</li>
                <li class="list-group-item">作曲：{{ item.Composer }}</li>
                <li class="list-group-item">編曲：{{ item.Arranger }}</li>
                <li class="list-group-item">作品：{{ item.TieUp}}</li>
                <li class="list-group-item">ブランド：{{ item.Brand }}</li>
                <li class="list-group-item">ジャンル： {{ item.Genre }}</li>
              </ul>
              <!--<button class="btn btn-outline-info">編集</button>-->
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
  name: "song",
  data: function () {
    return{
      type: "曲名から(完全一致)",
      keyword: "",
      items: [],
      list: []
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
    var res = null
    if (type=="曲名から(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default//SongGetSolo?title='+keyword)
    }else if (type=="曲名から(前方一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet?title=' + keyword + '&type=song')
    }
    console.log(res.data.Items)
    return res.data.Items
  }
}
</script>

<style scoped>

</style>