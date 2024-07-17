<template>
	<el-container v-bind="widget.props" class="w-full h-full border border-slate-300 border-dashed">
		<component
			v-for="item in widget.children"
			:key="item.id"
			:is="item.widgetComponent"
			:widget="item" />
	</el-container>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ContainerWidget',
});

import {computed} from 'vue';
import {ContainerWidgetType} from '@/types/designer';

const props = defineProps<{widget: ContainerWidgetType}>();
const widget = computed(() => props.widget);
</script>
