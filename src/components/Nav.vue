<template>
  <div>
    <mu-paper class="nav-master">
      <mu-bottom-nav :value="navFocus" @change="navChange">
        <!--<mu-bottom-nav-item v-for="item in navItems" :key="item.value" :value="item.value" :title="item.title" :icon="item.icon"></mu-bottom-nav-item>-->
        <mu-bottom-nav-item :key="navItems[0].value" :value="navItems[0].value" :title="navItems[0].title" :icon="navItems[0].icon"></mu-bottom-nav-item>
        <mu-bottom-nav-item :key="navItems[1].value" :value="navItems[1].value" :title="navItems[1].title" :icon="navItems[1].icon">
          <mu-badge content="10" class="nav-badge" badgeClass="nav-badge-style" circle secondary/>
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
      navFocus: 'home',
      navItems: [
        {
          value: 'home',
          title: '主要',
          icon: 'home'
        },
        {
          value: 'notification',
          title: '消息',
          icon: 'notifications'
        },
        {
          value: 'history',
          title: '历史',
          icon: 'access_time'
        },
        {
          value: 'settings',
          title: '设置',
          icon: 'settings'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    navChange: function (nav) {
      this.navFocus = nav
      this.$router.replace({name: nav})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-master {
  width: 100%;
  z-index: 1024;
  top: 0;
  bottom: auto;
}

.nav-badge {
  position: absolute;
  top: 2px;
}

.nav-badge >>> .nav-badge-style {
  width: 16px;
  height: 16px;
  font-size: 10px;
}

@media (max-width: 768px) {
  .nav-master {
    position: fixed;
    top: auto;
    bottom: 0;
  }
}
</style>
