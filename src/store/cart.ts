import { defineStore } from 'pinia'
import { CART_STORAGE } from '../composables/usePersistCart'
import { useCourseStore } from './courses'

export interface Purchase {
  productId: number
  quantity: number
}

interface CartState {
  contents: Record<string, Purchase>
}

export interface CartPreview {
  id: number
  image: string
  title: string
  quantity: number
  cost: number
}

export const useCartStore = defineStore({
  id: 'cart',

  state: (): CartState => ({
    contents: JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {},
  }),

  getters: {
    count(): number {
      return Object.keys(this.contents).reduce((acc, id) => {
        return acc + this.contents[id].quantity
      }, 0)
    },

    total(): number {
      const courses = useCourseStore()
      return Object.keys(this.contents).reduce((acc, id) => {
        return acc + Number(courses.items[id].price) * this.contents[id].quantity
      }, 0)
    },

    formattedCart(): CartPreview[] {
      const courses = useCourseStore()

      if (!courses.loaded) return []

      return Object.keys(this.contents).map(productId => {
        const purchase = this.contents[productId]

        return {
          id: purchase.productId,
          image: courses.items[purchase.productId].picture,
          title: courses.items[purchase.productId].title,
          quantity: purchase.quantity,
          cost: purchase.quantity * Number(courses.items[purchase.productId].price),
        }
      })
    },
  },

  actions: {
    add(productId: number) {
      if (this.contents[productId]) {
        this.contents[productId].quantity += 1
      } else {
        this.contents[productId] = {
          productId,
          quantity: 1,
        }
      }
    },
    remove(productId: number) {
      if (!this.contents[productId]) {
        return
      }

      this.contents[productId].quantity -= 1

      if (this.contents[productId].quantity === 0) {
        delete this.contents[productId]
      }
    },
  },
})
