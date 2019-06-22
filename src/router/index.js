import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'
import EditBlog from '@/components/EditBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
			path:'/addblog',
			name:'AddBlog',
			component:AddBlog
		},{
			path:'/showblogs',
			name:'ShowBlogs',
			component:ShowBlogs
		},
		{
			path:'/blog/:id',
			name:'blog',
			component:SingleBlog
		},
		{
			path:'/edit/:id',
			name:'blog',
			component:EditBlog
		}
  ],
	mode:"history"  //去掉#符号
})
