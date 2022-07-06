import { defineStore } from 'pinia'
import { CART_STORAGE } from '../composables/usePersistCart'
import { useCourseStore } from './courses'
import { Course } from './courses'

interface CartState {
  items: Record<string, Course>
}

export const useCartStore = defineStore({
  id: 'cart',

  state: (): CartState => ({
    items: {},
  }),

  getters: {
    count(): number {
      return Object.keys(this.items).length
    },
    formattedCart(): Course[] {
      const courses = useCourseStore()

      if (!courses.loaded) return []

      return Object.keys(this.items).map(id => {
        return courses.items[id]
      })
    },
    totalCost(): number {
      const courses = useCourseStore()
      return Object.keys(this.items).reduce((acc, id) => {
        return acc + Number(courses.items[id].price)
      }, 0)
    },
  },
  actions: {
    add(id: number) {
      const courseStore = useCourseStore()
      this.items[id] = courseStore.items[id]
    },
    remove(id: number) {
      if (!this.items[id]) {
        return
      }

      delete this.items[id]
    },
  },
})
