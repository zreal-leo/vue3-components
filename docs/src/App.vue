<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
	<div class="h-full flex flex-col">
		<Header class="h-20"></Header>
		<div class="flex flex-1">
			<Sidebar class="w-3/12"></Sidebar>
			<router-view class="flex-1"></router-view>
		</div>
	</div>
</template>

<style>
html,
body,
#app {
	@apply h-full;
}
</style>
