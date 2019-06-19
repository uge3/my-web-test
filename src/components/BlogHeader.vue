<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>欢迎页</router-link>
				<router-link to="/showblogs" exact>博客总览</router-link>
				<router-link to="/addblog" exact>添加博客</router-link>
				
			</li>
		</ul>
	</nav>
</template>

<script>
</script>

<style>
	ul{
		list-style: none;
		text-align: center;
		margin: 0;
	}
	li{
		display: inline-block;
		margin: 0 10px;
	}
	a{
		color: #fff;
		text-decoration: none;
		padding: 12px;
		border-radius: 5px;
	}
	nav{
		background: chocolate;
		padding: 30px 0;
		margin-bottom: 2.5rem;
	}
	.router-link-active{
		background: rgba(255,255,255,0.8);
		color:#444;
	}
</style>
