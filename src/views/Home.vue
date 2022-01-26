<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Task from "../components/Task.vue";
import { useStore } from "../store/store.js";
import { ref, onBeforeMount } from "vue";
import useAuth from "../composable/useAuth.js";
import useFireStore from "../composable/useFireStore";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../composable/useFirebase.js";
const { addData, readData } = useFireStore();
const { logout } = useAuth();
const store = useStore();
const newTask = ref("");
const isAuthenticated = ref(false);
const addTask = () => {
  store.addTask(newTask.value);
  addData(
    store.tasks,
    firebaseAuth.currentUser.uid,
    store.isDark != undefined ? store.isDark : false
  );
  newTask.value = "";
};
const sortItems = [
  { name: "All", id: 0 },
  { name: "Active", id: 1 },
  { name: "Completed", id: 2 },
];
const clear = () => {
  for (let el of store.filteredTasks) {
    if (el.done) {
      store.removeTask(el, firebaseAuth.currentUser.uid);
      store.activeEl = 0;
    }
  }
};
onBeforeMount(() => {
  onAuthStateChanged(firebaseAuth, async (user) => {
    if (user) {
      await readData(user.uid);
      store.counter = store.tasks.length;
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
      store.$reset();
    }
  });
});
</script>

<template>
  <div :class="[store.isDark ? `dark` : ``]">
    <div class="h-screen dark:bg-dark-bg overflow-y-scroll">
      <div
        class="z-0 h-72 dark:bg-desktop-dark bg-desktop-light bg-cover bg-center"
      >
        <div
          class="container z-10 w-11/12 md:w-3/5 lg:w-2/5 h-auto mx-auto pt-16 pb-40 sm:py-16"
        >
          <div class="flex justify-between">
            <h1 class="text-3xl font-bold tracking-widest text-very-light-gray">
              TODO
            </h1>
            <i
              class="bg-icon-moon dark:bg-icon-sun w-[26px] h-[26px] cursor-pointer transition ease-in delay-1000"
              @click="store.toggleTheme"
            ></i>
          </div>
          <div
            class="w-full h-12 bg-very-light-gray dark:bg-dark-bg-secondary rounded flex items-center gap-4 px-4 mt-12 mb-8"
          >
            <div class="w-5 h-5 border-2 rounded-full border-gray-200"></div>
            <input
              type="text"
              class="w-full placeholder:text-dark-grayish-blue dark:bg-dark-bg-secondary dark:text-dark-text focus:outline-none caret-bright-blue"
              placeholder="Add a new task"
              v-model="newTask"
              @keypress.enter="addTask"
            />
          </div>
          <div class="rounded-t overflow-hidden shadow-xl">
            <Task
              v-for="(task, i) in store.filteredTasks"
              :key="i"
              :task="task"
            />
          </div>
          <div
            class="w-full h-12 bg-very-light-gray dark:bg-dark-bg-secondary flex justify-between items-center px-4 rounded-b relative shadow-xl"
          >
            <p
              class="text-xs text-dark-grayish-blue dark:text-dark-text-secondary"
            >
              {{ store.counter }}
              {{ store.counter >= 2 ? `tasks` : `task` }} left
            </p>
            <div
              class="flex text-sm absolute bottom-[-5rem] left-0 rounded w-full h-12 justify-center bg-very-light-gray dark:bg-dark-bg-secondary gap-4 shadow-xl sm:static sm:shadow-none sm:w-fit"
            >
              <button
                v-for="(item, i) in sortItems"
                :key="i"
                @click="store.filterTask(item)"
                class="dark:text-dark-text-secondary"
                :class="[store.activeEl === i ? `active` : ``]"
              >
                {{ item.name }}
              </button>
            </div>
            <button
              class="text-sm dark:text-dark-text-secondary"
              @click="clear()"
            >
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute top-10 right-10">
    <button v-if="!isAuthenticated">
      <router-link to="/login">Login</router-link>
    </button>
    <div v-else>
      Hi {{ firebaseAuth.currentUser.email.split("@")[0] }},
      <button @click="logout"><router-link to="/">Logout</router-link></button>
    </div>
  </div>
</template>

<style></style>
