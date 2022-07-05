import { defineStore } from 'pinia'
import { getCourses } from '@/api'

export interface Course {
  id: number
  title: string
  status: string
  picture: string
  price: string
}

interface CourseState {
  items: Record<string, Course>
  ids: number[]
}

export const useCourseStore = defineStore({
  id: 'courses',

  state: (): CourseState => ({
    items: {},
    ids: [],
  }),

  getters: {
    list(): Course[] {
      return this.ids.map(i => this.items[i])
    },

    loaded(): boolean {
      return this.ids.length > 0
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded) return

      const courses = await getCourses()
      this.ids = courses.map((course: Course) => {
        this.items[course.id] = course
        return course.id
      })
    },
  },
})
