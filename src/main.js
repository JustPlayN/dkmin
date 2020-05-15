import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import Vuex from 'vuex'

// css
import './static/css/common.less'
import './static/css/iconfont.less'

// filters
import '@/utils/filters'

Vue.use(VHtmlPlugin)
Vue.use(Vuex)

const store = require('./store').default
Vue.prototype.$store = store
const Request = require('./utils/request').default
Vue.prototype.$request = Request

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/report/detail',                // 报告详情
      'pages/login/index',                  // 登录
      'pages/net/index',                    // 网络
      'pages/mine/parent',                  // 我的---家长
      'pages/report/personalDetail',        // 家长--个人详情
      'pages/index/index',                  // 首页
      'pages/report/index',                 // 报告---老师
      'pages/score/list',                   // 我的
      'pages/score/edit',                   // 老师修改学生分数
      'pages/mine/children',                // 宝宝信息
      'pages/mine/braceletList',            // 我的手环
      'pages/report/history',               // 家长--历史
      'pages/bind/index',                   // 绑定
      'pages/mine/index',                   // 我的
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
