// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false


Vue.use(VueResource)
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
