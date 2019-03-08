<template>
  <div class="container">
    <h1> <strong>Add new blog</strong> </h1>
    <hr>
    <h3>Blog title:</h3>
    <input type="text" class="form-control" v-model="blog.title">
    <h3>blog:</h3>
     <textarea class="form-control" rows="7" v-model="blog.text"></textarea>
     <br>
     <button type="button"
    class="btn btn-danger" @click="addBlog()">Add blog</button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: {
        id: this.$store.state.blog.blogs.length,
      title: '',
      text: '',
      comments: []
      }
    }
  },
  methods: {
    addBlog(){
      this.$store.dispatch('blog/addBlog', this.blog);
      this.$router.push({ path: '/blog' });
    }
  },

}
</script>
<style>

</style>

