<template>
	<el-text
		:type="widget.props.type"
		:size="widget.props.size"
		:truncated="widget.props.truncated"
		:line-clamp="widget.props.lineClamp"
		>{{ widget.props.text }}</el-text
	>
</template>

<script setup lang="ts">
defineOptions({
	name: 'TextWidget',
});

import {TextWidgetType} from '@/types/text';
import {computed} from 'vue';

const props = defineProps<{widget: TextWidgetType}>();
const widget = computed(() => props.widget);
</script>

<style lang="scss" scoped>
.el-text {
	white-space: wrap !important;
}
</style>
