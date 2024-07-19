<template>
	<el-row v-bind="widget.props" class="h-full max-h-20 border border-slate-300 border-dashed">
		<component
			v-for="item in widget.children"
			:key="item.id"
			:is="item.widgetComponent"
			:widget="item" />
	</el-row>
</template>

<script setup lang="ts">
defineOptions({
	name: 'RowWidget',
});

import {computed} from 'vue';
import {RowWidgetType} from '@/types/row';

const props = defineProps<{widget: RowWidgetType}>();
const widget = computed(() => props.widget);
</script>
