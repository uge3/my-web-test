<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
		<!-- <add-blog></add-blog> -->
		<show-blogs></show-blogs>
    <!-- <router-view/> -->
  </div>
</template>

<script>
	import AddBlog from './components/AddBlog'
	import ShowBlogs from './components/ShowBlogs'
export default {
  name: 'app',
	components:{
		AddBlog,
		ShowBlogs
	}
}
</script>

<style>

</style>
