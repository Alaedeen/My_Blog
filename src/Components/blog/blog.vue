<template>
  <div class="col-sm-6 col-md-4">
    <div class="card" style="width: 18rem;">
    <img src="../../assets/logo.png" class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title"> {{blog.title}} </h5>
      <p class="card-text"> {{blog.text.substr(1, 100)}}... </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>

<style>

</style>
