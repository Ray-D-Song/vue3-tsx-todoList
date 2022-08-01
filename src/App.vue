<template>
  <h1 style="font-size: 50px;">
    <span style="color: #98c379">Vue+Tsx</span><span style="color: #61afef"> Todolist</span>
  </h1>
  <AddTask></AddTask>
  <TaskList></TaskList>
</template>

<script lang="ts">
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import store from "./store";
export default {
  setup() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      //@ts-ignore
      store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))));
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(store.state));
    });
},
  components: { TaskList, AddTask },
};
</script>
