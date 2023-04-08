import { createRouter, createWebHistory } from "vue-router";
import layout from "../layout/index.vue";

const routes = [{ path: "/button", component: layout }];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
