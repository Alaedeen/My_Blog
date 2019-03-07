<template>
  <div class="container">
    <input class="form-control form-control-lg" type="text" placeholder="find blogs">
    <app-blog v-for="blog in blogs" :key="blog" :blog="blog"></app-blog>

  </div>
</template>

<script>

import Blog from './blog.vue'
export default {

  computed: {
    blogs() {
      return this.$store.state.blog.blogs
    }
  },
  components :{
    appBlog: Blog
  },
}
</script>

<style>

</style>

