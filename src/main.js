// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
//引入  bmob
import Bmob from "hydrogen-js-sdk"
import axios from 'axios'
Vue.config.productionTip = false
Bmob.initialize("7498ab99babd4e41b420a8e7a576f827","d571aa46b4b96d6e480035d0652a7b31")
//全局设置
Vue.prototype.Bmob =Bmob
Vue.use(VueResource)
axios.defaults.baseURL="https:///vuejs-test-7433e.firebaseio.com"
//请求头
// axios.defaults.headers.common['authorization']='Token'
// axios.defaults.headers.post['Content-type']='application/urlencode'
// axios.defaults.headers.get['Accepts']='application/json'
// 自定义指令 注册
// Vue.directive('rainbow',{
// 	//绑定指令 内容 绑定对象 虚拟节点
// 	bind(el,binding,vonde){
// 		el.style.color="#"+Math.random().toString(16).slice(2,8);
// 	}
// })

Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value=='wide'){
			el.style.maxWidth='1260px';
		}else if(binding.value=='narrow'){
			el.stlye.maxWidth='569px';
		}
		// 判断是否有参数  column
		if (binding.arg=='column'){
			el.style.background="#83ff";
			el.style.padding='20px';
		}
	}
})

// 自定义过滤器
// Vue.filter("to-uppercase",function(value){
// 	return value.toUpperCase();//转为大写
// })
Vue.filter("snipper",function(value){
	return value.slice(0,100)+"......"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
