import MButton from "./components/button";
import "./index.css";
import type { App } from "vue";

export { MButton };
type Options = {
	mode?: "dark" | "light";
};

export default {
	// FIXME: 自动注册组件，关联 options
	install(app: App<Element>, options: Options) {
		app.component("MButton", MButton);
	}
};
