<template>
	<el-footer
		v-bind="widget.props"
		class="border border-slate-300 border-dashed"
		:class="{selected: currentWidget?.id === widget.id}"
		@click.stop="handleClick">
		<drag-frame :widgets="widget.children" :id="widget.id" :name="widget.name"></drag-frame>
	</el-footer>
</template>

<script setup lang="ts">
defineOptions({
	name: 'FooterWidget',
});

import DragFrame from '@/components/DragFrame.vue';
import {useWidget} from '@/hooks/useWidget';
import {LayoutWidgetType} from '@/types/designer';

const props = defineProps<{widget: LayoutWidgetType}>();
const {widget, currentWidget, handleClick} = useWidget<LayoutWidgetType>(props);
</script>
