import Vuex from 'vuex'
import { state } from './state';

export default new Vuex.Store({
  state,
  getters: {
  },
  mutations: {
    addAction(state){
      //@ts-ignore
      state.taskList.push(state.newTask)
    },
    deleteAction(state, num){
      state.taskList.splice(num,1);
    },
    allFilter(state){
      state.taskList.map((data: any)=>{data.taskShow = true})
    },
    todoFilter(state){
      state.taskList.map((data: any)=>{
        if(data.done == false)
        {data.taskShow = true;}
        else data.taskShow = false;
      })
    },
    doneFilter(state){
      state.taskList.map((data: any)=>{
        if(data.done == true)
        {data.taskShow = true;}
        else data.taskShow = false;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
