import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "animate.css";
import "./assets/style.css";

createApp(App).use(router).mount("#app");
