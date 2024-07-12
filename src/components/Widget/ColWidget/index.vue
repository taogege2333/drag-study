<template>
	<el-col
		v-bind="widget.props"
		class="border border-slate-300 border-dashed"
		:class="{selected: currentWidget?.id === widget.id}"
		@click.stop="handleClick">
		<DragFrame :widgets="widget.children" :id="widget.id" :name="widget.name"></DragFrame>
	</el-col>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ColWidget',
});

import DragFrame from '@/components/DragFrame.vue';
import {useWidget} from '@/hooks/useWidget';
import {ColWidgetType} from '@/types/col';

const props = defineProps<{widget: ColWidgetType}>();
const {widget, currentWidget, handleClick} = useWidget<ColWidgetType>(props);
</script>
