<template>
  <div
    class="w-full h-auto bg-very-light-gray dark:bg-dark-bg-secondary flex items-center gap-4 px-4 py-[10px] border-b border-light-grayish-blue dark:border-dark-border relative"
  >
    <div
      class="w-5 h-5 rounded-full flex items-center justify-center cursor-pointer"
      :class="[props.task.done ? `check` : ``]"
      @click="store.toggleTask(props.task)"
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
      class="bg-icon-cross w-[18px] h-[18px] absolute right-5 transition-all hover:rotate-90 cursor-pointer"
      @click="store.removeTask(props.task, userid)"
    ></i>
  </div>
</template>

<script setup>
import { useStore } from "../store/store.js";
import useAuth from "../composable/useAuth.js";
const { user } = useAuth();
const userid = user.value.id;
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
