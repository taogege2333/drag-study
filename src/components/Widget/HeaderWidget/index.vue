<template>
	<el-header
		v-bind="widget.props"
		class="border border-slate-300 border-dashed"
		:class="{selected: currentWidget?.id === widget.id}"
		@click.stop="handleClick">
		<DragFrame :widgets="widget.children" :id="widget.id"></DragFrame>
	</el-header>
</template>

<script setup lang="ts">
defineOptions({
	name: 'HeaderWidget',
});

import DragFrame from '@/components/DragFrame.vue';
import {useWidget} from '@/hooks/useWidget';
import {LayoutWidgetType} from '@/types/designer';

const props = defineProps<{widget: LayoutWidgetType}>();
const {widget, currentWidget, handleClick} = useWidget<LayoutWidgetType>(props);
</script>
