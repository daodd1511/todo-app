import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";
import router from "./router/router.js";

const app = createApp(App);

app.use(createPinia());
app.use(router).mount("#app");
