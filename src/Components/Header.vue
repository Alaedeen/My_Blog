<template>
  <nav class="navbar navbar-dark my-nav">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link  to="/" class="navbar-brand route">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav ">
                    <router-link to="/blog" activeClass="active" tag="li"><a class="route" >Blogs</a></router-link>
                    <router-link to="/resume" activeClass="active" tag="li"><a class="route" >My Resume</a></router-link>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.my-nav{
  background-color: transparent;
}
.route{
  color: 	#696969;
}
</style>
