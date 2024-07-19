<template>
	<el-text
		:type="props.type"
		:size="props.size"
		:truncated="props.truncated"
		:line-clamp="props.lineClamp"
		>{{ props.text }}</el-text
	>
</template>

<script setup lang="ts">
defineOptions({
	name: 'TextRender',
});

import {TextPropsType} from '@/types/text';

const props = defineProps<TextPropsType>();
</script>

<style lang="scss" scoped>
.el-text {
	white-space: wrap !important;
}
</style>
