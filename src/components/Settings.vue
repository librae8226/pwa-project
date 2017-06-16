<template>
  <div class="container">
    <mu-list>
      <mu-sub-header>我</mu-sub-header>
      <mu-list-item :title="username">
        <mu-avatar :src="gravatar_url" slot="leftAvatar"/>
        <mu-icon value="verified_user" color="green" slot="right"/>
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-sub-header>通用</mu-sub-header>
      <mu-list-item title="主题">
        <mu-icon value="color_lens" slot="left"/>
        <mu-icon value="panorama_fish_eye" color="white" slot="right"/>
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
      <mu-list-item title="通知">
        <mu-icon value="notifications" slot="left"/>
        <mu-icon value="panorama_fish_eye" color="white" slot="right"/>
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-sub-header>关于</mu-sub-header>
      <mu-list-item title="功能介绍">
        <mu-icon value="info" slot="left"/>
        <mu-icon value="panorama_fish_eye" color="white" slot="right"/>
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
      <mu-list-item title="发现更多">
        <mu-icon value="search" slot="left"/>
        <mu-icon value="panorama_fish_eye" color="white" slot="right"/>
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
      <mu-list-item title="支持">
        <mu-icon value="favorite" color="red" slot="left"/>
        <mu-icon value="panorama_fish_eye" color="white" slot="right"/>
        <mu-icon value="keyboard_arrow_right" slot="right"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  data () {
    return {
      username: 'librae'
    }
  },
  computed: {
    gravatar_url: {
      get: function () {
        return '//gravatar.css.network/avatar/' + md5('librae8226@gmail.com') + '?s=48&d=mm)'
      },
      set: function (val) {
      }
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 672px;
  margin: 16px auto;
}
</style>
