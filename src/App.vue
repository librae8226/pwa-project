<template>
  <div id="app">
    <master-nav></master-nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'app',
  components: {
    'master-nav': Nav
  }
}
</script>

<style scoped>
body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.content {
  margin: auto;
}

@media (max-width: 768px) {
  .content {
    margin: 0 0 56px 0;
  }
}
</style>
