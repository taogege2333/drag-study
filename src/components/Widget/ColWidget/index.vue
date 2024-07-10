<template>
	<el-col
		v-bind="widget.props"
		class="border border-slate-300 border-dashed"
		:class="{selected: currentWidget?.id === widget.id}"
		@click.stop="handleClick">
		<DragFrame :widgets="widget.children" :id="widget.id"></DragFrame>
	</el-col>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ColWidget',
});

import {WidgetType} from '@/types/designer';
import DragFrame from '@/components/DragFrame.vue';
import {useWidget} from '@/hooks/useWidget';
import {ColWidgetType} from '@/types/col';

interface Widget extends ColWidgetType {
	children: WidgetType[];
}

const props = defineProps<{widget: Widget}>();
const {widget, currentWidget, handleClick} = useWidget<Widget>(props);
</script>
