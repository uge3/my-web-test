<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<!-- <article>{{blog.body}}</article> -->
		<article>{{blog.content}}</article>
		<p>作者:{{blog.author}}</p>
		<p>分类:</p>
		<ul>
			<li v-for="category in blog.categories" :key="category">
				{{category}}
			</li>
		</ul>
		<button @click="deleteSingleBlog()">删除</button>
		<router-link :to="'/edit/'+id">编辑</router-link>
	</div>
	
</template>

<script>
	export default{
		name:"single-blog",
		data(){
			return{
				// 获取从路由传过来的ID 
				id:this.$route.params.id,
				blog:{}
			}
		},
		created(){
			//数据库获取数据 Bmob
			const query =Bmob.Query('MyBlog');
			console.log(this.id)
			query.get(this.id).then(res => {
				console.log(res)
				this.blog=res
			}).catch(err => {
				  console.log(err)
			})
		},
		methods:{
			deleteSingleBlog(){
				//从数据库删除 记录
				const query = Bmob.Query('MyBlog');
				query.destroy(this.id).then(res => {
					  console.log(res)
					  this.$router.push({path:"/"})
					}).catch(err => {
					  console.log(err)
				})
			}
		}
	}
</script>

<style>
	#single-blog{
		max-width: 960px;
		margin: 0 auto;
		padding: 20px;
		background: cadetblue;
		border: 1px dotted #D2691E;
	}
</style>
