<template>
  <div class="w-4xl p-4">
    <div v-if="!formattedCart.length">
      <h1 class="text-xl">Cart is empty.</h1>
    </div>
    <div v-else-if="!courseStore.loaded" class="text-xl space-y-4">Loading...</div>
    <div v-else class="space-y-2">
      <CartCard v-for="(course, index) in formattedCart" :key="index" :course="course" />
    </div>

    <div class="text-center my-4">Total: {{ toCurrency(cartStore.totalCost) }}</div>

    <div class="flex justify-center">
      <button @click="confirm" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">確認購買</button>
    </div>
  </div>

  <Modal v-if="showModal" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CartCard from '@/components/CartCard.vue'
import Modal from '@/components/Modal.vue'
import { toCurrency } from '@/utils'
import { useCartStore } from '@/store/cart'
import { useCourseStore } from '@/store/courses'

const cartStore = useCartStore()
const courseStore = useCourseStore()

const formattedCart = computed(() => cartStore.formattedCart)

const showModal = ref(false)
const closeModal = () => {
  showModal.value = false
}

const confirm = () => {
  showModal.value = true
}
</script>
