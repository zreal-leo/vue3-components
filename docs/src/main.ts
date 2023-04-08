import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import Mui from "mui";
const app = createApp(App);

app.use(Mui, {
	mode: "light"
});
app.use(router);

app.mount("#app");
