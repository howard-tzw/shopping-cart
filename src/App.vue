<template>
  <div class="min-h-screen">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import Nav from './components/Nav.vue'
import { useCartStore } from '@/store/cart'
import { useCourseStore } from '@/store/courses'

const courseStore = useCourseStore()
const cartStore = useCartStore()

courseStore.fetchAll()

const count = computed(() => cartStore.count)
</script>
