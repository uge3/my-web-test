<template>
	<div id="add-blog">
		<h2>编辑博客</h2>
		<form v-if="!submmited">
			<label>博客标题</label>
			<input type="text" v-model="blog.title" required/>
			<label>博客内容</label>
			<textarea name="" id="" v-model="blog.content"></textarea>
			
			<div id="checkboxes">
				
				<label>Vue.js</label>
				<input type="checkbox" value="Vue.js" v-model="blog.categories"></input>
				<label>Node.js</label>
				<input type="checkbox" value="Node.js" v-model="blog.categories"></input>
				<label>React.js</label>
				<input type="checkbox" value="React.js" v-model="blog.categories"></input>
				<label>Angular4.js</label>
				<input type="checkbox" value="Angular4.js" v-model="blog.categories"></input>
			</div>
			<label>作者：</label>
			<select v-model="blog.author">
				<option v-for="author in authors" :key="author">
					{{author}}
				</option>
			</select>
			<button v-on:click.prevent="post">编辑提交</button>
		</form>
		<div v-if="submmited">
			<h3>你的博客修改成功</h3>
		</div>
		<hr>
		<div id="preview">
			<h3>博客总览</h3>
			<p>博客标题：{{blog.title}}</p>
			<p>博客内容</p>
			<p>{{blog.content}}</p>
			<p>博客分类</p>
			<ul>
				<li v-for="categorie in blog.categories" :key="categorie">
					{{categorie}}
				</li>
			</ul>
			<p>作者：{{blog.author}}</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
export default{
	name: 'add-blog',
	data () {
	    return {
		id:this.$route.params.id,
	    blog:{},
		 authors:["hem","hery","baey"],
		 submmited:false
	  }
	},
	methods:{
		fetchData(){
			console.log(this.id),
			//firebase云数据
			axios.get('https://vuejs-test-7433e.firebaseio.com/posts/'+this.id+".json")
			.then(response =>{
				console.log(response.data);
				this.blog=response.data;
			})
		},
		post:function  () {
			// 数据传到相应的位置 如数据库等 
			// this.$http.post("http://jsonplaceholder.typicode.com/posts",
			this.$http.put('https://vuejs-test-7433e.firebaseio.com/posts/'+this.id+".json",this.blog)// 将上面的data中的bolg 内容更新数据库			
			.then(function(data){
				this.submmited=true;//显示判断
				console.log(data);
			});
		}
	},
	created(){
		this.fetchData();//调用的方法
	}
}
	
</script>

<style>
	
	#add-blog *{
		box-sizing: border-box;
	}
	#add-blog{
		margin: 20px auto;
		max-width: 600px;
		padding: 20px;
	}
	label{
		/* 标签单独一行 */
		display: block;
		margin: 20px 0 10px;
	}
	input[type="text"],textarea,select{
		display: block;
		width: 100%;
		padding: 8px;
	}
	textarea{
		height: 200px;
	}
	#checkboxes label{
		display: inline-block;
		margin-top: 0;
	}
	#checkboxes input{
		display: inline-block;
		margin-right: 10px;
	}
	button{
		display: block;
		margin: 20px 0;
		background: crimson;
		color: azure;
		padding: 14px;
		border-radius: 5px;
		font-size: 20px;
		cursor: pointer;
	}
	#preview{
		padding: 10px 20px;
		border: 1px dotted #ccc;
		margin: 30px 0;
	}
</style>
