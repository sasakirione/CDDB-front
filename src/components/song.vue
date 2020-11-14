<template>
  <div>
  <div class="jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">楽曲の検索</h1>
      <p class="lead">Search for song</p>
    </div>
  </div>
  <div>
    <div class="container mx-auto">
      <form class="form-inline mx-auto">
        <select class="form-control" v-model="type">
          <option>曲名から</option>
          <option>アーティスト名から(未実装)</option>
        </select>
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
        <button class="btn btn-outline-success" type="submit" v-on:click="Search()">Search</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "song"
}
</script>

<style scoped>

</style>