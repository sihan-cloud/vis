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
        <RouterLink to="/about">AboutUs</RouterLink>
        <br/>
        <RouterLink to="/Main">Main</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
