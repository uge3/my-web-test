import axios from 'axios'
//axios实例化 全局配置
const instance = axios.create({
	baseURL:"https://vuejs-test-7433e.firebaseio.com/posts.json"
})
//请求头
instance.defaults.headers.common['SOMETING'] ='SOMETHING'
//公开组件
export default instance