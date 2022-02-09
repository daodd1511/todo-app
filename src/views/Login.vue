<template>
  <div class="check flex h-screen items-center justify-center">
    <div
      class="mx-auto w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 sm:w-full"
    >
      <div class="px-6 py-4">
        <h2 class="text-center text-3xl font-medium text-gray-600">Login</h2>

        <form @submit.prevent="Login">
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

          <div class="mt-4 flex items-center justify-between">
            <a
              href="#"
              class="text-sm text-gray-600 hover:text-gray-500 dark:text-gray-200"
              @click="modalResetPassword = true"
              >Forget Password?</a
            >

            <input
              type="submit"
              value="Login"
              class="transform cursor-pointer rounded bg-gray-700 px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            />
          </div>
        </form>
      </div>

      <div
        class="flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700"
      >
        <span class="text-sm text-gray-600 dark:text-gray-200"
          >Don't have an account?
        </span>

        <div
          class="mx-2 text-sm font-bold text-blue-500 hover:underline dark:text-blue-400"
        >
          <router-link to="/register">Register</router-link>
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
  <Modal v-if="modalResetPassword">
    <input
      type="email"
      v-model="resetEmail"
      placeholder="Your email"
      class="mt-2 block w-full rounded-md border border-gray-700 bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
    />
    <button
      @click="ResetPassword()"
      class="btn h-10 w-3/4 bg-sky-400 shadow-sky-400/50 lg:w-1/2"
    >
      Send reset link!
    </button>
    <button
      @click="modalResetPassword = false"
      class="btn h-10 w-3/4 shadow-red-400/50 lg:w-1/2"
    >
      Close
    </button>
  </Modal>
  <Modal v-if="resetPasswordSuccess">
    <h1 class="title">Please check your email!</h1>
    <button @click="resetPasswordSuccess = false" class="btn shadow-red-400/50">
      Close
    </button>
  </Modal>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
import useAuth from "../composable/useAuth.js";

const { login, resetPassword } = useAuth();

const username = ref("");
const password = ref("");
const errorMsg = ref("");
const modalActive = ref(false);
// Reset password
const modalResetPassword = ref(false);
const resetPasswordSuccess = ref(false);
const resetEmail = ref("");

const handleError = (error) => {
  switch (error) {
    case "auth/wrong-password":
      errorMsg.value = "Wrong password! Please try again";
      break;
    case "auth/user-not-found":
      errorMsg.value = "User not found! Please register or try again";
      break;
  }
  password.value = "";
  modalActive.value = true;
};
const Login = async () => {
  if ((username.value || password.value) != "") {
    await login(username.value, password.value)
      .then()
      .catch((error) => {
        handleError(error.code);
      });
  } else {
    errorMsg.value = "Please type in your email address or password";
    modalActive.value = true;
  }
};
const ResetPassword = async () => {
  if (resetEmail.value != "") {
    await resetPassword(resetEmail.value);
    modalResetPassword.value = false;
    resetPasswordSuccess.value = true;
  }
};
</script>

<style scoped></style>
