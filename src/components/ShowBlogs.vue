<template>
	<!--自定义指令需要注意传参为字符串时双引号中要用单引号括为字符格式                  -->
	<div v-theme:column="'wide'" id="show-blogs">
		<h1>博客总览</h1>
		<input type="text" v-model="search" placeholder="搜索"/>
		<div v-for="blog in filteredBlogs" class="single-blog" :key="blog.objectId">
<!-- 		<div  v-for="blog in blogs" class="single-blog"> -->
			<!--  自定义指令             自定义过滤器 -->
			<router-link v-bind:to="'/blog/'+blog.objectId">
				<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
			</router-link>
			<article>
				<!-- {{blog.body | snipper}} -->
				{{blog.content | snipper}}
			</article>
		</div>
	</div>
	
</template>

<script>
	
	export default{
		name:'show-blogs',
		data(){
			return{
				blogs:[],
				search:""
			}
		},
		created() {	
			//从 Bmob数据库获取// this.$http.get('../static/posts.json')		
			const query =Bmob.Query('MyBlog');	
			query.find().then(res =>{							
				for(var i=0;i<res.length;i++){							
					this.blogs.push(res[i])
				}				
			})			
					
		},
		computed:{
			filteredBlogs:function(){				
				return this.blogs.filter((blog)=>{					
					// 进行过滤
					return blog.title.match(this.search);
				})
			},
		},
		//局部实现自定义过滤器
		filters:{
			// "to-uppercase":function(value){
			// 	return value.toUpperCase();//转为大写
			// }
			toUppercase(value){
				return value.toUpperCase();//转为大写
			},
		},
		directives:{
			'rainbow':{
				bind(el,binding,vonde){
					el.style.color="#"+Math.random().toString(16).slice(2,8);
				}
			}
		}
	}
</script>

<style>
	#show-blogs{
		max-width: 800px;
		margin: 0 auto;
	}
	.single-blog{
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #CCCCCC;
		border: 1px dotted #aaa;
	}
	#show-blogs a{
		color: #444;
		text-decoration: none;
	}
	input{
		width: 100%;
		padding: 8px;
		box-sizing: border-box;
	}
</style>
