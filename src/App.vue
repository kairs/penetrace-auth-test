<template>
  <div id="app">
    <div class="container">
      <router-link to="login" activeClass="active" class="btn" tag="button" type="button" exact>Login</router-link>
      <router-link to="navigation" activeClass="active" class="btn" tag="button" type="button" exact>Navigation</router-link>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
</style>
