<template>
  <div class="modal absolute top-0 left-0 bottom-0 right-0">
    <div
      class="modal-overlay w-full h-full bg-black/40 flex justify-center items-center"
    >
      <div
        class="modal-body w-10/12 h-1/3 sm:w-3/5 md:w-2/5 bg-white dark:bg-dark-bg-secondary rounded-lg flex justify-around items-center flex-col p-5"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
