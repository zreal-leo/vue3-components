<script setup lang="ts">
import file from "../docs/button.md?raw";

import { marked } from "../utils/md.ts";

console.log(file);
const result = marked.parse(file);

console.log(result)


</script>

<template>
	<div class="">layout</div>
</template>

<style></style>
