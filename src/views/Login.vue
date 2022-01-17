<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="Login">
            <input type="email" placeholder="Email" v-model="username">
            <input type="password" placeholder="Password" v-model="password">
            <input type="submit" value="Login">
            <p><router-link to="/register">Register</router-link></p>
        </form>
        <button @click="test">test</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import useAuth from "../composable/useAuth.js"

const { isAuthenticated, login } = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();


const Login = async ()=>{
    await login(username.value, password.value);
    gotoHome();
}
const gotoHome = ()=>{
    if(isAuthenticated.value){
        router.push('/');
    }
    else{
        console.log('error');
    }
}

</script>

<style scoped>

</style>