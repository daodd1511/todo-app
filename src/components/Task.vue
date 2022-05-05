<template>
  <div
    class="relative flex h-auto w-full items-center gap-2 border-b border-light-grayish-blue bg-very-light-gray px-4 py-[10px] dark:border-dark-border dark:bg-dark-bg-secondary"
  >
    <div
      class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full"
      :class="[props.task.done ? `check` : ``]"
      @click="
        store.toggleTask(
          props.task,
          firebaseAuth.currentUser != null ? firebaseAuth.currentUser.uid : ``
        ),
          RerenderFilteredTasks(),
          store.checkHaveCompletedTasks()
      "
    >
      <i :class="[props.task.done ? taskDone.icon : taskNotDone.icon]"></i>
    </div>
    <label
      :class="[props.task.done ? taskDone.text : taskNotDone.text]"
      class="w-3/4 break-words px-3"
      v-if="props.task != editedTask"
      @dblclick="edit(props.task)"
    >
      {{ props.task.content }}
    </label>
    <input
      v-else
      type="text"
      v-model="props.task.content"
      class="w-3/4 px-3"
      @vnode-mounted="({ el }) => el.focus()"
      @blur="doneEdit(props.task)"
      @keyup.enter="doneEdit(props.task)"
      @keyup.escape="cancelEdit(props.task)"
    />
    <i
      class="absolute right-5 h-[18px] w-[18px] cursor-pointer bg-icon-cross transition-all hover:rotate-90"
      @click="
        store.removeTask(
          props.task,
          firebaseAuth.currentUser != null ? firebaseAuth.currentUser.uid : ``
        ),
          CheckHaveComletedTasks()
      "
    ></i>
  </div>
</template>

<script setup>
import { useStore } from "../store/store.js";
import { firebaseAuth } from "../composable/useFirebase.js";
import useFireStore from "../composable/useFireStore";
import { ref } from "vue";
const { addData } = useFireStore();
const store = useStore();
const props = defineProps({
  task: Object,
});
// Css for different task state
const taskDone = {
  icon: ["bg-icon-check w-[11px] h-[9px]"],
  text: ["line-through text-light-grayish-blue dark:text-dark-text-secondary"],
};
const taskNotDone = {
  icon: ["w-5 h-5 border-2 rounded-full border-gray-200"],
  text: ["dark:text-dark-text"],
};
let beforeEditCache = "";
const editedTask = ref();
const edit = (task) => {
  beforeEditCache = task.content;
  editedTask.value = task;
};
const doneEdit = (task) => {
  if (editedTask.value) {
    editedTask.value = null;
    task.content = task.content.trim();
    addData(store.tasks, firebaseAuth.currentUser.uid);
    if (!task.content) store.removeTask(task, firebaseAuth.currentUser.uid);
  }
};
const cancelEdit = (task) => {
  editedTask.value = null;
  task.content = beforeEditCache;
};
const RerenderFilteredTasks = () => {
  if (store.activeEl == 1) {
    store.filterTask("Active");
  }
  if (store.activeEl == 2) {
    store.filterTask("Completed");
  }
};
</script>

<style scoped></style>
