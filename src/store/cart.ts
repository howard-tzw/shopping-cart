import { defineStore } from 'pinia'
import { useCourseStore } from './courses'
import { Course } from './courses'

interface CartState {
  items: Record<string, Course>
  selectedIds: number[]
}

export const useCartStore = defineStore({
  id: 'cart',

  state: (): CartState => ({
    items: {},
    selectedIds: [],
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

      if (this.selectedIds.includes(id)) {
        this.deselect(id)
      }
    },
    removeAll() {
      this.items = {}
    },
    removeSelected() {
      this.selectedIds.forEach(id => {
        this.remove(id)
      })
      this.selectedIds = []
    },
    select(id: number) {
      if (this.selectedIds.includes(id)) return
      this.selectedIds.push(id)
    },
    deselect(id: number) {
      if (!this.selectedIds.includes(id)) return
      this.selectedIds = this.selectedIds.filter(i => i !== id)
    },
    selectAll() {
      Object.keys(this.items).forEach(id => {
        this.select(Number(id))
      })
    },
    deselectAll() {
      this.selectedIds = []
    },
  },
})
