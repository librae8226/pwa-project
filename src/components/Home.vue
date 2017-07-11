<template>
  <div class="container">
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'" :center="center" :zoom="zoom" :plugin="plugins">
        <el-amap-marker v-for="marker in markers" :key="marker.key" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :title="marker.title"></el-amap-marker>
        <el-amap-info-window :position="info.position" :content="info.content" :visible="info.visible" :events="info.events"></el-amap-info-window>
      </el-amap>
    </div>
    <mu-dialog :open="dialog" @close="closeDialog" :title="markerDetails.title">
      <p>经度: {{markerDetails.data.lng}}</p>
      <p>纬度: {{markerDetails.data.lat}}</p>
      <p>光照: {{markerDetails.data.light}} lux</p>
      <p>温度: {{markerDetails.data.temperature}} ℃</p>
      <mu-flat-button primary label="关闭" @click="closeDialog" slot="actions"/>
    </mu-dialog>
    <mu-snackbar v-if="snackbar" message="已连接" action="好的" actionColor="greenA700" @actionClick="hideSnackbar" @close="hideSnackbar"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ws: null,
      snackbar: false,
      dialog: false,
      zoom: 10,
      center: [121.5273285, 31.21515044],
      lng: 0,
      lat: 0,
      sensor: {},
      markerDetails: {
        title: '实时数据',
        showCheckbox: false,
        data: {
          lng: 'N/A',
          lat: 'N/A',
          light: 'N/A',
          temperature: 'N/A'
        }
      },
      plugins: [
        'MapType',
        'Scale'
      ],
      markers: [
        {
          key: 'mk-1',
          position: [121.5273285, 31.21515044],
          events: {
            click: () => {
              this.markerDetails.data.lng = this.markers[0].position[0]
              this.markerDetails.data.lat = this.markers[0].position[1]
              this.openDialog()
            },
            dragend: (e) => {
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
            }
          },
          visible: true,
          draggable: true,
          title: 'robot 1'
        },
        {
          key: 'mk-2',
          position: [121.6074416, 31.1912367],
          events: {
            click: () => {
              this.markerDetails.data.lng = this.markers[1].position[0]
              this.markerDetails.data.lat = this.markers[1].position[1]
              this.openDialog()
            },
            dragend: (e) => {
              this.markers[1].position = [e.lnglat.lng, e.lnglat.lat]
            }
          },
          visible: true,
          draggable: true,
          title: 'robot 2'
        },
        {
          key: 'mk-3',
          position: [121.2347983, 31.0609022],
          events: {
            click: () => {
              this.markerDetails.data.lng = this.markers[2].position[0]
              this.markerDetails.data.lat = this.markers[2].position[1]
              this.openDialog()
            },
            dragend: (e) => {
              this.markers[2].position = [e.lnglat.lng, e.lnglat.lat]
            }
          },
          visible: true,
          draggable: true,
          title: 'robot 3'
        }
      ],
      info: {
        position: [121.2347983, 31.0609022],
        content: '<p style="text-align: center;"><img src="http://o7spigzvd.bkt.clouddn.com/linkgo-logo-border-160x160.png" width="48" height="48"><br><span>邻感科技</span></p>',
        visible: true,
        events: {
          close () {
            console.log('close info window')
          }
        }
      }
    }
  },
  computed: {
    finished () {
    }
  },
  methods: {
    openDialog () {
      this.dialog = true
    },
    closeDialog () {
      this.dialog = false
    },
    showSnackbar () {
      this.snackbar = true
      if (this.snackTimer) {
        clearTimeout(this.snackTimer)
      }
      this.snackTimer = setTimeout(() => {
        this.snackbar = false
      }, 2000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    }
  },
  mounted () {
    this.ws = new WebSocket('ws://librae8226-pwa.goiot.cc/ws')
    console.log(this.ws)
    this.ws.onmessage = (ev) => {
      let j = JSON.parse(ev.data)
      console.log(j)
      this.markerDetails.data.light = j.light
      this.markerDetails.data.temperature = j.temp
    }
    this.ws.onopen = (ev) => {
      this.showSnackbar()
    }
  },
  destroyed () {
    this.ws.send('destroyed')
    this.ws.close()
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
