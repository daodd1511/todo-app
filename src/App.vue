<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Task from "./components/Task.vue"
import {useStore} from "./store/index.js"
import {ref} from 'vue'
const newTask = ref('');
const store = useStore();
const isDark = ref(false);
const addTask = ()=>{
  store.addTask(newTask.value);
  newTask.value = "";
}
const sortItems = [
  {name:"All"},
  {name:"Active"},
  {name:"Completed"},
];
const clear = () => {
  for(let el of store.tasks){
    // console.log(el);
    if(el.done){
      store.removeTask(el);
    }
  }
};
</script>

<template>
    <div :class="[store.isDark ? `dark` : ``]">
      <div class="h-screen dark:bg-dark-bg overflow-y-scroll">
        <div class="z-0 h-72 dark:bg-desktop-dark bg-desktop-light bg-cover bg-center">
          <div class="container z-10 w-11/12 md:w-1/2 lg:w-1/3 h-screen mx-auto py-16">
            <div class="flex justify-between">
              <h1 class="text-3xl font-bold tracking-widest text-very-light-gray">TODO</h1>
              <i class="bg-icon-moon dark:bg-icon-sun w-[26px] h-[26px] cursor-pointer transition ease-in delay-1000" @click="store.toggleTheme"></i>
            </div>
            <div class="w-full h-12 bg-very-light-gray dark:bg-dark-bg-secondary rounded flex items-center gap-4 px-4 mt-12 mb-8">
              <div class="w-5 h-5 border-2 rounded-full border-gray-200"></div>
              <input
                type="text"
                class="w-full placeholder:text-dark-grayish-blue dark:bg-dark-bg-secondary dark:text-dark-text focus:outline-none caret-bright-blue"
                placeholder="Add a new task"
                v-model="newTask"
                @keypress.enter="addTask"
                >
            </div>
            <div class="rounded overflow-hidden">
              <Task v-for="(task,i) in store.tasks" :key="i" :task="task"/>
              <div class="w-full h-12 bg-very-light-gray dark:bg-dark-bg-secondary flex justify-between items-center px-4">
                <p class="text-sm text-dark-grayish-blue dark:text-dark-text-secondary">{{store.counter}} items left</p>
                <div class="flex text-sm gap-4">
                  <!-- <button
                    v-for="(item,i) in sortItems" :key="i"
                    class="cursor-pointer dark:text-dark-text-secondary"
                  >
                    {{item.name}}
                  </button> -->
                </div>
                <button class="text-sm dark:text-dark-text-secondary" @click="clear">Clear Completed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>
