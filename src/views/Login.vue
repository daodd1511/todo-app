<template>
  <div class="check h-screen flex justify-center items-center">
    <div
      class="container w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-72 bg-white rounded-md p-4"
    >
      <h1 class="text-3xl text-center">Login</h1>
      <form @submit.prevent="Login" class="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          v-model="username"
          class="w-full h-10"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="w-full h-10"
        />
        <input
          type="submit"
          value="Login"
          class="w-full h-10 bg-dark-bg-secondary text-very-light-grayish-blue rounded-md cursor-pointer"
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
      class="w-4/5 h-10 placeholder:italic focus:outline-none border-2 border-black rounded-md px-2"
    />
    <button
      @click="ResetPassword()"
      class="btn w-3/4 lg:w-1/2 h-10 bg-sky-400 shadow-sky-400/50"
    >
      Send reset link!
    </button>
    <button
      @click="modalResetPassword = false"
      class="btn w-3/4 lg:w-1/2 h-10 shadow-red-400/50"
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
