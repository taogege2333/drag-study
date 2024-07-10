<template>
	<el-row
		v-bind="widget.props"
		class="min-h-10 border border-slate-300 border-dashed"
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
import {WidgetType} from '@/types/designer';
import {RowWidgetType} from '@/types/row';

interface Widget extends RowWidgetType {
	children: WidgetType[];
}

const props = defineProps<{widget: Widget}>();
const {widget, currentWidget, handleClick} = useWidget<Widget>(props);
</script>
