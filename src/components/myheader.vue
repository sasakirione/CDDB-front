<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">OtakuCDDB</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="text-white px-3" to="/">home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-white px-3" to="/album">Album</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-white px-3" to="/song">Song</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-white px-3" to="/info">Info</router-link>
          </li>
        </ul>
        <!--<form class="form-inline my-2 my-lg-0">
          <select class="form-control" v-model="type">
            <option>曲名</option>
            <option>アルバム名</option>
          </select>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="現在使用できません" v-model="keyword">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="Search()">Search</button>
        </form>
        -->
      </div>
    </nav>
</template>

<script>
import axios from 'axios';

export default {
  name: "myheader",
  date: function () {
    return{
      type: '曲名',
      keyword: ''
    }
  },
  methods: {
    Search: function (){
      search2.get(this.type, this.keyword)
    }
  }
}

let search2 = {
  get: async function (type, keyword){
    const res = await axios.get('https://heovri3328.execute-api.ap-northeast-1.amazonaws.com/default//SongGetSolo?title='+keyword)
    const items = res.data.Items[0].Composer
    window.alert(items)
  }
}

</script>

<style scoped>

</style>