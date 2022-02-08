<template>
  <div class="check flex h-screen items-center justify-center">
    <div
      class="container h-72 w-10/12 rounded-md bg-white p-4 sm:w-8/12 md:w-6/12 lg:w-4/12"
    >
      <h1 class="text-center text-3xl">Login</h1>
      <form @submit.prevent="Login" class="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          v-model="username"
          class="h-10 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="h-10 w-full"
        />
        <input
          type="submit"
          value="Login"
          class="h-10 w-full cursor-pointer rounded-md bg-dark-bg-secondary text-very-light-grayish-blue"
        />
      </form>
      <div class="pt-6">
        <p class="float-left">
          <router-link to="/register">Register</router-link>
        </p>
        <button @click="modalResetPassword = true" class="float-right">
          Reset Password
        </button>
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
      class="h-10 w-4/5 rounded-md border-2 border-black px-2 placeholder:italic focus:outline-none"
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
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth.js";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../composable/useFirebase.js";

const { login, resetPassword } = useAuth();

const username = ref("");
const password = ref("");
const errorMsg = ref("");
const modalActive = ref(false);
// Reset password
const modalResetPassword = ref(false);
const resetPasswordSuccess = ref(false);
const resetEmail = ref("");

const router = useRouter();

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
  await login(username.value, password.value)
    .then()
    .catch((error) => {
      handleError(error.code);
    });
  gotoHome();
};
const ResetPassword = async () => {
  if (resetEmail.value != "") {
    await resetPassword(resetEmail.value);
    modalResetPassword.value = false;
    resetPasswordSuccess.value = true;
  }
};
const gotoHome = () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      router.push("/");
    }
  });
};
onBeforeMount(() => {
  if (firebaseAuth.currentUser) {
    router.push("/");
  }
});
</script>

<style scoped></style>
