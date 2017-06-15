<template>
  <div class="hello">
    <mu-paper class="master-nav">
      <mu-bottom-nav :value="masterNav" shift @change="navChange">
        <mu-bottom-nav-item v-for="item in navItems" :key="item.value" :value="item.value" :title="item.title" :icon="item.icon"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
    <div class="vsteper-container">
      <mu-stepper :active-step="activeStep" orientation="vertical">
        <mu-step>
          <mu-step-label>
            选择活动地点
          </mu-step-label>
          <mu-step-content>
            <p>
              在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
            </p>
            <mu-raised-button label="下一步" class="step-button" @click="handleNext" primary></mu-raised-button>
          </mu-step-content>
        </mu-step>
        <mu-step>
          <mu-step-label>
            创建一个群组
          </mu-step-label>
          <mu-step-content>
            <p>
              创建群组，50人左右，以18-25单身青年为主。。。。。
            </p>
            <mu-raised-button label="下一步" class="step-button" @click="handleNext" primary></mu-raised-button>
            <mu-flat-button label="上一步" class="step-button" @click="handlePrev"></mu-flat-button>
          </mu-step-content>
        </mu-step>
        <mu-step>
          <mu-step-label>
            宣传活动
          </mu-step-label>
          <mu-step-content>
            <p>
              多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就ok拉
            </p>
            <mu-raised-button label="完成" class="step-button" @click="handleNext" primary></mu-raised-button>
            <mu-flat-button label="上一步" class="step-button" @click="handlePrev"></mu-flat-button>
          </mu-step-content>
        </mu-step>
      </mu-stepper>
      <p v-if="finished" style="margin: 32px 46px">
        都完成啦! <a href="javascript:;" @click="reset">重置</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: 0,
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
    finished () {
      return this.activeStep > 2
    }
  },
  methods: {
    navChange: function (nav) {
      this.masterNav = nav
    },
    handleNext () {
      this.activeStep++
    },
    handlePrev () {
      this.activeStep--
    },
    reset () {
      this.activeStep = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vsteper-container {
  max-width: 380px;
  max-height: 400px;
  margin: 16px auto;
}
.step-button {
  margin-top: 12px;
  margin-right: 12px;
}
.master-nav {
  bottom: 0;
  width: 100%;
}
@media (max-width: 768px) {
  .master-nav {
    position: absolute;
  }
}
</style>
