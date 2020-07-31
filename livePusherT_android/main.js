import Vue from 'vue'
import App from './App'
console.log('mainjs+ 开始连接')
import store from './store';

import {encrypt,decrypt,system,systemId,base64ToArrayBuffer,sendData,sendD,work,regMail,navigateTo,sendD110} from "./lib/js/GlobalFunction.js"
// 直播处理
import  './lib/socket/index.js'

import Global_ from './lib/js/GlobalObj.js'   //全局对象
console.log(Global_)
Vue.prototype.GLOBAL = Global_; //添加Global_到Vue的原型对象上

Vue.config.productionTip = false

Vue.prototype.$host = 'https://unidemo.dcloud.net.cn/';



App.mpType = 'app'

const app = new Vue({
    ...App,
	store,//挂载store
	Global_,
})
app.$mount()
