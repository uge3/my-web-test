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
			// this.$http.get('../static/posts.json/').then(function(data){
				//数据库获取数据
			this.$http.get('https://vuejs-test-7433e.firebaseio.com/posts/'+this.id+".json")
			.then(function(data){
				// console.log(data.body[this.id-1]);
				// this.blog= data.body[this.id-1];
				console.log(data);
				return data.json();				
			})
			.then(function(data){
				this.blog = data;
			})
		},
		methods:{
			deleteSingleBlog(){
				//数据库删除数据
				this.$http.delete('https://vuejs-test-7433e.firebaseio.com/posts/'+this.id+".json")
				.then(response=>{
					//跳转   路由  添加到主页
					this.$router.push({path:"/"})
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
