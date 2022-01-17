import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import './index.css'
import {createPinia} from 'pinia'
import { initializeApp } from "firebase/app"
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'


const app = createApp(App);
const firebaseConfig = {
    apiKey: "AIzaSyD5G1tB0tO3pSHEDtY8yzROY9uQrsYFSs4",
    authDomain: "todo-e47c0.firebaseapp.com",
    projectId: "todo-e47c0",
    storageBucket: "todo-e47c0.appspot.com",
    messagingSenderId: "391559150737",
    appId: "1:391559150737:web:2231f001dd5f4ec3991330"
};
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'Home', component: Home},
        {path:'/login', name:'Login', component:Login},
        {path:'/register', name:'Register', component:Register},
    ]
})

initializeApp(firebaseConfig);
app.use(createPinia());
app.use(router).mount('#app')
