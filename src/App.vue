<script setup>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./composable/useFirebase.js";
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
