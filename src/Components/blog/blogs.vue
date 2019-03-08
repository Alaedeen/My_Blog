<template>
  <div class="container">
    <button
    type="button"
    class="btn btn-success"
    @click="goToNew()">Add new blog</button>
    <input class="form-control form-control-lg" type="text" placeholder="find blogs" v-model="search">

    <app-blog v-for="blog in filtredblogs"
    :key="blog"
    :blog="blog"
    style="cursor : pointer"></app-blog>



  </div>
</template>

<script>

import Blog from './blog.vue'
export default {
  data() {
    return {
      search:'',
      blogs: this.$store.state.blog.blogs
    }
  },

  computed: {
    // blogs() {
    //   return this.$store.state.blog.blogs
    // },
    filtredblogs(){
      return this.$store.state.blog.blogs.filter(blog =>{
        return blog.title.toUpperCase().includes(this.search.toUpperCase())
      })
    }
  },
  components :{
    appBlog: Blog
  },
  methods: {
    goToNew(){
      this.$router.push({path:'blog/new'})
    }
  },
}
</script>

<style>

</style>

