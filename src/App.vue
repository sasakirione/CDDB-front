<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import myheader from "@/components/myheader"
import info from "../package.json"

export default {
  name: 'App',
  components: {
    myheader
  },
  data() {
    return {
      host: location.hostname,
      appName: info.name.substr(0,1).toUpperCase() + info.name.substr(1),
      version: info.version
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
