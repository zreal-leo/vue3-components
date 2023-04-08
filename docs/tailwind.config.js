/** @type {import('tailwindcss').Config} */

// FIXME: tailwind 应该配置在 ui 下
// 暂时配置在这里为了实时预览组件，而无需编译
export default {
	content: ["../mui/components/**/*.{vue,ts}", "./src/**/*.{vue,ts}"],
	theme: {
		extend: {}
	},
	plugins: []
};
