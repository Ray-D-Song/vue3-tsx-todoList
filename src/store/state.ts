export interface State {
    newTask: {
      taskName: string,
      done: boolean,
      taskShow: boolean
    },
    taskList: object[]
  }

  export const state: State = {
    newTask: {
        taskName: '',
        done: false,
        taskShow: true
      },
    taskList: []
  }