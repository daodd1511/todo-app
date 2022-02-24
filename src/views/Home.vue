<template>
  <div :class="[store.isDark ? `dark` : ``]">
    <div class="h-full dark:bg-dark-bg">
      <div
        class="z-0 h-72 bg-desktop-light bg-cover bg-center dark:bg-desktop-dark"
      ></div>
      <div
        class="container z-10 mx-auto -mt-52 h-auto w-11/12 pb-40 md:w-3/5 lg:w-2/5"
      >
        <div class="flex justify-between">
          <h1 class="text-3xl font-bold tracking-widest text-very-light-gray">
            TODO
          </h1>
          <i
            class="h-[26px] w-[26px] cursor-pointer bg-icon-moon transition delay-1000 ease-in dark:bg-icon-sun"
            @click="store.toggleTheme"
          ></i>
        </div>
        <div
          class="mt-12 mb-8 flex h-12 w-full items-center gap-4 rounded bg-white px-4 dark:bg-dark-bg-secondary"
        >
          <div class="h-5 w-5 rounded-full border-2 border-gray-200"></div>
          <input
            type="text"
            class="w-full caret-bright-blue placeholder:text-dark-grayish-blue focus:outline-none dark:bg-dark-bg-secondary dark:text-dark-text"
            placeholder="Add a new task"
            v-model="newTask"
            @keypress.enter="addTask"
          />
        </div>
        <div class="overflow-hidden rounded-t shadow-xl">
          <Task
            v-for="(task, i) in store.filteredTasks"
            :key="i"
            :task="task"
          />
        </div>
        <div
          class="relative flex h-12 w-full items-center justify-between rounded-b bg-white px-4 shadow-xl dark:bg-dark-bg-secondary"
        >
          <p
            class="text-xs text-dark-grayish-blue dark:text-dark-text-secondary"
          >
            {{ store.counter }}
            {{ store.counter >= 2 ? `tasks` : `task` }} left
          </p>
          <div
            class="absolute bottom-[-5rem] left-0 flex h-12 w-full justify-center gap-4 rounded bg-white text-sm shadow-xl dark:bg-dark-bg-secondary sm:static sm:w-fit sm:shadow-none"
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
  <div class="absolute top-5 right-5 lg:top-10 lg:right-10">
    <button v-if="!isAuthenticated">
      <router-link to="/login">Login</router-link>
    </button>
    <div v-else>
      Hi {{ firebaseAuth.currentUser.email.split("@")[0] }},
      <button @click="modalActive = true">
        <router-link to="/">Logout</router-link>
      </button>
    </div>
  </div>
  <Modal v-if="modalActive" :isDark="store.isDark">
    <h1 class="title dark:text-dark-text">Do you want to log out?</h1>
    <div class="flex w-full justify-around">
      <button @click="modalActive = false" class="btn shadow-red-400/50">
        No
      </button>
      <button
        @click="logout(), (modalActive = false)"
        class="btn bg-sky-400 shadow-sky-400/50"
      >
        <router-link to="/">Yes</router-link>
      </button>
    </div>
  </Modal>
</template>
<script setup>
import Modal from "..//components/Modal.vue";
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
const modalActive = ref(false);
const addTask = () => {
  if (isAuthenticated.value) {
    store.addTask(newTask.value);
    addData(store.tasks, firebaseAuth.currentUser.uid);
    newTask.value = "";
  } else {
    store.addTask(newTask.value);
    newTask.value = "";
  }
};
const sortItems = [
  { name: "All", id: 0 },
  { name: "Active", id: 1 },
  { name: "Completed", id: 2 },
];
const clear = () => {
  for (let el of store.filteredTasks) {
    if (el.done) {
      store.removeTask(
        el,
        firebaseAuth.currentUser != null ? firebaseAuth.currentUser.uid : ``
      );
      store.activeEl = 0;
    }
  }
};
onBeforeMount(() => {
  onAuthStateChanged(firebaseAuth, async (user) => {
    if (user) {
      await readData(user.uid);
      store.counter = store.tasks.filter((task) => {
        return !task.done;
      }).length;
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
      store.$reset();
    }
  });
});
</script>
<style></style>
