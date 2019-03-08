<template>
  <div class="container">
    <img src="../../assets/logo.png" alt="">
    <h1> {{blog.title}} </h1>
    <p> {{blog.text}} </p>
    <br><br>
    <input type="text" class="form-control" v-model="comment">
    <button type="button"
    class="btn btn-info" @click="addComment()">Add Comment</button>
    <h4>Comments: ( {{blog.comments.length}} )</h4>
    <br>
    <ul class="list-group">
      <li class="list-group-item" v-for="comment in blog.comments" :key="comment">{{comment}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment:''
    }
  },
  computed: {
    blog(){
      return this.$store.state.blog.blogs.filter(blog =>{
        return blog.id == this.$route.params.id
      })[0]
    }
  },
  methods: {
    addComment(){
      //this.blog.comments.splice(0,0,this.comment)
      this.$store.dispatch('blog/addComment', {
        id: this.blog.id,
        comment:this.comment});
    }
  },
}
</script>
<style>

</style>

