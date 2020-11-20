<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Info</h1>
        <p class="lead">このサイトについて</p>
      </div>
    </div>
    <br>
    <br>
    <div><hr></div>
    <div class="container">
      <div class="row">
        <div class="card border-info col-sm-4">
          <div class="card-body">
            <h2 class="card-title">OtakuCDDBとは</h2>
            <p class="card-text">このサイトは様々な楽曲の作詞作曲編曲やタイアップ作品を調べる事のできるサイトです。
              <br><br>二次ドルソンを主に三次ドルソンからJ-POPまで様々な楽曲が登録されています。
              <br>また将来的にはみなさんの力を借りて更に多くの楽曲を登録することを目指しています。</p>
          </div>
        </div>
        <div class="card border-info col-sm-4">
          <div class="card-body">
            <h2 class="card-text">FAQ</h2>
            <p class="card-text"><em><b>Q.検索で引っかからない！</b></em>
              <br>A.大文字小文字だったり半角全角だったりいろいろ試してください。
                <br>
                <br><em><b>Q.バックエンドのAPIを公開して欲しい</b></em>
                <br>A.将来的に公開する予定ではありますが、まだ自分のセキュリティ周りの知識が不足してるのでもう少しお待ちください。
                <br>
                <br><em><b>Q.〇〇が入ってない！</b></em>
                <br>A.ごめんなさい。
                <br>
                <br><em><b>Q.システム概要について教えてください</b></em>
                <br>A.フロントはVue.jsとBootstrap、デプロイにAWS Amplify、バックエンドはAWS API GatewayとAWS lambdaとDynamoDBです。
              </p>
          </div>
        </div>
        <div class="card border-info col-sm-4">
          <div class="card-body">
            <h2 class="card-title">製作者・連絡先</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">製作者：sasakirione</li>
              <li class="list-group-item">Twitter：<a href="https://twitter.com/sasakirione2">@sasakirione2</a></li>
              <li class="list-group-item">Mastodon：<a href="https://imastodon.net/web/accounts/43913">@sasakirione@imastdon.net</a></li>
              <li class="list-group-item">Github：<a href="https://github.com/sasakirione/">sasakirione</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info"
}
</script>

<style scoped>

</style>