import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  status: string
}

export const useTasks = defineStore('tasks', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        status: 'ON Going'
      },
      {
        id: 2,
        title: 'Task 2',
        status: 'Completed'
      },
      {
        id: 3,
        title: 'Task 3',
        status: 'Created'
      },
      {
        id: 4,
        title: 'Task 4',
        status: 'ON Going'
      },
      {
        id: 5,
        title: 'Task 5',
        status: 'Completed'
      }
    ] as Task[]
  }),

  getters: {},

  actions: {
    addTask(task: Task): void {
      this.tasks.push(task)
    },

    deleteTask(id: number): void {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id
      })
    }
  }
})
