<script setup>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp, firebaseAuth } from "./composable/useFirebase.js";
const router = useRouter();
const route = useRoute();
onBeforeMount(() => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user && (route.path == "/login" || route.path == "/register")) {
      router.replace("/");
    }
  });
});
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
