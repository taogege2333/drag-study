<template>
	<el-row
		v-bind="widget.props"
		class="h-full max-h-20 border border-slate-300 border-dashed"
		:class="{selected: currentWidget?.id === widget.id}"
		@click.stop="handleClick">
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

import {useWidget} from '@/hooks/useWidget';
import {RowWidgetType} from '@/types/row';

const props = defineProps<{widget: RowWidgetType}>();
const {widget, currentWidget, handleClick} = useWidget<RowWidgetType>(props);
</script>
