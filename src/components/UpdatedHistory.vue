<template>
  <div class="card border-info col-lg-4 col-sm-6">
    <div class="card-body">
      <h2 class="card-title">更新情報</h2>
      <ul class="list-group list-group-flush text-left">
        <li class="list-group-item" v-for="value in make_under_latest_five" :key="value">・{{ value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatedHistory",
  data: function () {
    return{
      info: [
        "2020/11/18 Webサイトオープン",
        "2020/11/19 前方一致検索に対応",
        "2020/11/21 楽曲の検索方式を追加",
        "2020/11/30 アルバム情報の編集機能を追加",
        "2021/10/00 細かいところをいろいろと修正",
        "2021/10/40 APIの一新"
      ]
    }
  },
  computed: {
    make_under_latest_five: function () {
      return this.info.slice(0,5).reverse()
    }
  }
}
</script>

<style scoped>

</style>