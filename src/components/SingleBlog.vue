<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.body}}</article>
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
			this.$http.get('../static/posts.json/').then(function(data){
				console.log(data.body[this.id-1]);
				this.blog= data.body[this.id-1];
				
			})
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
