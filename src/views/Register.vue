<template>
  <div class="login">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <input type="email" placeholder="Email" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Register" />
      <p><router-link to="/login">Login</router-link></p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth.js";

const { isAuthenticated, register } = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const Register = async () => {
  await register(username.value, password.value);
  gotoHome();
};
const gotoHome = () => {
  if (isAuthenticated.value) {
    router.push("/");
  } else {
    console.log("error");
  }
};
</script>

<style scoped></style>
