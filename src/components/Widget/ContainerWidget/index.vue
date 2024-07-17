<template>
	<el-container
		v-bind="widget.props"
		class="w-full h-full border border-slate-300 border-dashed"
		:class="{selected: currentWidget?.id === widget.id}"
		@click.stop="handleClick">
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

import {useWidget} from '@/hooks/useWidget';
import {ContainerWidgetType} from '@/types/designer';

const props = defineProps<{widget: ContainerWidgetType}>();
const {widget, currentWidget, handleClick} = useWidget<ContainerWidgetType>(props);
</script>
