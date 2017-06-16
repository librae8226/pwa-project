<template>
  <div>
    <mu-paper class="master-nav">
      <mu-bottom-nav :value="masterNav" shift @change="navChange">
        <mu-bottom-nav-item v-for="item in navItems" :key="item.value" :value="item.value" :title="item.title" :icon="item.icon"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      masterNav: 'home',
      navItems: [
        {
          value: 'home',
          title: 'Home',
          icon: 'home'
        },
        {
          value: 'notification',
          title: 'Notification',
          icon: 'notifications'
        },
        {
          value: 'history',
          title: 'History',
          icon: 'access_time'
        },
        {
          value: 'settings',
          title: 'Settings',
          icon: 'settings'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    navChange: function (nav) {
      this.masterNav = nav
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.master-nav {
  width: 100%;
  z-index: 1024;
  top: 0;
  bottom: auto;
}
@media (max-width: 768px) {
  .master-nav {
    position: fixed;
    top: auto;
    bottom: 0;
  }
}
</style>
