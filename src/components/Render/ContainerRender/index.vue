<template>
	<el-container>
		<slot></slot>
	</el-container>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ContainerRender',
});
</script>
