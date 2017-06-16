<template>
  <div>
    <mu-paper class="master-nav">
      <mu-bottom-nav :value="masterNav" shift @change="navChange">
        <!--<mu-bottom-nav-item v-for="item in navItems" :key="item.value" :value="item.value" :title="item.title" :icon="item.icon"></mu-bottom-nav-item>-->
        <mu-bottom-nav-item :key="navItems[0].value" :value="navItems[0].value" :title="navItems[0].title" :icon="navItems[0].icon"></mu-bottom-nav-item>
        <mu-bottom-nav-item :key="navItems[1].value" :value="navItems[1].value" :title="navItems[1].title" :icon="navItems[1].icon">
          <mu-badge v-if="masterNav !== navItems[1].value" content="10" class="badge" circle secondary/>
        </mu-bottom-nav-item>
        <mu-bottom-nav-item :key="navItems[2].value" :value="navItems[2].value" :title="navItems[2].title" :icon="navItems[2].icon"></mu-bottom-nav-item>
        <mu-bottom-nav-item :key="navItems[3].value" :value="navItems[3].value" :title="navItems[3].title" :icon="navItems[3].icon"></mu-bottom-nav-item>
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
      this.$router.replace({name: nav})
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

.badge {
  bottom: 30px;
  left: 10px;
}

@media (max-width: 768px) {
  .master-nav {
    position: fixed;
    top: auto;
    bottom: 0;
  }
}
</style>
