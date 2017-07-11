<template>
  <div class="container">
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    finished () {
    }
  },
  methods: {
    handleNext () {
    },
    handlePrev () {
    },
    reset () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: absolute;
  width: 100%;
  top: 58px;
  bottom: 0px;
}
.amap-wrapper {
  width: 100%;
  height: 100%;
}
.step-button {
  margin-top: 12px;
  margin-right: 12px;
}
@media (max-width: 768px) {
  .container {
  top: 0px;
  bottom: 58px;
  }
}
</style>
