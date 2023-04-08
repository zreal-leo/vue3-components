<script setup lang="ts">
const props = defineProps<{
	round: boolean;
}>();

console.log(props.round);
</script>

<template>
	<button :class="[{ rounded: props.round }, 'px-4', 'py-2', 'bg-slate-400']">
		<slot></slot>
	</button>
</template>
