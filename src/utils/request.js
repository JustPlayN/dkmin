import store from '@/store'

/**
 * @function 请求接口封装
 * @param {string} url：接口地址
 * @param {object} params：请求参数
 * @param {string} method：请求方式，默认POST
 * @param {boolean} fitNoLogin：是否需要强制登录，默认false
 */
function Request (url, body = {}) {
  const { params = {}, fitNoLogin = false } = body
  return new Promise((resolve, reject) => {
    Megalo.request({
      url: `${process.env.VUE_APP_API}${url}`,
      method: body.method || 'POST',
      data: {
        data: params
      },
      header: {
        'x-requested-with': 'XMLHttpRequest',
        Cookie: `token=${store.getters.userInfo.token}`
      }
    }).then(res => {
      if ((res.data.code === '-1') && !fitNoLogin) {
        Megalo.reLaunch({ url: `/pages/login/index` })
      } else {
        resolve(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export default Request
