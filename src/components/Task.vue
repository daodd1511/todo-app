<template>
  <div
    class="relative flex h-auto w-full items-center gap-4 border-b border-light-grayish-blue bg-very-light-gray px-4 py-[10px] dark:border-dark-border dark:bg-dark-bg-secondary"
  >
    <div
      class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full"
      :class="[props.task.done ? `check` : ``]"
      @click="
        store.toggleTask(
          props.task,
          firebaseAuth.currentUser != null ? firebaseAuth.currentUser.uid : ``
        )
      "
    >
      <i :class="[props.task.done ? taskDone.icon : taskNotDone.icon]"></i>
    </div>
    <p
      :class="[props.task.done ? taskDone.text : taskNotDone.text]"
      class="w-3/4 break-words"
    >
      {{ props.task.content }}
    </p>
    <i
      class="absolute right-5 h-[18px] w-[18px] cursor-pointer bg-icon-cross transition-all hover:rotate-90"
      @click="
        store.removeTask(
          props.task,
          firebaseAuth.currentUser != null ? firebaseAuth.currentUser.uid : ``
        )
      "
    ></i>
  </div>
</template>

<script setup>
import { useStore } from "../store/store.js";
import { firebaseAuth } from "../composable/useFirebase.js";
const store = useStore();
const props = defineProps({
  task: Object,
});
const taskDone = {
  icon: ["bg-icon-check w-[11px] h-[9px]"],
  text: ["line-through text-light-grayish-blue dark:text-dark-text-secondary"],
};
const taskNotDone = {
  icon: ["w-5 h-5 border-2 rounded-full border-gray-200"],
  text: ["dark:text-dark-text"],
};
</script>

<style scoped></style>
