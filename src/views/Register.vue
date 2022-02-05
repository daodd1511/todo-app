<template>
  <div class="check h-screen flex justify-center items-center">
    <div
      class="container w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-80 bg-white rounded-md p-4"
    >
      <h1 class="text-3xl text-center">Register</h1>
      <form @submit.prevent="Register" class="flex flex-col gap-4">
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
          type="password"
          placeholder="Confirm Password"
          v-model="passwordConfirm"
          class="w-full h-10"
        />
        <input
          type="submit"
          value="Register"
          class="w-full h-10 bg-dark-bg-secondary text-very-light-grayish-blue rounded-md cursor-pointer"
        />
        <p><router-link to="/login">Login</router-link></p>
      </form>
    </div>
  </div>
  <Modal @close="modalActive = false" v-if="modalActive">
    <h1 class="title">{{ errorMsg }}</h1>
    <button @click="modalActive = false" class="btn shadow-red-400/50">
      Close
    </button>
  </Modal>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth.js";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../composable/useFirebase.js";
const { register } = useAuth();

const username = ref("");
const password = ref("");
const passwordConfirm = ref("");
const errorMsg = ref("");
const modalActive = ref(false);
const router = useRouter();

const handleError = (error) => {
  switch (error) {
    case "auth/email-already-in-use":
      username.value = "";
      errorMsg.value = "Email already in use! Please try again";
      break;
    case "auth/invalid-email":
      username.value = "";
      errorMsg.value = "Invalid email! Please try again";

      break;
    case "auth/weak-password":
      errorMsg.value = "Weak password! Please try again";
      break;
  }
  password.value = "";
  passwordConfirm.value = "";
  modalActive.value = true;
};
const Register = async () => {
  if (password.value == passwordConfirm.value) {
    await register(username.value, password.value)
      .then()
      .catch((error) => {
        handleError(error.code);
      });
    gotoHome();
  } else {
    errorMsg.value = "Wrong password confirmation, please try again!";
    password.value = "";
    passwordConfirm.value = "";
    modalActive.value = true;
  }
};
const gotoHome = () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      router.replace("/");
    }
  });
};
</script>

<style scoped></style>
