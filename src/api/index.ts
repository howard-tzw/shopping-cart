import { Course } from '@/store/courses'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://run.mocky.io/v3',
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000,
})

export async function getCourses(): Promise<Course[]> {
  try {
    const { data } = await instance.get(`/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e`)
    return data
  } catch (err) {
    console.error(err)
    throw new TypeError('Failed to get courses')
  }
}
