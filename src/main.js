import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import Vuex from 'vuex'

// css
import './static/css/common.less'
import './static/css/iconfont.less'

Vue.use(VHtmlPlugin)
Vue.use(Vuex)

const store = require('./store').default
Vue.prototype.$store = store

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/report/personalDetail',        // 家长--个人详情
      'pages/report/history',               // 家长--历史
      'pages/bind/type',                    // 绑定方式
      'pages/bind/index',                   // 绑定
      'pages/mine/index',                   // 我的
      'pages/mine/password',                // 密码
      'pages/score/list',                   // 我的
      'pages/report/detail',                // 报告详情
      'pages/report/index',                 // 报告
      'pages/index/index',                  // 首页
    ],
    tabBar: {
      color: '#999',
      selectedColor: '#484D57',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: 'native/tabbar/index.png',
          selectedIconPath: 'native/tabbar/indexa.png'
        },
        {
          pagePath: 'pages/report/index',
          text: '报告',
          iconPath: 'native/tabbar/report.png',
          selectedIconPath: 'native/tabbar/reporta.png'
        },
        {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: 'native/tabbar/mine.png',
          selectedIconPath: 'native/tabbar/minea.png'
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '享智云',
      navigationBarTextStyle: 'black',
      backgroundColorTop: '#fff'
    }
  }
}
