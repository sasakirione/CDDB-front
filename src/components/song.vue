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
          <label>
            <select class="form-control" v-model="type">
              <option>曲名から(完全一致)</option>
              <option>曲名から(前方一致)</option>
              <option>アーティスト名から</option>
              <option>作詞家から(完全一致)</option>
              <option>作曲家から(完全一致)</option>
              <option>編曲家から(完全一致)</option>
              <option>ボーカルから(完全一致)</option>
            </select>
          </label>
          <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
        <button class="btn btn-outline-success" type="submit" v-on:click="Search()">Search</button>
        </div>
      </form><br>
      <transition>
      <div v-show="restf"> {{ resl }} 件ヒットしました </div><br>
      </transition>
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
                <li class="list-group-item">ボーカル： {{ item.Vocal.join('、') }}</li>
                <li class="list-group-item">作詞：{{ item.Word.join('、') }}</li>
                <li class="list-group-item">作曲：{{ item.Composer.join('、') }}</li>
                <li class="list-group-item">編曲：{{ item.Arranger.join('、') }}</li>
                <li class="list-group-item">作品：{{ item.TieUp[0] }}</li>
                <li class="list-group-item">ブランド：{{ item.Brand[0] }}</li>
                <li class="list-group-item">ジャンル： {{ item.Genre.join('、') }}</li>
              </ul>
              <!--<button class="btn btn-outline-info">編集</button>-->
            </div>
          </div>
        </transition-group>
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
      list: [],
      restf: false,
      resl: null
    }
  },
  methods: {
    Search: async function (){
      this.items = []
      this.items = await search2.get(this.type, this.keyword)
      this.restf = true
      this.resl = this.items.length
    }
  }
}

let search2 = {
  get: async function (type, keyword){
    let res = null
    if (type==="曲名から(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default//SongGetSolo?title='+keyword)
    }else if (type==="曲名から(前方一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet?title=' + keyword + '&type=song')
    }else if (type==="作詞家から(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet2?type=Word&value=' + keyword )
    }else if (type==="作曲家から(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet2?type=Composer&value=' + keyword )
    }else if (type==="編曲家から(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet2?type=Arranger&value=' + keyword )
    }else if (type==="ボーカルから(完全一致)") {
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet2?type=Vocal&value=' + keyword )
    }else if (type==="アーティスト名から"){
      res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default/FrontCustomGet2?type=Artist&value=' + keyword )
    }
    console.log(res.data.Items)
    return res.data.Items
  }
}
</script>

<style scoped>
.v-enter-active{
  transition: opacity 1s;
}
.v-enter, .v-leave-to{
  opacity: 0;
}
.v-move{
  transition: transform 1s;
}
</style>