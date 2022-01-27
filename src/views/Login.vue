<template>
  <div class="check h-screen flex justify-center items-center">
    <div class="container w-1/3 h-2/5 bg-very-light-gray rounded-md p-4">
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
          class="w-full h-10 bg-dark-bg-secondary text-very-light-grayish-blue rounded-md"
        />
        <p><router-link to="/register">Register</router-link></p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth.js";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../composable/useFirebase.js";

const { login } = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const handleError = (error) => {
  switch (error) {
    case "auth/wrong-password":
      window.alert("Wrong password! Please try again");
      break;
    case "auth/user-not-found":
      window.alert("User not found! Please register or try again");
  }
};
const Login = async () => {
  await login(username.value, password.value)
    .then()
    .catch((error) => {
      handleError(error.code);
    });
  gotoHome();
};
const gotoHome = () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      router.push("/");
    }
  });
};
</script>

<style scoped></style>
