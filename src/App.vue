<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
		<!-- <add-blog></add-blog> -->
		<!-- <show-blogs></show-blogs> -->
		<blog-header></blog-header>
    <router-view/>
		
  </div>
</template>

<script>
	import AddBlog from './components/AddBlog'
	import ShowBlogs from './components/ShowBlogs'
	import BlogHeader from './components/BlogHeader'
	import SingleBlog from './components/SingleBlog'
export default {
  name: 'app',
	components:{
		AddBlog,
		ShowBlogs,
		BlogHeader,
		SingleBlog
	}
}
</script>

<style>

</style>
