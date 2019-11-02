
<script>
import tools from '@/utils/tools'
export default {
  onLaunch () {
    console.log('App onLaunch')
    let userInfo = tools.getCookie('userInfo')
    if (userInfo) {
      this.$store.dispatch('putUserInfo', userInfo)
    }
  },
  onShow () {
    // 小程序强制更新
    if (Megalo.canIUse('getUpdateManager')) {
      const updateManager = Megalo.getUpdateManager()
      updateManager.onUpdateReady(function () {
        updateManager.applyUpdate()
      })
    }
    console.log('App onShow')
  },
  onHide () {
    // Do something when hide.
    console.log('App onHide')
  },
  onError (msg) {
    console.log('App onError')
    console.log(msg)
  }
}
</script>
