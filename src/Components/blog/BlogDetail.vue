<template>
  <div class="container">
    <img src="../../assets/logo.png" alt="">
    <h1> {{blog.title}} </h1>
    <p> {{blog.text}} </p>
  </div>
</template>
<script>
export default {
  computed: {
    blog(){
      return this.$store.state.blog.blogs.filter(blog =>{
        return blog.id == this.$route.params.id
      })[0]
    }
  },
}
</script>
<style>

</style>

