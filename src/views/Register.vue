<template>
  <div class="check flex h-screen items-center justify-center">
    <div
      class="mx-auto w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 sm:w-full"
    >
      <div class="px-6 py-4">
        <h2 class="text-center text-3xl font-medium text-gray-600">
          Create account
        </h2>

        <form @submit.prevent="Register">
          <div class="mt-4 w-full">
            <input
              class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300"
              type="email"
              placeholder="Email"
              aria-label="Email"
              v-model="username"
            />
          </div>

          <div class="mt-4 w-full">
            <input
              class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
              v-model="password"
            />
          </div>
          <div class="mt-4 w-full">
            <input
              class="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300"
              type="password"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              v-model="confirmPassword"
            />
          </div>
          <div class="mt-4 flex items-center justify-end">
            <input
              type="submit"
              value="Register"
              class="transform cursor-pointer rounded bg-gray-700 px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            />
          </div>
        </form>
      </div>

      <div
        class="flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700"
      >
        <span class="text-sm text-gray-600 dark:text-gray-200"
          >Have an account?
        </span>

        <div
          class="mx-2 text-sm font-bold text-sky-500 hover:underline dark:text-sky-400"
        >
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
  <Modal v-if="modalActive">
    <h1 class="title">{{ errorMsg }}</h1>
    <button @click="modalActive = false" class="btn shadow-red-400/50">
      Close
    </button>
  </Modal>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
import useAuth from "../composable/useAuth.js";
const { register } = useAuth();

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMsg = ref("");
const modalActive = ref(false);

const handleError = (error) => {
  switch (error) {
    case "auth/email-already-in-use":
      username.value = "";
      errorMsg.value = "Email already in use. Please try again!";
      break;
    case "auth/invalid-email":
      username.value = "";
      errorMsg.value = "Invalid email. Please try again!";

      break;
    case "auth/weak-password":
      errorMsg.value = "Weak password. Please try again!";
      break;
  }
  password.value = "";
  confirmPassword.value = "";
  modalActive.value = true;
};
const Register = async () => {
  if (password.value == confirmPassword.value) {
    await register(username.value, password.value)
      .then()
      .catch((error) => {
        handleError(error.code);
      });
  } else {
    errorMsg.value = "Wrong password confirmation, please try again!";
    password.value = "";
    confirmPassword.value = "";
    modalActive.value = true;
  }
};
</script>

<style scoped></style>
