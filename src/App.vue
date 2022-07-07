<template>
  <div class="min-h-screen">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue'
</script>
