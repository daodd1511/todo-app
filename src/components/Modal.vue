<template>
  <div
    class="modal fixed bottom-0 top-0 right-0 left-0"
    :class="[props.isDark ? `dark` : ``]"
  >
    <div
      class="modal-overlay flex h-full w-full items-center justify-center bg-black/40"
    >
      <div
        class="modal-body flex h-1/3 w-10/12 flex-col items-center justify-around rounded-xl bg-white p-5 dark:bg-dark-bg dark:shadow dark:shadow-sky-200 sm:w-3/5 md:w-2/5"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isDark: Boolean,
});
</script>

<style scoped></style>
