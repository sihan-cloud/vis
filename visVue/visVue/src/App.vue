<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <br/>
        <RouterLink to="/About">AboutUs</RouterLink>
        <br/>
        <RouterLink to="/Main">Main</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body{
  margin:0;
  padding:0;
  border:0
}
</style>
