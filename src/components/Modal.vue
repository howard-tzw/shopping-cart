<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end items-center justify-center min-h-full p-4 text-center p-0">
        <div
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-lg w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 p-6 pb-4">
            <div class="flex items-start">
              <div class="mt-3 text-center mt-0 ml-4 text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">購買完成</h3>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3">
            <button
              @click="closeFn"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-0 ml-3 w-auto text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  closeFn?: () => void
}>()
</script>
