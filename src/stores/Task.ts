import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  isCompleted: boolean
}

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        isCompleted: true
      },
      {
        id: 2,
        title: 'Task 2',
        isCompleted: false
      },
      {
        id: 3,
        title: 'Task 3',
        isCompleted: false
      },
      {
        id: 4,
        title: 'Task 4',
        isCompleted: true
      },
      {
        id: 5,
        title: 'Task 5',
        isCompleted: false
      }
    ] as Task[]
  }),

  getters: {
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
    addTask(task: Task): void {
      this.tasks.push(task)
    },

    deleteTask(id: number): void {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id
      })
    },

    handleTaskToggle(id: number): void {
      const task = this.tasks.find((task) => id === task.id)
      if (task) {
        task.isCompleted = !task.isCompleted
      }
    }
  }
})
