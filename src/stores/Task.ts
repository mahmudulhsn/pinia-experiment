import axios from 'axios'
import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  isCompleted: boolean
}

export type CreateTask = {
  title: string
  is_completed: boolean
}

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
    sortable: 'all',
    isLoading: false
  }),

  getters: {
    filteredTasks(): Task[] {
      if (this.sortable == 'completed') {
        return this.completedTasks
      } else if (this.sortable == 'pending') {
        return this.pendingTasks
      } else {
        return this.allTasks
      }
    },
    allTasks(): Task[] {
      return this.tasks
    },
    completedTasks(): Task[] {
      return this.tasks.filter((task) => task.isCompleted == true)
    },
    pendingTasks(): Task[] {
      return this.tasks.filter((task) => task.isCompleted !== true)
    },
    countTotalTasks(): number {
      return this.tasks.length
    },

    countCompletedTasks(): number {
      return this.tasks.filter((task) => task.isCompleted == true).length
    },

    countPendingTasks(): number {
      return this.tasks.filter((task) => task.isCompleted !== true).length
    }
  },

  actions: {
    async getTasks() {
      try {
        this.isLoading = true
        const tasks = await axios.get('/api/tasks')
        this.tasks = tasks.data.data
        this.isLoading = false
      } catch (error) {
        //
      }
    },
    async addTask(task: CreateTask): Promise<void> {
      const response = await axios.post('/api/tasks', task)
      console.log(response.data.data)
      this.tasks.push(response.data.data)
    },

    async deleteTask(id: number): Promise<void> {
      await axios.delete(`/api/tasks/${id}`)
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },

    handleTaskToggle(id: number): void {
      const task = this.tasks.find((task) => id === task.id)
      if (task) {
        task.isCompleted = !task.isCompleted
      }
    }
  }
})
